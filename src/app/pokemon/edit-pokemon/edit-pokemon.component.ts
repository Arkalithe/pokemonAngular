import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-pokemon",
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    @if (pokemon) {
      <p class="center">
        <img [src]="pokemon.picture" />
      </p>
    }
    @if (pokemon) {
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    }
  `,
  styles: ``,
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {}
  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}
