import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class ContentComponent implements OnInit {
  private inactivityTimeout: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const carrosselPoints = document.querySelectorAll('.carrossel-points label');
      const carrosselSlides = document.querySelector('.carrossel-slides') as HTMLElement;

      carrosselPoints.forEach((point, index) => {
        point.addEventListener('click', () => {
          clearTimeout(this.inactivityTimeout as ReturnType<typeof setTimeout>);
          carrosselSlides.style.animation = 'none';
          carrosselSlides.offsetHeight; // Forçar uma reflow para evitar problemas de animação
          carrosselSlides.style.transform = `translateX(-${index * 25}%)`;
          carrosselSlides.offsetHeight; // Forçar uma reflow para evitar problemas de animação
          carrosselSlides.style.animation = 'carrossel 8s infinite';

          carrosselPoints.forEach((point) => {
            point.classList.remove('active');
          });
          point.classList.add('active');

          this.startInactivityTimeout(carrosselSlides);
        });
      });

      this.startInactivityTimeout(carrosselSlides);
    });
  }

  private startInactivityTimeout(carrosselSlides: HTMLElement) {
    clearTimeout(this.inactivityTimeout as ReturnType<typeof setTimeout>);
    this.inactivityTimeout = setTimeout(() => {
      carrosselSlides.style.animation = 'none';
      carrosselSlides.offsetHeight; // Forçar uma reflow para evitar problemas de animação
      carrosselSlides.style.transform = 'translateX(0)'; // Ajuste para voltar para a primeira imagem
      carrosselSlides.offsetHeight; // Forçar uma reflow para evitar problemas de animação
      carrosselSlides.style.animation = 'carrossel 8s infinite';
    }, 5000); // Defina o tempo de inatividade desejado em milissegundos
  }
}
