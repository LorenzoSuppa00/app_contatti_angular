import { RouterModule, Routes } from '@angular/router';
import { ContattoComponent } from './contatto/contatto.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contatto', component: ContattoComponent }
];

