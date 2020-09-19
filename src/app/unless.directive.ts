import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input()  set appUnless(condition: boolean){
    if(!condition){
      this.viewConainerRef.createEmbeddedView(this.templateRef)
    }
    else{
      this.viewConainerRef.clear();
    }
  };

  constructor(private templateRef: TemplateRef<any> , private viewConainerRef: ViewContainerRef) { }

}
