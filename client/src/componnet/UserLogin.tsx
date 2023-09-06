const myHeaders = new Headers();
myHeaders.append("authorization", "test-token");
myHeaders.append("Content-Type", "application/json");

import React, { useContext, createContext, useState ,useEffect } from 'react';
import { UserContextToken } from '../contex.tsx/token';
export default function Login(){
    const context = useContext(UserContextToken);
    if (!context) return null;
    const{token,settoken} = context
   
    const [name,setName] = useState<string>("")
    const [data1,setdata] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [flag,setflag] = useState<Boolean>(false)

    const raw = {
        email: email,
        password: name
      };
    return(
      <div>
        <label htmlFor="">password</label>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" />
        <label htmlFor="">email</label>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" />
        <div>
        <button onClick={async()=>{
            const data = await fetch("http://localhost:3000/api/auth/login", {method: 'POST',headers: myHeaders,body: JSON.stringify(raw),redirect: 'follow' })
            const jdata = await data.json()
            if(jdata.message === "Login successful"){
                setflag(true)
                setdata(jdata)
               await settoken(jdata.responseObj.token)
              
            }
        }}>click me to login </button>
        </div>
        {flag && <div><h1> log in </h1></div>}
      </div>
    )
  
}