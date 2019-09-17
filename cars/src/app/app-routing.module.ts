import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'vitrine', loadChildren: './categorias/vitrine/vitrine.module#VitrinePageModule' },
  { path: 'economico', loadChildren: './categorias/economico/economico.module#EconomicoPageModule' },
  { path: 'compacto', loadChildren: './categorias/compacto/compacto.module#CompactoPageModule' },
  { path: 'minivan', loadChildren: './categorias/minivan/minivan.module#MinivanPageModule' },
  { path: 'utilitario', loadChildren: './categorias/utilitario/utilitario.module#UtilitarioPageModule' },
  { path: 'premium', loadChildren: './categorias/premium/premium.module#PremiumPageModule' },
  { path: 'luxo', loadChildren: './categorias/luxo/luxo.module#LuxoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
