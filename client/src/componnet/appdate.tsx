import React, { useContext, useState } from "react";
import { UserContext } from "../contex.tsx/tripes";

type data = {
  id: number;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
};

export default function Appdete(data: data) {
  const context = useContext(UserContext);
  if (!context) return null;
  const { tripe, rendor, setRendor } = context;
  const [id, setId] = useState<number | string>(data.id);
  const [a, a6] = useState<string>(data.name);
  const [destination, a7] = useState<string>(data.destination);
  const [startDate, a8] = useState<string>(data.startDate);
  const [endDate, a9] = useState<string>(data.endDate);
  const [image, a11] = useState<string>(data.image);

  return (
    <div id="appDiv">
      <div>
        <label htmlFor="">
          <input
            value={data.id}
            onChange={(event) => {
              setId(event.target.value);
              console.log(event.target.value);
            }}
            type="text"
          />
          id{" "}
        </label>
      </div>

      <div>
        <label htmlFor="">
          <input
            value={a}
            onChange={(event) => {
              a6(event.target.value);
              //console.log(event.target.value)
            }}
            type="text"
          />
        </label>
        name
      </div>

      <div>
        <label htmlFor="">
          <input
            value={destination}
            onChange={(event) => {
              a7(event.target.value);
              console.log(event.target.value);
            }}
            type="text"
          />
          destination
        </label>
      </div>

      <div>
        <label htmlFor="">
          <input
            value={startDate}
            onChange={(event) => {
              a8(event.target.value);
              console.log(event.target.value);
            }}
            type="text"
          />
          startDate
        </label>
      </div>

      <div>
        <label htmlFor="">
          <input
            value={endDate}
            onChange={(event) => {
              a9(event.target.value);
              console.log(event.target.value);
            }}
            type="text"
          />
          endDate
        </label>
      </div>

      <div>
        <label htmlFor="">
          <input
            value={image}
            onChange={(event) => {
              a11(event.target.value);
              console.log(event.target.value);
            }}
            type="text"
          />
          image
        </label>
      </div>

      <div>
        <button
          onClick={() => {
            const raw = {
              name: a,
              destination: destination,
              startDate: startDate,
              endDate: endDate,
              description: "Description of the new trip",
              price: 1500,
              image: image,
              activities: ["Activity 1", "Activity 2"],
            };
            console.log(raw);

            const myHeaders = new Headers();
            myHeaders.append("authorization", "test-token");
            myHeaders.append("Content-Type", "application/json");

            fetch(`http://localhost:3000/api/trips/${data.id}`, {
              headers: myHeaders,
              method: "PUT",
              body: JSON.stringify(raw),
              redirect: "follow",
            })
              .then((response) => response.json())
              .then((result) => console.log(result))
              .catch((error) => console.log("error", error));

            setRendor((rendor) => rendor + 1);
          }}
        >
          click me to app date
        </button>
      </div>
    </div>
  );
}
