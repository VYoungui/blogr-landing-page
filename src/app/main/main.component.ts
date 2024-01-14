import { Component } from '@angular/core';
import {DesignedFutureComponent} from "../designed-future/designed-future.component";
import {Section2Component} from "../section2/section2.component";
import {Section3Component} from "../section3/section3.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    DesignedFutureComponent,
    Section2Component,
    Section3Component
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
