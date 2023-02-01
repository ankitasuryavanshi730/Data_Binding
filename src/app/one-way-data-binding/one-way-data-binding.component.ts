import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  templateUrl: './one-way-data-binding.component.html',
  styleUrls: ['./one-way-data-binding.component.css']
})
export class OneWayDataBindingComponent {

months = ["jan","Feb","March","April","May","June","July","Aug","Sep","Nov","Dec"]
name="Ankita"

monthchange(event:Event){

  let ctrl =<HTMLSelectElement>(event.target);
  alert("your are selected" + " " + ctrl.value)
}


clickme(){
  alert("Hello" + this.name)
}


textinput(event:Event){

let fun = <HTMLInputElement>(event.target);

this.name = fun.value;
}
}




