// import React, { useState } from 'react'
// import axios from 'axios'
// import { url } from '../../config/keyConfig';
// import toast from 'react-hot-toast';
// import { Router } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";




// const signInPage = () => {

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();




//     const addUser = async (e) => {
//         e.preventDefault();
//         const formData = {
//             name: name,
//             email: email,
//             password: password
//         }

//         try {
//             const user = await axios.post(`${url}/api/user/addUser`,formData);
//             toast.success("User Added successfully");
//             navigate("/login", { replace: true });
//         }
//         catch (error) {
//             toast.error("Failed to add User")
//             console.error(error);
//         }
//     }


//     return (
//         <div className='flex w-full h-screen justify-center items-center'>
//             <form action="" onSubmit={addUser} className='flex flex-col items-center gap-6 bg-red-100 border-2 rounded-xl w-[50%] p-6 m-6'>

//                 <div className='w-full'>
//                     <label htmlFor="name">Name</label>

//                     <input
//                         onChange={(e) => {
//                             setName(e.target.value);
//                         }}
//                         type="text"
//                         id="name"
//                     />
//                 </div>

//                 <div className='w-full'>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="text"
//                         id="email"
//                         onChange={
//                             (e) => {
//                                 setEmail(e.target.value)
//                             }
//                         }
//                     />
//                 </div>

//                 <div className='w-full'>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="text"
//                         id="password"
//                         onChange={(e) => {
//                             setPassword(e.target.value)
//                         }}
//                     />
//                 </div>


//                 <button type='submit' className='bg-blue-600 w-[20%] h-8 rounded-xl'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default signInPage


import React, { useState } from 'react'
import axios from 'axios'
import { url } from '../../config/keyConfig';
import toast from 'react-hot-toast';
import { Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const signInPage = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const addUser = async (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            password: password
        }

        try {
            const user = await axios.post(`${url}/api/user/addUser`, formData);
            toast.success("User Added successfully");
            navigate("/login", { replace: true });
        }
        catch (error) {
            toast.error("Failed to add User")
            console.error(error);
        }
    }

    return (


        <div className="flex justify-center items-center h-screen bg-gray-100" >

            <form
                onSubmit={addUser}
                className="bg-white shadow-lg rounded-xl p-8 w-87.5 flex flex-col items-center gap-5"
            >

                <h2 className="text-2xl font-semibold text-center">Sign In</h2>

                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>


                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-medium">Password</label>
                    <input
                        type="text"
                        placeholder="Enter your password"
                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>



                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                >
                    Sign In
                </button>


            </form>

        </div >
    )
}

export default signInPage