import React, { createContext, useState } from 'react';
interface UserContextProviderProps {
    children: React.ReactNode;
    }
    interface UserContextType {
        f: boolean;
        setF: React.Dispatch<React.SetStateAction<boolean>>;
        }
export const UserContext1 = createContext< UserContextType| null>(null);


export default function Ditels(props:UserContextProviderProps){
    const [f,setF] = useState<boolean>(true)
    return(
        <UserContext1.Provider value={{f,setF}}>
            {props.children}
        </UserContext1.Provider>
    )
}