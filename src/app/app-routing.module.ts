import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarBoloComponent } from './cadastrar-bolo/cadastrar-bolo.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastrarDoceComponent } from './cadastrar-doce/cadastrar-doce.component';
import { ListarDoceComponent } from './listar-doce/listar-doce.component';
import { ListarBoloComponent } from './listar-bolo/listar-bolo.component';
import { UpdateBoloComponent } from './update-bolo/update-bolo.component';
import { UpdateDoceComponent } from './update-doce/update-doce.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [      
      { path: 'bolos', component: ListarBoloComponent},
      { path: 'doces', component: ListarDoceComponent},   
      { path: 'bolos/update/:id', component: UpdateBoloComponent},  
      { path: 'doces/update/:id', component: UpdateDoceComponent}         
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
