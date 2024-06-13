import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './pages/footer/footer.component';
import { DetailsComponent } from './pages/component/details/details.component';

import { LoginComponent } from './pages/component/login/login.component';
import { AddComponent } from './pages/component/add/add.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,DetailsComponent,LoginComponent,AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GestionDesStock';
}
