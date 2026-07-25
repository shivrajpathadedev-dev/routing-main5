import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './component/product-dashboard/product-form/product-form.component';
import { ProductComponent } from './component/product-dashboard/product/product.component';
import { PathNotFoundComponent } from './component/path-not-found/path-not-found.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from './component/user-dashboard/user-details/user-details.component';
import { UserFormComponent } from './component/user-dashboard/user-form/user-form.component';
import { AuthGuard } from './services/auth.guard';
import { userRoleGuard } from './services/userRole.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { AuthComponent } from './component/auth/auth.component';
import { FairsDetailsComponent } from './component/fairs-dashboard/fairs-details/fairs-details.component';
import { FairsDashboardComponent } from './component/fairs-dashboard/fairs-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:AuthComponent
  },
{
  path:'home',
  component:HomeComponent
},
// {
//   path:'',
//   redirectTo:'home',
//   pathMatch:'full'
// },

  {
    path: 'users',
    component: UserDashboardComponent,
    canActivate:[AuthGuard,userRoleGuard],
     data: {
      userRole: ['Admin', 'superAdmin']
    },
    title: 'Users',
    children: [
      {
        path: 'addusers',
        component: UserFormComponent
      },
      {
        path: ':uid',
        component: UserDetailsComponent
      },
      {
        path: ':uid/edit',
        component: UserFormComponent,
    canDeactivate:[CanDeactivateGuard]
      }
    ]
  },
{
  path:'product',
  component:ProductDashboardComponent,
  children: [
    {
      path: 'addproduct',
      component: ProductFormComponent
    },
    {
      path: ':pid',
      component: ProductComponent
    },
    {
      path: ':pid/edit',
      component: ProductFormComponent,
      canDeactivate:[CanDeactivateGuard]
    },
  ]
},
  {
    path: 'fairs',
    component: FairsDashboardComponent,
    canActivate:[AuthGuard,userRoleGuard],
     data: {
      userRole: ['superAdmin']
    },
    title: "Fairs",
    children: [
      {
        path: ':id',
        component: FairsDetailsComponent
      }
    ]
  },
  {
    path: 'path-not-found',
    component: PathNotFoundComponent,
    data: {
      msg: `page not found using static data !!!`
    }
  },
  {
    path: '**',
    redirectTo: 'path-not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
