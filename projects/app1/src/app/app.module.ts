import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View11Component } from './view11/view11.component';
import { View12Component } from './view12/view12.component';
import { NavComponent } from './nav/nav.component';

const providers = []

@NgModule({
  declarations: [
    AppComponent,
    View11Component,
    View12Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App1SharedModule{
  
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}


