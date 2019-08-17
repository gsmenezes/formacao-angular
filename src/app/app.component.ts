import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://br.seaicons.com/wp-content/uploads/2017/03/blue-heart-icon.png',
      description: 'Coração azul',
    },
    {
      url: 'https://i2.wp.com/multarte.com.br/wp-content/uploads/2018/10/coracao-png.png?fit=2400%2C1706&ssl=1',
      description: 'Coração',
    }
  ];

}