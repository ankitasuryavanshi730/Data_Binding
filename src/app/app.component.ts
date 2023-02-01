import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  fullname = "Ankita Chandrakant Suryavanshi";

  num = 0

  enabled:boolean = true

  constructor(){
    setInterval(()=>{
      this.num++;

      this.enabled = !this.enabled
    },1000)
  }


  clickedme(name:string = "Ankita"){
    alert("Hello" + " " + name)
  }



}
