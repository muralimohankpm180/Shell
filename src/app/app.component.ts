import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Shell';
  cart:any
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    fromEvent<CustomEvent>(window,'cartEvent').subscribe((customEvent)=>{
      // this.cart=customEvent.detail
      console.log(customEvent.detail.cart);
      this.cart=customEvent.detail.cart
    })
  }
}
