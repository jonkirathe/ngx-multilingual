import { NgModule } from '@angular/core';
import { NgxMultilingualComponent } from './ngx-multilingual.component';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";



@NgModule({
  declarations: [
    NgxMultilingualComponent
  ],
  imports: [
    FormsModule,
    NgForOf
  ],
  exports: [
    NgxMultilingualComponent
  ]
})
export class NgxMultilingualModule { }
