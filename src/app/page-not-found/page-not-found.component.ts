import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-page-not-found",
    template: `
    <div class="center">
      <img
        src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
      />
      <h1>Hey, cette page n'existe pas</h1>
      <a routerLink="/pokemons" class="waves-effect wave-teal btn-flat">
        Retourner a l'acceuil
      </a>
    </div>
  `,
    styles: ``,
    standalone: true,
    imports: [RouterLink],
})
export class PageNotFoundComponent {}
