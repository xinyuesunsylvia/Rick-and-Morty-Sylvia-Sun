"use client";
import { HeaderProps } from "@/app/interfaces/types";
import React from "react";
import "./Header.css";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <div className="title">{title}</div>
    </header>
  );
};

export default Header;
