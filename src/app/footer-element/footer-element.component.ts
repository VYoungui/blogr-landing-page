import {Component, Input, OnInit} from '@angular/core';
import {FooterElementModel} from "../models/footer-element.model";

@Component({
  selector: 'app-footer-element',
  standalone: true,
  imports: [],
  templateUrl: './footer-element.component.html',
  styleUrl: './footer-element.component.scss'
})
export class FooterElementComponent implements OnInit{
  @Input() footerElement !: FooterElementModel
  ngOnInit(): void {
  }

}
