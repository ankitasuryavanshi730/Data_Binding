import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  friend = "";

  friends:string [] = [];

  clicked(){

    // alert("ankita")

    this.friends.push(this.friend)

    this.friend = ""



  }

  deletef(){
    // alert("a")

    this.friends.splice(this.friend:number)


  }



}
