import { Component, ViewChild, OnInit, Renderer } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit{

  accordionExpanded = false;
 
@ViewChild("cc") cardContent: any;
  
constructor(public renderer: Renderer) {
 
  }


ngOnInit(){
  console.log(this.cardContent.nativeElement);
}

  
  toggleAccordion(){
    if(this.accordionExpanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
  } else {
    this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
  }
this.accordionExpanded = !this.accordionExpanded;
}


}
