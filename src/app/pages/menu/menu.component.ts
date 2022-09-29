import { Component, OnInit } from '@angular/core';
import {PlatsDetailsService} from 'src/app/services/plats-details.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private service : PlatsDetailsService) { }
  platData: any;
  ngOnInit(): void {
    this.platData = this.service.plats;
  }

}
