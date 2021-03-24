import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from './projects/projects.service';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './admin/admin.service';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    MenuComponent,
    EmptyPageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    	{ path: 'about', component: AboutComponent},
      { path: 'admin', component: AdminComponent},
    	{ path: 'projects', component: ProjectsComponent },
      { path: 'menu', component: MenuComponent, outlet: 'menuOutlet'}
    ])



  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
