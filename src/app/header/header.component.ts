import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true, // there are also module based component which were earlier mostly used in Angular we can achive this by doing 'false'
//   template: '<h1>Hello World</h1>', // Not Recommended
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
//   styleUrls: ['./header.component.css'],
//   styles: ['h1 { color: red }']
})
export class HeaderComponent {}