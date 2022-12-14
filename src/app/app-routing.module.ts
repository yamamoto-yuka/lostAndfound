import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundInputComponent } from './found-input/found-input.component';
import { HomeComponent } from './home/home.component';
import { LostInputComponent } from './lost-input/lost-input.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"posts", component:PostsComponent},
  {path:"posts/:id", component:PostdetailsComponent},
  {path:"lostInput", component:LostInputComponent},
  {path:"foundInput", component:FoundInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
