import { string } from "prop-types"



let state : Credentials = {
    username :"",
    password : ""
}

interface Credentials {
    username : string;
    password : string;
}

export default function isLoggedIn() {
    if(state.username ==="admin" && state.password==="admin") return true 
    else return false
}

export const login = (username : string  , password : string) => {
    state = {username , password}
    return isLoggedIn()
}