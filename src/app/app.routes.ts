import { Routes } from '@angular/router';

import { DetailsComponent } from './pages/component/details/details.component';
import { LoginComponent } from './pages/component/login/login.component';
import { AddComponent } from './pages/component/add/add.component';
import { NotfoundComponent } from './pages/component/notfound/notfound.component';
import path from 'path';
import { HoomeComponent } from './pages/component/hoome/hoome.component';

export const routes: Routes = [
    {path:'',component:HoomeComponent},
    {path:'home',redirectTo:''},
    {path:'details/:id',component:DetailsComponent},
    {path:'login',component:LoginComponent},
    {path:'add',component:AddComponent},
    {path:'**',component:NotfoundComponent}
];
