import React, { createContext, useState, useEffect } from "react";
import Card from "../componnet/card";
type tripe1 = {
  id: number;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
};
interface UserContextProviderProps {
  children: React.ReactNode;
}
interface UserContextType {
  tripe: tripe1[] | null;
  setTripe: React.Dispatch<React.SetStateAction<tripe1[] | null>>;
  rendor: number;
  setRendor: React.Dispatch<React.SetStateAction<number>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export function DataTrip(props: UserContextProviderProps) {
  const [tripe, setTripe] = useState<tripe1[] | null>(null);
  const [rendor, setRendor] = useState<number>(0);
  useEffect(() => {
    const data = async () => {
      console.log("gilad sinai");
      let data = await fetch("http://localhost:3000/api/trips");
      console.log("gilad sinai");
      let jdata = await data.json();
      console.log(jdata);
      setTripe(jdata);
    };
    data();
  }, [rendor]);
  return (
    <UserContext.Provider value={{ tripe, setTripe, setRendor, rendor }}>
      {props.children}
    </UserContext.Provider>
  );
}
