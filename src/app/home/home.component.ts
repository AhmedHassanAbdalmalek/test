import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name:string='';
  image:any='assets/c.jpg';
  firstname:any='';
  fontcolor:any='red';
  iscolored:any=true;
  email:any='';
  password:any='';
  

  changename() {
    this.name=this.firstname;
    this.iscolored=false;
   
  };
  login(){
    if(this.email=='admin@gmail.com' && this.password=='123456'){
      alert('login success');
    }
    else{
      alert('login failed');
    }
  }
    
  }


