import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  data: any = {
    'mylist': [
      {
        'title': 'Futurama',
        'id': 1,
        'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
      },
      {
        'title': 'The Interview',
        'id': 2,
        'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
      },
      {
        'title': 'Gilmore Girls',
        'id': 3,
        'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
      }
    ],
    'recommendations': [
      {
        'title': 'Family Guy',
        'id': 4,
        'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
      },
      {
        'title': 'The Croods',
        'id': 5,
        'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
      },
      {
        'title': 'Friends',
        'id': 6,
        'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
      }
    ]
  }

  mylist: any[] = this.data.mylist;
  recommendations: any[] = this.data.recommendations;
  btnFlag : boolean[] = [];

  constructor() {
    for(let i = 0; i < 6; i++) {
      this.btnFlag.push(false);
    }
   }

  

  removeTitle(id:number) {
    let index = this.mylist.findIndex(obj=>obj.id === id);
    let title = this.mylist.splice(index, 1)[0];
    this.recommendations.push(title);
  }
  addTitle(id:number) {
    let index = this.recommendations.findIndex(obj=>obj.id === id);
    let title = this.recommendations.splice(index, 1)[0];
    this.mylist.push(title);
  }
  ngOnInit() {
  }
}
