import { Component } from '@angular/core';
import { MovieCarouselComponent } from '../movie-carousel/movie-carousel.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCarouselComponent, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
