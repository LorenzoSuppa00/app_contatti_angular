import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatto',
  imports: [],
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']); // Naviga alla homepage
  }
  
}
