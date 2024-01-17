'use client';
import { newUser } from '@/app/lib/actions';
import Link from 'next/link';
import { useState } from 'react';
import {useFormState} from 'react-dom';

export default function SignUp() {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    const [message, formAction] = useFormState( newUser, null)

    const handleChange = (e) => {
        if(e.target.name === "userName") {
            setUserName(e.target.value);
            console.log(userName);
        } else if(e.target.name === "password") {
            setPassword(e.target.value);
            console.log(password);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //addUser() <---->
        console.log("clicked");
    }

    return (
        <form className='flex flex-col w-4/12' action={ formAction }>
            <label className='mb-2' htmlFor="name">Name</label>
            <input className='mb-4 rounded pl-4 pr-4 h-12 text-black' type="text" id="name" name="name" placeholder='Enter your name' onChange={handleChange}/>
            <label className='mb-2' htmlFor="email">Email</label>
            <input className='mb-4 rounded pl-4 pr-4 h-12 text-black' type="email" id="email" name="email" placeholder='Enter your email' onChange={handleChange}/>
            <label className='mb-2' htmlFor="password">Password</label>
            <input className='mb-4 rounded pl-4 pr-4 h-12 text-black' type="password" id="password" name="password" placeholder='Enter a password' onChange={handleChange} />
            <label className='mb-2' htmlFor="confirmP">Confirm password</label>
            <input className='mb-4 rounded pl-4 pr-4 h-12 text-black' type="password" id="confirmP" name="confirmP" placeholder='Confirm your password' onChange={handleChange}/>
            <input className='block items-center h-12 bg-lime-green hover:bg-lime-400 text-black rounded w-1/3 cursor-pointer' type="submit" value="Sign up" />
            {message ? <div className='p-4 rounded mt-4 bg-lime-green/15'>
                <p className='text-xl text-lime-green'>{ message } <Link href="../signin" className='pb-1 border-b-4 border-lime-green hover:border-lime-400 hover:text-lime-400    '>Sign in</Link></p>
            </div> : null}
        </form>
    )
}