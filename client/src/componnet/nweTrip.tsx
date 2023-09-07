const myHeaders = new Headers();
myHeaders.append("authorization", "test-token");
myHeaders.append("Content-Type", "application/json");

import React, { useContext, useState } from "react";
import { UserContext } from "../contex.tsx/DataTrip";
export default function Nwe() {
  const context = useContext(UserContext);
  if (!context) return null;
  const { tripe, setTripe } = context;
  console.log(tripe);
  const [name, setNme] = useState<string>("");
  const [destination, setDes] = useState<string>("");
  const [startDate, setSta] = useState<string>("");
  const [endDate, setEnd] = useState<string>("");
  const [description, setDescrip] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const raw = {
    name: name,
    destination: destination,
    startDate: startDate,
    endDate: endDate,
    description: description,
    price: price,
    image: image,
    activities: ["Activity 1", "Activity 2"],
  };

  return (
    <div>
      <label htmlFor="">name</label>
      <input
        value={name}
        onChange={(e) => {
          setNme(e.target.value);
        }}
        type="text"
      />
      <label htmlFor="">destination</label>
      <input
        value={destination}
        onChange={(e) => {
          setDes(e.target.value);
        }}
        type="text"
      />
      <label htmlFor="">startDate</label>
      <input
        value={startDate}
        onChange={(e) => {
          setSta(e.target.value);
        }}
        type="text"
      />
      <label htmlFor="">endDate</label>
      <input
        value={endDate}
        onChange={(e) => {
          setEnd(e.target.value);
        }}
        type="text"
      />
      <label htmlFor="">description</label>
      <input
        value={description}
        onChange={(e) => {
          setDescrip(e.target.value);
        }}
        type="text"
      />
      <label htmlFor="">price</label>
      <input
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="text"
      />
      <label htmlFor="">image</label>
      <input
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
        }}
        type="text"
      />
      <div>
        <button
          onClick={() => {
            console.log();
            fetch("http://localhost:3000/api/trips", {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify(raw),
              redirect: "follow",
            })
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.log("error", error));
          }}
        >
          klick to create nwe trip
        </button>
      </div>
    </div>
  );
}
