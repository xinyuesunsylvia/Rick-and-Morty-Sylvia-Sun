"use client";

import { Character } from "@/app/interfaces/types";
import React from "react";
import Image from "next/image";
import "./CardItem.css";

const CardItem: React.FC<Character> = ({ id, name, image }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img className="img" src={image} alt=""></img>
      </div>

      <div className="card-name">{name}</div>
    </div>
  );
};

export default CardItem;
