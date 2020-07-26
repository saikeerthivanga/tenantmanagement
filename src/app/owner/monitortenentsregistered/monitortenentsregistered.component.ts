import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-monitortenentsregistered',
  templateUrl: './monitortenentsregistered.component.html',
  styleUrls: ['./monitortenentsregistered.component.css']
})
export class MonitortenentsregisteredComponent implements OnInit {

  tenants:Object[]=[];
  nodata:boolean = false;
  isLoading:boolean = false;

  constructor(private ar: ActivatedRoute, private auth: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit() {
    this.isLoading = true;
    this.auth.authState.subscribe((result)=>{
      const uid = result.uid;
      this.db.collection("owner").doc(uid).collection("properties").get().subscribe((result)=>{
        this.isLoading = false;
        
        result.docs.forEach((document)=>{
          console.log(document.data());
          this.tenants.push(document.data())          
        })
      })
    })
  }

}
