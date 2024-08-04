import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { AppLayout} from '../layout/layout.component';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule, NgFor } from '@angular/common';
import { data } from '../assets/data';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, AppLayout, LoginComponent, ContactComponent, AboutComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data= data
}

