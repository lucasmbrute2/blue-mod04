import React from 'react'

export default function Create() {
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const name = e.target.name.value
        const lastName = e.target.lastName.value
        const password = e.target.password.value
        const text = e.target.email.value
        const email = e.target.cpf.value

        const payLoad = {
            name,
            lastName,
            password,
            text,
            email
        }
        console.log(payLoad)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Title: </label>
                <br/>
                <input type='text' name='name' id = 'name'></input>
                <label htmlFor='lastName'></label> 
                <br/>
                <input type='text' name='lastName' id='lastName'></input>
                <label htmlFor='password'></label>
                <br/>
                <input type='text' name='password' id='password'></input>
                <label htmlFor='email'></label>
                <br/>
                <input type='text' name='email'id='email'></input>
                <label htmlFor="cpf"></label>
                <br/>
                <input type='text' name='cpf' id='cpf'></input>
                
                <input type='submit' value='add'></input>
            </form>

        </div>
    )
}
