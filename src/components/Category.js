import React from "react";
import "./Category.scss";

export default function Category({ name, filter }) {
  return <p className={"category "+ (filter === -1 ? "" : "selected")}>{name}</p>;
}