import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active: boolean = false; // Adicione esta linha para definir a propriedade 'active'

  constructor() { }

  ngOnInit(): void {
    this.scrollToComponent; 
   }

  scrollToComponent(componentId: string): void {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}