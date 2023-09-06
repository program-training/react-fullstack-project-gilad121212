const myHeaders = new Headers();
myHeaders.append("authorization", "test-token");
myHeaders.append("Content-Type", "application/json");

import React, { createContext, useState ,useEffect } from 'react';
export default function NweUser(){
    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
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
        <button onClick={()=>{
            fetch("http://localhost:3000/api/auth/register", {method: 'POST',headers: myHeaders,body: JSON.stringify(raw),redirect: 'follow' })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }}>click me to create nwe user</button>
        </div>
      </div>
    )
}







