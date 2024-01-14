import {Component, Input} from '@angular/core';
import {mainTextContentModel} from "../models/main-text-content.model";


@Component({
  selector: 'app-designed-future-text',
  standalone: true,
  imports: [],
  templateUrl: './designed-future-text.component.html',
  styleUrl: './designed-future-text.component.scss'
})
export class DesignedFutureTextComponent {
  @Input() designedFutureText !: mainTextContentModel;
}
