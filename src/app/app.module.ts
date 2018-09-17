import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from 'src/app/ui/notfound/notfound.component';
import { HomeComponent } from 'src/app/ui/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ui/about/about.component';
import { SearchService } from './services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SanitizePipe } from './ui/sanitize.pipe';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: 'About', component: AboutComponent },
  {
    path: '',
    redirectTo: '/About',
    pathMatch: 'full'
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    SanitizePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    JsonpModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
