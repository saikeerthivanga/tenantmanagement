import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'tenantmanagementsystem';
  ngOnInit(){
    this.router.navigate(['/admin/registeranewtenent'])

  }

  constructor(private router: Router){

  }
}
