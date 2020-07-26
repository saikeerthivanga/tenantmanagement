import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private ds: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  login(Form: NgForm) {
    if (Form.valid) {
      this.ds.auth
        .signInWithEmailAndPassword(Form.value.email, Form.value.password)
        .then((result) => {
          if (result["emailVerified"] == false) {
            alert("Please verify email before login");
          } else {
            this.router.navigate(["/admin/"]);
            alert("login success");
            Form.resetForm();
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    }
  }
}
