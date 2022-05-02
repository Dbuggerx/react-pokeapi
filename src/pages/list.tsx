import React from "react";
import { Link } from "react-router-dom";
import PokemonList from "../features/pokemon-page/pokemon-list";

export default function List() {
  return (
    <>
      <h1>List</h1>
      <Link to="/details">Details</Link>
      <PokemonList />
    </>
  );
}
