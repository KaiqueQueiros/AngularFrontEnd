import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.scss']
})
export class DestaqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  scrollToComponent(destaque: string): void {
    const element = document.getElementById('destaque');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}