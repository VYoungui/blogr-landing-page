import {Component, Input, OnInit} from '@angular/core';
import {NavigationElementModel} from "../models/navigation-element.model";

@Component({
  selector: 'app-navigation-element',
  standalone: true,
  imports: [],
  templateUrl: './navigation-element.component.html',
  styleUrl: './navigation-element.component.scss'
})
export class NavigationElementComponent implements OnInit{

  @Input() navigationElement !: NavigationElementModel;
  state !: boolean;

  ngOnInit(): void {
    this.state = false;
  }

  changeImageUrl(){
    if(!this.state){
      this.navigationElement.imageUrl = "assets/icon-arrow-dark.svg";
    }else {
      this.navigationElement.imageUrl = "assets/icon-arrow-light.svg";
    }
    this.state = !this.state

  }

}
