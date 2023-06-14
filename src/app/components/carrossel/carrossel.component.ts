import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('carrosselPoints') carrosselPointsRef!: ElementRef;
  @ViewChild('carrosselSlides') carrosselSlidesRef!: ElementRef;
  private inactivityTimeout: any;

  ngOnInit() {
    const carrosselPoints = this.carrosselPointsRef.nativeElement.querySelectorAll('label');
    const carrosselSlides = this.carrosselSlidesRef.nativeElement;

    carrosselPoints.forEach((point: { addEventListener: (arg0: string, arg1: () => void) => void; classList: { add: (arg0: string) => void; }; }, index: number) => {
      point.addEventListener('click', () => {
        clearTimeout(this.inactivityTimeout);
        this.animateSlides(index * -25);
        point.classList.add('active');
        this.startInactivityTimeout();
      });
    });

    this.startInactivityTimeout();
  }

  private startInactivityTimeout() {
    clearTimeout(this.inactivityTimeout);
    this.inactivityTimeout = setTimeout(() => {
      this.animateSlides(-25);
    }, 4000);
  }

  private animateSlides(translateX: number) {
    const carrosselSlides = this.carrosselSlidesRef.nativeElement;
    carrosselSlides.style.transition = 'transform 0.5s';
    carrosselSlides.style.transform = `translateX(${translateX}%)`;
    
    setTimeout(() => {
      carrosselSlides.style.transition = 'none';
      carrosselSlides.style.transform = `translateX(${translateX}%)`;
    }, 500);
  }
}
