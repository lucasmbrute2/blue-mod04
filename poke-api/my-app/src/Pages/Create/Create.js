import React from 'react'
import { Api } from '../../Api/Api'

export default function Create() {
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        const name = e.target.name.value
        const lastName = e.target.lastName.value
        const password = e.target.password.value
        const email = e.target.email.value
        const cpf = e.target.cpf.value

        const payLoad = {
            name,
            lastName,
            password,
            email,
            cpf
        }
        console.log(payLoad)
        const response = await Api.postUser(payLoad)
        const data = await response
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name </label>
                
                <input name='name'></input>
                
                <label htmlFor='lastName'>Last name</label> 
                
                <input type='text' name='lastName' id='lastName'></input>
                
                <label htmlFor='password'>Password</label>
                
                <input type='text' name='password' id='password'></input>
                
                <label htmlFor='email'>Email</label>
                
                <input type='text' name='email' id='email'></input>
                
                <label htmlFor="cpf">Cpf</label>
                
                <input type='text' name='cpf' id='cpf'></input>
                
                <input type='submit' value='add'></input>
            </form>

        </div>
    )
}
