import {Component, Input} from '@angular/core';
import {NavigationElementModel} from "../../models/navigation-element.model";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {
  @Input() navigationButton !: NavigationElementModel;

}
