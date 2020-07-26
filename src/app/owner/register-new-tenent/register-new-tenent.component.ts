import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-new-tenent',
  templateUrl: './register-new-tenent.component.html',
  styleUrls: ['./register-new-tenent.component.css']
})
export class RegisterNewTenentComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  isLoading:boolean;
  propertieslist:Object[] = [];

  ngOnInit() {
    this.isLoading = true;
    this.auth.authState.subscribe((user)=>{
      
      console.log(user);
      const uid = user.uid;
      this.db.collection("owner").doc(uid).collection("properties").get().subscribe((pl)=>{
        this.isLoading = false;
        pl.docs.forEach((document)=>{
          console.log(typeof(document))
          let obj ={
            ...document.data()
          }
          obj.id = document.id
          this.propertieslist.push(obj);
          
          // console.log(document.get('propertyname'));
          // console.log(document.get('propertylocation'));
          // console.log(document.get('price_in_rupees'));
          // console.log(document.get('image_url'));
          // console.log(document.get('area_in_sqft'));
          console.log(this.propertieslist);
          
        });
        
      })
    })
  }

  viewtenet(id:String){
    console.log(id);
    this.router.navigate(['/admin/detailregister/'+ id]);
    
    
  }
  addtenet(id:String){
    console.log(id);
    this.router.navigate(['/admin/detailregister/'+ id]);
  }

}
