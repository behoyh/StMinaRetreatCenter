import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { LodgingComponent } from './lodging/lodging.component';
import { DonateComponent } from './donate/donate.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SaintsComponent } from './saints/saints.component';
import { NewsComponent } from './news/news.component';
import { CollageComponent } from './collage/collage.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'collage', component: CollageComponent },
  {path:'', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'register', component: RegisterComponent},
  {path:'lodging', component: LodgingComponent},
  {path: 'donate', component:DonateComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'saints', component: SaintsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRouterModule {

}