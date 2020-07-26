import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {}

  hidepwd: boolean = true;
  hideconfpwd: boolean = true;
  isLoading: boolean;

  ngOnInit() {
    console.log(this.auth.auth.currentUser);
  }

  signup(Form: NgForm) {
    if (Form.valid) {
      if (Form.value.password == Form.value.confirmpassword) {
        this.isLoading = true;
        this.auth.auth
          .createUserWithEmailAndPassword(Form.value.email, Form.value.password)
          .then((result) => {
            this.isLoading = false;
            console.log(result);
            result.user.updateProfile({ displayName: Form.value.name });
            this.db
              .collection("owner")
              .doc(result.user.uid)
              .set({ email: Form.value.email, name: Form.value.name });
            this.router.navigate(["/admin/"]);
            Form.resetForm();
          })
          .catch((err) => {
            this.isLoading = false;
            console.log(err);
          });
      }
    }
  }
}
