import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {NavigationElementModel} from "../../models/navigation-element.model";
import {HeaderElementsService} from "../../services/header-elements.service";
import {NavigationButtonComponent} from "../../components/navigation-button/navigation-button.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavbarComponent,
    NavigationButtonComponent,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  HeaderButtons !: NavigationElementModel[];

  constructor(private headerElementsService: HeaderElementsService) {
  }

  ngOnInit(): void {
    this.HeaderButtons = this.headerElementsService.HeaderButtons;
  }



}
