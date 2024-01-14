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
  ];

  section2Text: mainTextContentModel = {
    title : "State of the Art Infrastructure",
    paragraph: "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. " +
      "This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
  };

  section3TextContent: mainTextContentModel[] = [
    {
      title : "Free, open, simple",
      paragraph: "Blogr is a free and open source application backed by a large community of helpful developers. " +
        "It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party " +
        "commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively " +
        "easy to learn."
    },
    {
      title: "Powerful tooling",
      paragraph: "Batteries is included. We built a simple and straightforward CLI tool that makes customization and" +
        "deployment a breeze, but capable of producing even the most complicated sites"
    }
  ]


}
