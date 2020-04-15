import { NgModule } from '@angular/core';
import { DirectivesComponent } from './containers/directives.component';
import { BasicsComponent } from './01_basics/basics.component';
import { TextContentDirective } from './01_basics/text-content.directive';
import { ClicksComponent } from './02_clicks/clicks.component';
import { ClicksDirective } from './02_clicks/clicks.directive';
import { CommonModule } from '@angular/common';
import { OnlineComponent } from './03_online/online.component';
import { OnlineDirective } from './03_online/online.directive';

const COMPONENTS = [
  DirectivesComponent,
  BasicsComponent,
  ClicksComponent,
  OnlineComponent
];

const DIRECTIVES = [
  TextContentDirective,
  ClicksDirective,
  OnlineDirective
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule {

}
