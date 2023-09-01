import React from "react";
import list from "../data";
import "../styles/Amazon.css";
import Card from "./Card";

export default function Amazon() {
  console.log(list);
  return (
    <>
      <section>
        {list.map((item) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </section>
    </>
  );
}
