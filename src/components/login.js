import React,{useState} from "react"
import { login } from "../../services/auth"
import { navigate } from "gatsby"
import './login.css'
export default function Login() {

    const [credentials,setCredentials] = useState({
        username:"",
        password:""
    })
    const handleSubmit =e=> {
        e.preventDefault()
        if(login(credentials.username, credentials.password)){
          navigate("/app/profile")
        }else {
          alert('wrong credentials')
        }
        
    }
    const handleChange= e=> {
        setCredentials({...credentials , [e.target.name] : e.target.value})
    }
  return (
    <div className="wrapper">
      
        <form className="login-form" onSubmit={handleSubmit} method="POST">
        <h1 className="title">Login to App</h1>
          <label className="form-group">
            Username 
            <input className="input" type="text" name="username" value={credentials.username} onChange={handleChange}/>
          </label>
          <label className="form-group">
            Password 
            <input  className="input" type="password" name="password"  value={credentials.password} onChange={handleChange}/>
          </label>
          <input className="submit" type="submit" value="LogIn" />
        </form>
      

    </div>
  )
}
