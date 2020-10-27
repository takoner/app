import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View21Component } from './view21/view21.component';
import { View22Component } from './view22/view22.component';
import { NavComponent } from './nav/nav.component';

const providers = []

@NgModule({
  declarations: [
    AppComponent,
    View21Component,
    View22Component,
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
export class App2SharedModule{
  
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}

