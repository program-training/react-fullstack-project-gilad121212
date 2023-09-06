import React, { createContext, useState, useEffect } from "react";
import { Token } from "../contex.tsx/token";
import Login from "../contex.tsx/login";
import NweUser from "./newUser";
import Nwe from "./nweTrip";
import Trips from "../contex.tsx/Trips";
import { DataTrip } from "../contex.tsx/tripes";
export default function Home() {
  const [flag, setFlag] = useState<boolean>(true);
  const [flagLogin, setFlagLogin] = useState<boolean>(false);
  const [flagUser, setFlagUser] = useState<boolean>(false);
  const [flagNwe, setFlagNwe] = useState<boolean>(false);
  const [flag1, setFlag2] = useState<boolean>(false);
  return (
    <div>
     
        {flag && (
          <div>
            <h1>home page trip trip</h1>
            <button
              onClick={() => {
                setFlag(false), setFlag2(true);
              }}
            >
              tripse
            </button>
            <button
              onClick={() => {
                setFlag(false), setFlagUser(true);
              }}
            >
              rishom
            </button>
            <button
              onClick={() => {
                setFlag(false), setFlagLogin(true);
              }}
            >
              hthbrot
            </button>
          </div>
        )}
        <DataTrip>
          <div>
            {flag1 && (
              <div>
                <button
                  onClick={() => {
                    setFlag(true), setFlag2(false);
                  }}
                >
                  home page
                </button>
                <Trips />{" "}
                <button
                  onClick={() => {
                    setFlagNwe(true), setFlag2(false);
                  }}
                >
                  nwe trip
                </button>{" "}
              </div>
            )}
            {flagNwe && (
              <div>
                <button>click me gilad</button>
                <Nwe></Nwe>
              </div>
            )}
            {flagUser && (
              <div>
                <NweUser></NweUser>
                <button
                  onClick={() => {
                    setFlag(true), setFlagUser(false);
                  }}
                >
                  home page
                </button>
              </div>
            )}
            {flagLogin && (
              <div>
                <Login></Login>
                <button
                  onClick={() => {
                    setFlag(true), setFlagLogin(false);
                  }}
                >
                  home page
                </button>
              </div>
            )}
          </div>
        </DataTrip>
    
    </div>
  );
}
