import { Component, OnInit } from '@angular/core';
import { MockAvenidasService } from '../app/services/mock-avenidas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MockAvenidasService],
})
export class AppComponent implements OnInit {
  constructor(private mockAvenidas: MockAvenidasService) {}
  title = 'avenidas';

  ngOnInit() {
    try {
      this.mockAvenidas.getAvenidas().subscribe(
        (res) => console.log(res),
        (error) => console.log(error)
      );
    } catch (error) {}
  }
}
