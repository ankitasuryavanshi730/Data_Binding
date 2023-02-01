import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  name = "ankita"

  my(){

    alert("hello" + this.name)

}


Quarter =["Quarter-1","Quarter-2","Quarter-3","Quarter-4"];

months = ["Apr" , "May" ,"June"]

SelQur = "Quarter-1"

Selmon = "Apr"


qurchanged(){
  if (this.SelQur == "Quarter-1") {
    this.months = ["Apr","May","June"];
    this.Selmon = "Apr"

  }
  else if(this.SelQur == "Quarter-2"){
    this.months = ["july","Aug","Sep"];
    this.Selmon = "july"
  }
  else if(this.SelQur == "Quarter-3"){
    this.months = ["oct","Nov","Dec"];
    this.Selmon = "oct"
  }
  else if(this.SelQur == "Quarter-4"){
    this.months = ["jan","Feb","Mar"];
    this.Selmon = "jan"
  }
}

name2 = ["ankita" , "Shubhangi" ,"pratiksha","anjali"]

selman = "ankita";

}
