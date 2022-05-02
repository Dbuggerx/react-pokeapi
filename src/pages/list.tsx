import { Link } from "react-router-dom";
import PokemonList from "../features/pokemon-page/pokemon-list";
import { path as detailsPath } from "./details";

export default function List() {
  return (
    <>
      <h1>List</h1>
      <Link to={`/${detailsPath}`}>Details</Link>
      <PokemonList />
    </>
  );
}

export const path = "list";
