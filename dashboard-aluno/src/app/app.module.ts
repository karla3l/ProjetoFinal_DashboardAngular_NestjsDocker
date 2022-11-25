
import { AlunosComponent } from './alunos/alunos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'
import {DialogDataExampleComponent, DialogDataExampleDialogComponent} from './dialog/dialog.component';
import { NotaModule } from './nota.module';
//import { NotaModule } from './nota';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent} from "./dashboard/dashboard.component";

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        AlunosComponent,
        DialogDataExampleComponent,
        DialogDataExampleDialogComponent,
DashbordComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatTableModule,
        MatDialogModule,
        NotaModule,
        MatToolbarModule,
        MatButtonModule,
        HttpClientModule,

    ]
})
export class AppModule { }
