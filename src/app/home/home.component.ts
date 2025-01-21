import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userName = '';
  ShowUser() {
    this.userName =
      sessionStorage.getItem('userid') ?? 'Please login first else some issue';
  }
}
