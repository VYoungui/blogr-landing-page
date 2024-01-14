import {Component, OnInit} from '@angular/core';
import {mainTextContentModel} from "../../models/main-text-content.model";
import {MainTextContentService} from "../../services/main-text-content.service";
import {Section3TextContentComponent} from "../../components/section3-text-content/section3-text-content.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [
    Section3TextContentComponent,
    NgForOf
  ],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
})
export class Section3Component implements OnInit{
  section3TextContents !: mainTextContentModel[]
  constructor(private textContent : MainTextContentService ) {
  }
  ngOnInit(): void {
    this.section3TextContents = this.textContent.section3TextContent
  }

}
