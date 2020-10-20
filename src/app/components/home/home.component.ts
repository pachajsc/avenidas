import { Component, OnInit } from '@angular/core';
import { MockAvenidasService } from '../../services/mock-avenidas.service';
import { IAvenidas } from '../../interfaces/avenidas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MockAvenidasService],
})
export class HomeComponent implements OnInit {
  constructor(private mockAvenidas: MockAvenidasService) {}
  item = 'Customer<br> Centricity';
  avenidas: IAvenidas[] = [];
  itemsAvenidas = {
    item1: {},
    item2: {},
    item3: {},
    item4: {},
    item5: {},
    item6: {},
  };

  ngOnInit() {
    try {
      this.mockAvenidas.getAvenidas().subscribe(
        (res) => {
          for (const avenida of res) {
            avenida.src = `assets/image/icono-avenidas-${avenida.id}.png`;
            avenida.class = `circle-icon-${avenida.id}`;
            this.itemsAvenidas[`item${avenida.id}`] = {
              title: avenida.title,
              iniciativas: avenida.iniciativas,
            };
          }
          this.avenidas = res;
          console.log(this.itemsAvenidas);
        },
        (error) => {
          throw error;
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
