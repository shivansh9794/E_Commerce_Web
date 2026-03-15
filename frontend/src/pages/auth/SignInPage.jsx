import React, { useState } from 'react'

const signInPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const addUser = (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            password: password
        }
        console.log(formData);
    }


    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <form action="" onSubmit={ addUser} className='flex flex-col items-center gap-6 bg-red-100 border-2 rounded-xl w-[50%] p-6 m-6'>

                <div className='w-full'>
                    <label htmlFor="name">Name</label>

                    <input
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        type="text"
                        id="name"
                    />
                </div>

                <div className='w-full'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }
                        }
                    />
                </div>

                <div className='w-full'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>


                <button type='submit' className='bg-blue-600 w-[20%] h-8 rounded-xl'>Submit</button>
            </form>
        </div>
    )
}

export default signInPage