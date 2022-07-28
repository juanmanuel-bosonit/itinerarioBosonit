import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Módulos propios.
import { SharedModule } from './shared/shared.module';
import { TareasModule } from './tareas/tareas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    TareasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
