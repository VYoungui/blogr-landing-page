import {Injectable} from "@angular/core";
import {mainTextContentModel} from "../models/main-text-content.model";

@Injectable({
  providedIn: 'root'
})

export class MainTextContentService {

  designedFutureText: mainTextContentModel[] = [
    { title : "Introducing an extensible editor",
      paragraph : "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. " +
        "The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, " +
        "code, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
    } ,
    { title : "Robust content management",
      paragraph : "Flexible content management enables users to move through posts. Increase the usability of your blog " +
        "by adding customized categories, sections, format, or flow. With this functionality, you're in full control."
    }
  ]


}