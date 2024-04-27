import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"", component:AppComponent},
    {path:"view/:id", component:ViewComponent},
    {path:"add", component:AddComponent},
    {path:"delete/:id", component:DeleteComponent},
    {path:"**", component:PageNotFoundComponent}
];
