"use client";
import React, { useEffect, useState } from "react";

import { CardListProps, Character } from "@/app/interfaces/types";
import { getCharactersApi } from "@/app/services/FetchCharactersService";
import CardItem from "../CardItem/CardItem";
import { CircularProgress } from "@mui/material";
import "./CardList.css";

const CardList: React.FC<CardListProps> = ({ currPage, setTotalPages }) => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchCharacterAPI = async (currPage: number) => {
      const data = await getCharactersApi(currPage);
      const characters = data.results.map((entry: Character) => ({
        id: entry.id,
        name: entry.name,
        image: entry.image,
      }));
      setCharacterList(characters);
      setTotalPages(data.info.pages);
      setIsLoading(false);
    };

    fetchCharacterAPI(currPage);
  }, [currPage]);

  return (
    <div className="card-list">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="card-list-container">
          {characterList.map((character) => (
            <CardItem
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardList;
