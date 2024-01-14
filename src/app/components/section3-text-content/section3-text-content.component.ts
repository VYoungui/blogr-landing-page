import {Component, Input} from '@angular/core';
import {mainTextContentModel} from "../../models/main-text-content.model";

@Component({
  selector: 'app-section3-text-content',
  standalone: true,
  imports: [],
  templateUrl: './section3-text-content.component.html',
  styleUrl: './section3-text-content.component.scss'
})
export class Section3TextContentComponent {
  @Input() section3TextContent !: mainTextContentModel;

}
