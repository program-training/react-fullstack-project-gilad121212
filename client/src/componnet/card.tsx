import React, { useContext, createContext, useState, useEffect } from "react";
import { UserContextToken } from "../contex.tsx/token";
import { UserContext } from "../contex.tsx/DataTrip";
import { UserContext1 } from "../contex.tsx/disepirdDiv";
import Appdete from "./UpdateTripForm";
import Info from "./TripDetail";
type tripe1 = {
  id: number;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
};

export default function Card(data: tripe1) {
  const contextToken = useContext(UserContextToken);
  if (!contextToken) return null;
  const token = contextToken.token;
  const [flag2, setFlag3] = useState<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);
  const context = useContext(UserContext);
  if (!context) return null;
  const { tripe, rendor, setRendor } = context;
  const { setTripe } = context;
  const context1 = useContext(UserContext1);
  if (!context1) return null;
  const { f, setF } = context1;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({});

  myHeaders.append("authorization", token);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  } as RequestInit;

  return (
    <div>
      {f && (
        <div id="cardDiv">
          <img
            onClick={() => {
              setFlag(true), setF(false);
            }}
            src={data.image}
            alt=""
          />
          <h3>{data.name}</h3>
          <p>{data.destination}</p>
          <p>{data.id}</p> <p>{data.startDate}</p>
          <div>
            <button
              onClick={async (event) => {
                const delet = await fetch(
                  `http://localhost:3000/api/trips/${data.id}`,
                  requestOptions
                )
                  .then((response) => response.text())
                  .then((result) => console.log(result))
                  .catch((error) => console.log("error", error));
                setTripe(tripe);
                console.log({ token });
                setRendor((rendor) => rendor + 1);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                setFlag3(true), setF(false);
              }}
            >
              update
            </button>
          </div>
        </div>
      )}
      {flag2 && (
        <div>
          <Appdete
            key={data.id}
            image={data.image}
            name={data.name}
            id={data.id}
            endDate={data.endDate}
            startDate={data.startDate}
            destination={data.destination}
          ></Appdete>
        </div>
      )}
      {flag && (
        <div>
          {" "}
          <Info id={data.id}></Info>{" "}
          <button
            onClick={() => {
              setFlag(false), setF(true);
            }}
          >
            trips
          </button>{" "}
        </div>
      )}
    </div>
  );
}
