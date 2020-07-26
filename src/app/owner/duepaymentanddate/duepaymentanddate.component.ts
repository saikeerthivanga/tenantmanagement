import { Component, OnInit } from '@angular/core';
import { Tenant } from '../tenant.model';
import {Subscription} from 'rxjs';
import {TenantService} from '../tenants.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-duepaymentanddate',
  templateUrl: './duepaymentanddate.component.html',
  styleUrls: ['./duepaymentanddate.component.css']
})
export class DuepaymentanddateComponent implements OnInit {
  paymentdone=false
  tenants
  private tenantssub:Subscription

  constructor(private auth:AngularFireAuth,private db: AngularFirestore, private router: Router,public tenantservice:TenantService) { }

  ngOnInit() {
    this.auth.authState.subscribe((user)=>{

      console.log(user);
      const uid = user.uid;
      this.db.collection("owner").doc(uid).collection("properties").get().subscribe((tl)=>{

        tl.docs.forEach((document)=>{
          console.log(typeof(document))
          let obj ={
            ...document.data()
          }
          obj.id = document.id
          this.tenants.push(obj);

          // console.log(document.get('propertyname'));
          // console.log(document.get('propertylocation'));
          // console.log(document.get('price_in_rupees'));
          // console.log(document.get('image_url'));
          // console.log(document.get('area_in_sqft'));
          console.log(this.tenants);




        });
  })
})

}
}
