import {Component, ElementRef, ViewChild } from '@angular/core';
//test2
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructuralDirectives-Pro';
  absent: boolean = true; 
  names: string []  = ['ali' , 'mohammad' , 'reza' , 'hossein'];
  @ViewChild ('scoreValu') mytxt: ElementRef;
  score = 0;
  
 

  makeDispaear(){
  this.absent = !this.absent
  this.score = this.mytxt.nativeElement.value;
  }
}
