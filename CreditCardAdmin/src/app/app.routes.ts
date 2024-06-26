import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    // {
    //     path:"", 
    //     redirectTo: '',
    //     pathMatch:'full'
    // },
    {path:"",component:HeaderComponent},
    {path:"view", component:ViewComponent},
    {path:"add", component:AddComponent},
    {path:"delete", component:DeleteComponent},
    {path:"**", component:PageNotFoundComponent}
];
