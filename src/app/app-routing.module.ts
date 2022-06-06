import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RepeatDisplayComponent } from './repeater/repeat-display/repeat-display.component';
import { SorterDisplayComponent } from './sorter/sorter-display/sorter-display.component';

const routes: Routes = [
  { path: 'sorter', component: SorterDisplayComponent},
  { path: 'repeater', component: RepeatDisplayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
