import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PaisModule } from "./pais/pais.module";
import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        PaisModule,
        SharedModule
    ]
})
export class AppModule { }
