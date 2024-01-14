import {Component, Input, OnInit} from '@angular/core';
import {mainTextContentModel} from "../models/main-text-content.model";
import {MainTextContentService} from "../services/main-text-content.service";
import {DesignedFutureTextComponent} from "../designed-future-text/designed-future-text.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-designed-future',
  standalone: true,
  imports: [
    DesignedFutureTextComponent,
    NgForOf
  ],
  templateUrl: './designed-future.component.html',
  styleUrl: './designed-future.component.scss'
})
export class DesignedFutureComponent implements OnInit{
  designedFutureTexts !: mainTextContentModel[];

  constructor(private mainTextContentService: MainTextContentService) {
  }
  ngOnInit(): void {
    this.designedFutureTexts = this.mainTextContentService.designedFutureText;
  }


}
