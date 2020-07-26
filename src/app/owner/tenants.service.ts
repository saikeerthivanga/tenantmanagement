import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'
import {Tenant} from './tenant.model';
import  { map } from 'rxjs/operators'
import {Router} from '@angular/router'
import{Injectable} from '@angular/core'

@Injectable({providedIn:'root'})
export class TenantService{
  private tenants:Tenant[]=[];
  private tenantsupdated=new Subject<Tenant[]>();

  constructor(private http:HttpClient ,private router:Router){}
  gettenants()
  {
    this.http.get<{tenants:any}>('http://localhost:3000/api/posts')
    .pipe(map((TenantData)=>{
      return TenantData.tenants.map(tenant=> {
          return { 
           id:tenant.uid,
          name:tenant.name,
          due:tenant.due,


        };

        });
    }))
    .subscribe((transformedTenants)=>{
      this.tenants=transformedTenants;
      this.tenantsupdated.next([...this.tenants])
    });


  }
  getTenantsUpdateListener()
  {
    return this.tenantsupdated.asObservable();
  }

}
