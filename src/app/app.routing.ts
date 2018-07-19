import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlexLayoutsComponent } from './components/flex-layouts/flex-layouts.component';
import { SecondCompComponent } from './components/second-comp/second-comp.component';
import { FirstCompComponent } from './components/first-comp/first-comp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { UsersComponent } from './components/users/users.component';
import { FirebaceExComponent } from './components/firebace-ex/firebace-ex.component';

const routes: Routes = [
    {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:FlexLayoutsComponent,
        children:[
            {path:'', redirectTo:'users', pathMatch:'full'},
            {path:'users', component:UsersComponent},
            {path:'profile', component:ProfileComponent},
            
        ]
    },
    {path:'firebase', component:FirebaceExComponent},
    {
        path:'first',
        component:SecondCompComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})

export class AppRouteModule { }
