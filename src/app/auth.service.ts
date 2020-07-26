import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit {
  user;
  
  ngOnInit(){
    
  }
  constructor(private auth: AngularFireAuth, private router: Router ){
    console.log("auth service")
    this.auth.authState.subscribe((result)=>{
      this.user = result;
      console.log("auth service", result);
      
    })
    
  }
  getauthstate(){
    console.log(this.auth.auth.currentUser)
    //return this.user == null ? false : true;
    return this.auth.auth.currentUser == null ? false : true;
  }

}
