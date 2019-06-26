import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostComponent } from './post/post.component';
import { PostResolverService } from './post/post-resolver.service';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { LodgingComponent } from './lodging/lodging.component';
import { DonateComponent } from './donate/donate.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SaintsComponent } from './saints/saints.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'news', component: PostsComponent },
  {
    path: 'news/:id', component: PostComponent,
    resolve: {
      post: PostResolverService
    }
  },
  { path: 'auth', component: AuthenticationComponent },
  {path:'', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'register', component: RegisterComponent},
  {path:'lodging', component: LodgingComponent},
  {path: 'donate', component:DonateComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'saints', component: SaintsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {

}