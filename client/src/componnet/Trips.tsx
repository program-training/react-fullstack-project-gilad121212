import React, { useContext } from "react";
import { Token } from "../contex.tsx/token";
import { UserContext } from "../contex.tsx/DataTrip";
import Ditels from "../contex.tsx/disepirdDiv";
import Card from "./card";

export default function Trips() {
  const context = useContext(UserContext);
  if (!context) return null;
  const { tripe, setTripe } = context;
  if (tripe) {
    return (
      <Ditels>
        <div id="mainDiv">
          {tripe.map((tr) => (
            <Card
              key={tr.id}
              endDate={tr.destination}
              name={tr.name}
              id={tr.id}
              image={tr.image}
              destination={tr.destination}
              startDate={tr.startDate}
            ></Card>
          ))}
        </div>
      </Ditels>
    );
  }
}
