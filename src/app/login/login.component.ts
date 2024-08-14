import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon/pokemon.service";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styles: ``,
    standalone: true,
    imports: [FormsModule],
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes deconnecté. (pikachu/pikachu";
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = "Vous êtes connecter.";
    } else {
      this.message = "Identifiant ou mot de passe incorrecte.";
    }
  }

  login() {
    this.message = "Tentative de connexion en cour";
    this.auth
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(["/pokemons"]);
        } else {
          this.password = "";
          this.router.navigate(["/login"]);
        }
      });
  }

  logout() {
    this.auth.logout();
    this.message = "Vous êtes deconnecté.";
  }
}
