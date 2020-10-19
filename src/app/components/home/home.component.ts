import { Component, OnInit, HostListener, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
    
  }

  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    alert('test')
     if (window.pageYOffset > 550) {
       
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }
  
}
