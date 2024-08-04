import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';


export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    //{
        // path:'dashboard',
        // loadChildren:()=>{
        //    return loadRemoteModule({
        //     type:"module",
        //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
        //      exposedModule: './Routes'
        //    }).then(m=>m.routes)
        // }
    //},
    // {
    //     path:'login',
    //     loadComponent:()=>{
    //        return loadRemoteModule({
    //         type:"module",
    //         remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //          exposedModule: './Login'
    //        }).then(m=>m.LoginComponent)
    //     }
    // },
    {
        path:'login',
        loadComponent: () => 
            import('remote/Login').then(m => m.LoginComponent)
    },
    {
        path:'cart',
        loadComponent: () => 
            import('remote/Cart').then(m => m.CartComponent)
    }
];
