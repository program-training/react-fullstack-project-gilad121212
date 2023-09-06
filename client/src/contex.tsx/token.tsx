import React, { createContext, useState ,useEffect } from 'react';
type tripe1 = string

interface UserContextProviderProps {
    children: React.ReactNode;
    }
    interface UserContextType {
        token: tripe1 ;
        settoken: React.Dispatch<React.SetStateAction<(tripe1 )>>;
        }



export const UserContextToken = createContext<UserContextType | null>(null)


export function Token(props:UserContextProviderProps){
    const [token,settoken] = useState<(tripe1)>("")
    return(
        <UserContextToken.Provider value={{token,settoken}} >
            {props.children}
        </UserContextToken.Provider>
    )
}