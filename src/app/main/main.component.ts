import { Component } from '@angular/core';
import {DesignedFutureComponent} from "../designed-future/designed-future.component";
import {Section2Component} from "../section2/section2.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    DesignedFutureComponent,
    Section2Component
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
