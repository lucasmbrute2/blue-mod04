import React from 'react'

export default function Create() {
    
    const handleSubmit = (e)=>{
        e.preventDefault()
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