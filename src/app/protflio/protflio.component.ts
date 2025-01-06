import { Component } from '@angular/core';

@Component({
  selector: 'app-protflio',
  templateUrl: './protflio.component.html',
  styleUrls: ['./protflio.component.css'],
})
export class ProtflioComponent {
  img: string = '';
  findImg(img: string): void {
    this.img = img;
  }

  clearImg(): void {
    this.img = '';
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
