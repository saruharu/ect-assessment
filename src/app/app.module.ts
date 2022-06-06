import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SorterPipe } from './sorter/sorter-pipe/sorter.pipe';
import { RepeaterComponent } from './repeater/repeater/repeater.component';
import { RepeatDisplayComponent } from './repeater/repeat-display/repeat-display.component';
import { SorterDisplayComponent } from './sorter/sorter-display/sorter-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SorterPipe,
    RepeaterComponent,
    RepeatDisplayComponent,
    SorterDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
