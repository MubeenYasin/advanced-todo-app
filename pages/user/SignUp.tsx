import React, { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setData = () => {

    }

    return (
        <div className='text-center flex flex-col gap-10'>
            SignUp

            <input type="email" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Pasword' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button>Sin Up</button>

            <div>
                Sign Up with Google
            </div>

        </div>
    )
}

export default SignUp