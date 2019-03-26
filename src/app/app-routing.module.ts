import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JogosComponent } from './jogos/jogos.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { RecomendacoesComponent } from './recomendacoes/recomendacoes.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "home", component: HomeComponent },
  { path: "jogos", component: JogosComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "favoritos", component: FavoritosComponent },
  { path: "contatos", component: ContatosComponent },
  { path: "recomendacoes", component: RecomendacoesComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
