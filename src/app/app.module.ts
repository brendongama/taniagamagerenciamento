import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarBoloComponent } from './cadastrar-bolo/cadastrar-bolo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { CadastrarDoceComponent } from './cadastrar-doce/cadastrar-doce.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ListarDoceComponent } from './listar-doce/listar-doce.component';
import { ListarBoloComponent } from './listar-bolo/listar-bolo.component';
import { UpdateBoloComponent } from './update-bolo/update-bolo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDoceComponent } from './update-doce/update-doce.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarBoloComponent,
    HomeComponent,
    CadastrarDoceComponent,
    ListarDoceComponent,
    ListarBoloComponent,
    UpdateBoloComponent,
    UpdateDoceComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
