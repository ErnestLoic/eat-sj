import { Component, OnInit } from '@angular/core';
import { PlatsDetailsService } from 'src/app/services/plats-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:PlatsDetailsService) { }
  platData: any;
  ngOnInit(): void {
    this.platData = this.service.plats;
  }

}
