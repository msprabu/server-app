import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerInputComponent } from './server-input/server-input.component';
import { ServerDisplayComponent } from './server-display/server-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerInputComponent,
    ServerDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
