import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { DetailsPostComponent } from './components/details-post/details-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddPostComponent,
    HomeComponent,
    HeaderComponent,
    EditPostComponent,
    DetailsPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
