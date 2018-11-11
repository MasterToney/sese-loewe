import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


class Slide {
  imageurl: string;
  title: string;
  text: string;

  constructor(
      imageurl: string,
      title: string,
      text: string
    ) {
      this.imageurl = imageurl;
      this.title = title;
      this.text = text;
    }
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  slides: Slide[] = [];


  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;


   }

  ngOnInit() {
    this.slides.push(
      new Slide(`https://picsum.photos/900/500?random&t=${Math.random()}`, 'First slide', 'blablabla'),
      new Slide(`https://picsum.photos/900/500?random&t=${Math.random()}`, 'Second slide', 'blablabla'),
      new Slide(`https://picsum.photos/900/500?random&t=${Math.random()}`, 'Third slide', 'blablabla'),
      );
  }
}
