import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrl: "app.component.css",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  constructor() {}

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: String) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      console.log(`Vous avez slelectionner le pokemon : ${pokemon.name}
      Il a a : ${pokemon.hp} points de vie`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demander un pokemon qui n'existe pas `);
      this.pokemonSelected = pokemon;
    }
  }
}
