import { Component } from '@angular/core';
import {DesignedFutureComponent} from "../designed-future/designed-future.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    DesignedFutureComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
