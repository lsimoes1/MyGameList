import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JogosComponent } from './jogos/jogos.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { RecomendacoesComponent } from './recomendacoes/recomendacoes.component';
import { AboutComponent } from './about/about.component';
import { PageerrorComponent } from './pageerror/pageerror.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HomeComponent,
    LoginComponent,
    JogosComponent,
    WishlistComponent,
    FavoritosComponent,
    ContatosComponent,
    RecomendacoesComponent,
    AboutComponent,
    PageerrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
