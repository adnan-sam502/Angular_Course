import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { HeaderComponent } from './app/header.component'; // Not recommended

bootstrapApplication(AppComponent).catch((err) => console.error(err));
// bootstrapApplication(HeaderComponent); // Not recommended