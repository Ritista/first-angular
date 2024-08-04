import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { AppLayout } from './pages/admin/layout/layout.component';
import { AboutComponent } from './pages/admin/about/about.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/admin/register/register.component';


export const routes: Routes = [
  { path: 'contact', component: ContactComponent },


  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: AppLayout,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
