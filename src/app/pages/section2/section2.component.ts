import {Component, Input, OnInit} from '@angular/core';
import {mainTextContentModel} from "../../models/main-text-content.model";
import {MainTextContentService} from "../../services/main-text-content.service";

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component implements OnInit{
@Input() section2Text!: mainTextContentModel;

constructor(private mainTextContentService: MainTextContentService) {
}

  ngOnInit(): void {
    this.section2Text = this.mainTextContentService.section2Text;
  }


}
