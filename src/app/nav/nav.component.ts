import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title:String
  constructor() { 
    this.title = "Jhuan Pressleys Resume";
  
  }
  
  ngOnInit() {
  }

}
