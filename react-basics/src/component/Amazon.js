import React from "react";
import list from "../data";
import "../styles/Amazon.css";
import Card from "./Card";

export default function Amazon(props) {
  return (
    <>
      <section>
        {list.map((item) => (
          <Card props={props} item={item} key={item.id}></Card>
        ))}
      </section>
    </>
  );
}
