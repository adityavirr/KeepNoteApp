import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';


export const routes: Routes = [
  { path: "notes", component: NoteViewComponent, canActivate: [AuthGuard] },
  { path: "notes/:id", component: NoteEditComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] },
  { path: "register-user", component: RegisterFormComponent},
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
