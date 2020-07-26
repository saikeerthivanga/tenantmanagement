import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detailregister',
  templateUrl: './detailregister.component.html',
  styleUrls: ['./detailregister.component.css']
})
export class DetailregisterComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private auth: AngularFireAuth, private db: AngularFirestore) { }

  obj: Object =null;
  isLoading:boolean = false;
  uid:string;
  id: string;
  tenetassigned:boolean;
  email: string = null;

  ngOnInit() {

    this.ar.paramMap.subscribe((param)=>{
      this.id = param.get('id');
      this.isLoading = true;
      this.auth.authState.subscribe((user)=>{
        this.uid = user.uid;
        this.db.collection("owner").doc(this.uid).collection("properties").doc(this.id).get().subscribe((result)=>{
          this.isLoading = false;
          this.tenetassigned = result.get('tenentassigned');
          console.log(result.get('tenentassigned'))
          console.log(this.tenetassigned);
          console.log(typeof(this.tenetassigned))
          if(this.tenetassigned == true){
            
            this.email = result.get('tenentemail');
          }
          console.log(result.data());
          this.obj = result.data();
        })
      })

    })
  }

  async assign(Form: NgForm){
    if(Form.valid){
      this.obj["tenentemail"] = Form.value.email;
      this.obj["tenentassigned"] = true;
      this.isLoading = true;
      this.db.collection("owner").doc(this.uid).collection("properties").doc(this.id).set(this.obj).then(()=>{
        this.isLoading = false;
        alert("Tenent added successfully!");
        this.tenetassigned = true;
        this.email = this.obj["tenentemail"]
      });
      
    }
  }

}
