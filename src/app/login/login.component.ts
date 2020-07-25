import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private ds: AuthService, private router: Router) {}

  ngOnInit() {}

  login(Form: NgForm) {
    if (Form.valid) {
      this.ds.auth.auth
        .signInWithEmailAndPassword(Form.value.email, Form.value.password)
        .then((result) => {
          if (result["emailVerified"] == false) {
            alert("Please verify email before login");
          } else {
            this.router.navigate(["/user/profile/" + Form.value.email]);
            Form.resetForm();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
