import {Component, OnInit} from '@angular/core';
import {FooterElementModel} from "../models/footer-element.model";
import {FooterElementService} from "../services/footer-element.service";
import {FooterElementComponent} from "../footer-element/footer-element.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FooterElementComponent,
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  footerElements !: FooterElementModel[];


  constructor(private footerElementService : FooterElementService) {
  }

  ngOnInit(): void {
    this.footerElements = [
      this.footerElementService.ProductElements,
      this.footerElementService.CompanyElements,
      this.footerElementService.ConnectElements
    ];


  }

}
