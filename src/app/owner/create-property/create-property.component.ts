import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import 'firebase/storage';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {
  isloading:boolean;
  uid: string;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth) { }

  ngOnInit() {
    console.log("create-property");
    this.auth.authState.subscribe((user)=>{
      this.uid = user.uid;
    })
  }

  //for uploading file
  file:File;
  fileurl: string|ArrayBuffer="";
  filechanged:boolean = false;
  getfile(file: File)
  {
    let reader = new FileReader();
    this.file = file;
    this.filechanged = true;
    reader.readAsDataURL(this.file);
    reader.onload= ()=>{
      this.fileurl= reader.result;
    }
  }

  addproperty(Form: NgForm){
    if(Form.valid){
      let obj ={
        ...Form.value
      }
      delete obj["file"];
      obj["tenentassigned"] = false;
      obj["tenentemail"] = "";
      console.log(Form.value);
      const description = Form.value.description;
      this.isloading = true;
      const reference = firebase.storage().ref();
      const timestamp = Date.now();
      let task = reference.child(timestamp.toString()).put(this.file);
      this.isloading = true;
      task.then((snapshot)=>{
        return snapshot.ref.getDownloadURL()
      }).then((url) => {
        obj["image_url"] = url;
        const ts = Date.now();
        this.db.collection("owner").doc(this.uid).collection("properties").doc(ts.toString()).set(obj).then(()=>{
          this.isloading = false;
          console.log(obj);
          alert("Property added successfully");
        });
      })
    }
  }

}
