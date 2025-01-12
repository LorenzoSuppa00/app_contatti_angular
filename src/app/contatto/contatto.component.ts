import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contatto',
  imports: [RouterLink],
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent {

  //? Metodo alternativo a routerLink
  // constructor(private router: Router) {}

  // goBack(): void {
  //   this.router.navigate(['/']); // Naviga alla homepage
  // }
  
}
