import {Component, Input} from '@angular/core';
import {NavigationElementComponent} from "../navigation-element/navigation-element.component";
import {NavigationElementListComponent} from "../navigation-element-list/navigation-element-list.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavigationElementComponent,
    NavigationElementListComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {



}
