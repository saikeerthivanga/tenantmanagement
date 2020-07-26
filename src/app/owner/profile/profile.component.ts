import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase/app';
import 'firebase/storage'
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private db: AngularFirestore, private storage: AngularFireStorage) { }
  email;
  name;
  mobilenumber;
  address;
  uid;
  

  spinnerload: boolean = false;
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


  ngOnInit() {
    this.spinnerload = true;

    this.auth.authState.subscribe((result)=>{
      this.email = result.email;
      this.name = result.displayName;
      this.fileurl = result.photoURL;
      this.uid = result.uid
      if(this.fileurl == undefined)
        this.fileurl = "";
        this.db.collection("owner").doc(result.uid).get().subscribe((document)=>{
          this.spinnerload = false;
          this.mobilenumber=document.get('mobilenumber');
          this.address=document.get('address');
        })
    })

  }
  uploadimage(){
    const reference = firebase.storage().ref();
    
    this.spinnerload = true;
    let task = reference.child(this.email).put(this.file);
    task.then((snapshot)=>{
      return snapshot.ref.getDownloadURL()
    }).then((url)=>{
      console.log(url);
      this.spinnerload = false;
      alert("Profile Picture Updated Successfully")
      this.auth.auth.currentUser.updateProfile({photoURL : url })
    })

    
  }
  update(Form: NgForm){
    this.spinnerload= true;
    this.auth.auth.currentUser.updateProfile({displayName: Form.value.name});
    this.db.collection("owner").doc(this.uid).set(Form.value).then(()=>{
      this.spinnerload= false;
    });

  }

}
