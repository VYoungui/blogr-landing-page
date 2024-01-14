import {Injectable} from "@angular/core";
import {NavigationElementModel} from "../models/navigation-element.model";

@Injectable({
  providedIn: 'root'
})

export class HeaderElementsService {
  NavigationElements: NavigationElementModel[] = [
    { navigationName : "Product" } ,
    { navigationName : "Company" } ,
    { navigationName : "Connect" }
  ];

  NavigationButtons: NavigationElementModel[] = [
    { navigationName : "Login" } ,
    { navigationName : "Sign Up" }
  ];

  HeaderButtons: NavigationElementModel[] = [
    { navigationName : "Started for free" } ,
    { navigationName : "Learn more" }
  ]
}
