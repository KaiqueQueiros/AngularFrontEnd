import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('carrosselPoints') carrosselPointsRef!: ElementRef;
  @ViewChild('carrosselSlides') carrosselSlidesRef!: ElementRef;
  private inactivityTimeout: any;
  activeIndex: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const carrosselPoints = Array.from(this.carrosselPointsRef.nativeElement.querySelectorAll('label'));

    carrosselPoints.forEach((point: any, index: number) => {
      this.renderer.listen(point, 'click', () => {
        clearTimeout(this.inactivityTimeout);
        this.animateSlides(index * -25);
        this.setActivePoint(index);
        this.inactivityTimeout = setTimeout(() => {
          this.handleInactivity();
        }, 5000);
      });
    });

    this.setActivePoint(0);
    this.inactivityTimeout = window.setTimeout(() => {
      this.handleInactivity();
    }, 5000);
  }

  animateSlides(index: number): void {
    const carrosselSlides = this.carrosselSlidesRef.nativeElement;
    const slideWidth = 25;

    carrosselSlides.style.transform = `translateX(${index * -slideWidth}%)`;
  }

  private handleInactivity(): void {
    this.animateSlides(0);
  }

  private setActivePoint(index: number): void {
    const carrosselPoints = Array.from(this.carrosselPointsRef.nativeElement.querySelectorAll('label'));

    carrosselPoints.forEach((point: any, pointIndex: number) => {
      if (pointIndex === index) {
        point.classList.add('active');
      } else {
        point.classList.remove('active');
      }
    });

    this.activeIndex = index;
  }
}
