import React, { useContext, useEffect, useState } from "react";

type data = {
  id: number;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: ["Surfing", "Snorkeling", "Hiking"];
};
type n = { id: number };
export default function Info(id: n) {
  const [data1, setData] = useState<data | null>(null);
  useEffect(() => {
    const f = async () => {
      console.log("hlhlhlhl");
      console.log(id.id);
      let data1 = await fetch(`http://localhost:3000/api/trips/${id.id}`);
      let jdata = await data1.json();
      setData(jdata);
      console.log(jdata);
    };
    f();
  }, []);
  if (data1) {
    return (
      <div id="infoDiv">
        <img id="imgeInfo" src={data1.image} alt="" />
        <h1>{data1.name}</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h2>{data1.destination}</h2>
          <h3>price:{data1.price}</h3>
          <div>
            <h4>{data1.startDate}</h4>
            <h4 style={{ marginLeft: "20px" }}>{data1.endDate}</h4>
          </div>
        </div>
      </div>
    );
  }
}
