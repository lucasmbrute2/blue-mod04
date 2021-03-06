import React from 'react'
import { Api } from '../../Api/Api'

export default function Create(props) {
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        const name = e.target.name.value
        const lastName = e.target.lastName.value
        const password = e.target.password.value
        const email = e.target.email.value
        const cpf = e.target.cpf.value
        const profileTitle = e.target.profileTitle.value
        const profileImg = e.target.profileImg.value
        
        const payLoad = {
            name,
            lastName,
            password,
            email,
            cpf,
            profile: [
                {
                    title: profileTitle,
                    image: profileImg
                }
            ]
        }
        console.log(payLoad)
        const response = await Api.postUser(payLoad)
        const data = await response.json()
        console.log(data)
        
        if(response.status===201){
            const { id } = data
            props.history.push(`/user/view/${id}`)
            console.log(id)
        }
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
                
                <label htmlFor='profileTitle'>Profile</label>
                <input name='profileTitle' type='text' id='profileTitle'></input>
                
                <label htmlFor='profileImg'></label>
                <input name='profileImg' type='text' id='profileImg'></input>
                <input type='submit' value='add'></input>
            </form>

        </div>
    )
}
