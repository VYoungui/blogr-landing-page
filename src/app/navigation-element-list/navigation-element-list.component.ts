import {Component, OnInit} from '@angular/core';
import {NavigationElementModel} from "../models/navigation-element.model";
import {NavigationElementComponent} from "../navigation-element/navigation-element.component";
import {NgForOf} from "@angular/common";
import {NavigationButtonComponent} from "../navigation-button/navigation-button.component";
import {HeaderElementsService} from "../services/header-elements.service";

@Component({
  selector: 'app-navigation-element-list',
  standalone: true,
  imports: [
    NavigationElementComponent,
    NgForOf,
    NavigationButtonComponent
  ],
  templateUrl: './navigation-element-list.component.html',
  styleUrl: './navigation-element-list.component.scss'
})
export class NavigationElementListComponent implements OnInit{
  NavigationElements !: NavigationElementModel[];
  NavigationButtons !: NavigationElementModel[];

  constructor(private headerElementsService: HeaderElementsService) { }

  ngOnInit(): void {
    this.NavigationElements = this.headerElementsService.NavigationElements;
    this.NavigationButtons = this.headerElementsService.NavigationButtons;

  }


}
