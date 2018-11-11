import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './public/rooms/rooms.component';
import { LoginComponent } from './private/login/login.component';
import { ManageRoomsComponent } from './private/manage-rooms/manage-rooms.component';
import { ManageRoomCategoriesComponent } from './private/manage-room-categories/manage-room-categories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent},
  { path: 'private/login', component: LoginComponent},
  { path: 'private/manage-room-categories', component: ManageRoomCategoriesComponent },
  { path: 'private/manage-rooms', component: ManageRoomsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
