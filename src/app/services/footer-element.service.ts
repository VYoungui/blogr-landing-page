import {Injectable} from "@angular/core";
import {FooterElementModel} from "../models/footer-element.model";

@Injectable({
  providedIn: 'root'
})

export class FooterElementService{
  ProductElements : FooterElementModel = {
    title : "Product",
    content1: "Overview",
    content2: "Pricing",
    content3: "Marketplace",
    content4: "Features",
    content5: "Integrations",
  };

  CompanyElements : FooterElementModel = {
    title : "Company",
    content1: "About",
    content2: "Team",
    content3: "Blog",
    content4: "Careers",
  }

  ConnectElements : FooterElementModel = {
    title : "Connect",
    content1: "Contact",
    content2: "Newsletter",
    content3: "LinkedIn",
  }
}
