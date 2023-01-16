import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const SubmitData = () => {
        // console.log(email)
        // console.log(password)

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }


    return (
        <div className='text-center flex flex-col gap-10'>
            <span>PLEASE SIGN UP</span>

            <input className='bg-transparent border rounded-xl border-red-300 p-3 '
                type="email" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className='bg-transparent border rounded-xl border-red-300 p-3'
                type="password" placeholder='Pasword' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={SubmitData}>Sin Up</button>

            <button onClick={SubmitData}> Sign Up with Google</button>

            <button onClick={SubmitData}>Sign Up with Facebook</button>

        </div>
    )
}

export default SignUp