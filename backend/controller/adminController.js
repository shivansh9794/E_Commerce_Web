import User from "../models/userModel.js";

export const userGrowth15days = async (req, res) => {
    try {
        // 🔹 Step 1: Calculate date range
        const endDate = new Date(); // today
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 14); // last 15 days (including today)
        startDate.setHours(0, 0, 0, 0);

        // 🔹 Step 2: Aggregate only last 15 days
        const usersPerDay = await User.aggregate([
            {
                $match: {
                    createdAt: { $gte: startDate, $lte: endDate }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$createdAt"
                        }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // 🔹 Step 3: Get total users BEFORE this range (important for cumulative)
        const previousTotal = await User.countDocuments({
            createdAt: { $lt: startDate }
        });

        // 🔹 Step 4: Fill dates + cumulative
        let result = [];
        let total = previousTotal;
        let index = 0;

        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            let formattedDate = currentDate.toISOString().split("T")[0];

            if (
                index < usersPerDay.length &&
                usersPerDay[index]._id === formattedDate
            ) {
                total += usersPerDay[index].count;
                index++;
            }

            result.push({
                date: formattedDate,
                totalUsers: total
            });

            currentDate.setDate(currentDate.getDate() + 1);
        }

        res.json(result);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}