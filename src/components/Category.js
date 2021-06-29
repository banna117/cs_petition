import React from "react";
import "./Category.scss";

export default function Category({ name }) {
  return <p className="category">{name}</p>;
}