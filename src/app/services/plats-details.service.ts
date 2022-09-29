import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatsDetailsService {

  constructor() { }

   plats=[
     {
       id:2,
       nom:"Eru",
       vendeur:"Aicha",
       standard:"500",
       petiteFaim:"1000",
       grandeFaim:"1500",
       img:"../../../assets/banner2.PNG"
     },
     {
      id:3,
      nom:"Poulet DG",
      vendeur:"Anti",
      standard:"500",
      petiteFaim:"1000",
      grandeFaim:"1500",
      img:"../../../assets/banner.jpg"
    },
    {
      id:4,
      nom:"BHB",
      vendeur:"Ma'a Gertrude",
      standard:"500",
      petiteFaim:"1000",
      grandeFaim:"1500",
      img:"../../../assets/banner5.JPG"
    },
    {
      id:5,
      nom:"Okok",
      vendeur:"Ma'a Gertrude",
      standard:"500",
      petiteFaim:"1000",
      grandeFaim:"1500",
      img:"../../../assets/banner3.PNG"
    },
    {
      id:6,
      nom:"Poulet DG",
      vendeur:"Anti",
      standard:"500",
      petiteFaim:"1000",
      grandeFaim:"1500",
      img:"../../../assets/banner.jpg"
    },
    {
      id:7,
      nom:"Eru",
      vendeur:"Aicha",
      standard:"500",
      petiteFaim:"1000",
      grandeFaim:"1500",
      img:"../../../assets/banner4.JPG"
    },
    {
      id:7,
      nom:"Okok",
      vendeur:"Jean",
      standard:"500",
      petiteFaim:"1000",
      grandeFaim:"1500",
      img:"../../../assets/banner3.PNG"
    },

   ]
}
