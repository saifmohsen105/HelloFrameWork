import { ProtflioComponent } from './protflio/protflio.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Add this line to redirect root path
  { path: 'home', component: HomePageComponent, title:"home" },
  {path:"about",component:AboutComponent, title : "about"},
  {path:"protfolio",component: ProtflioComponent, title : "protfolio"},
  {path:"contact",component:ContactUsComponent , title : "contact us"},
  {path:"**",component : NotFoundComponent}
];
