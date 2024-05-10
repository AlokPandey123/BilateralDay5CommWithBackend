import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './Services/user.service';
import { NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Day5';
  arr:any[] =[];
  constructor(private users:UserService){}
  ngOnInit(): void {
      this.getData();
  }
  getData(){
    this.users.getUsers().subscribe((data)=>{
      this.arr= data;
    })
  }

  handleInput(form:NgForm){
     const data= form.value;
     this.users.postData(data).subscribe((res)=>{
      console.log(res);
      if(res){
        alert("data posted");
      }
     })
     form.resetForm();
  }
}
