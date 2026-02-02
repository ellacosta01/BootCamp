import { Component } from '@angular/core';
//librerias a importar
import { UserServices } from '../../../services/user.service/user.services';
import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user.component',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  //template: '<p> Hola desdes user.component.ts</p>',
  
})
export class UserComponent {

  users: any[] = [];
  constructor(private userServi: UserServices, private cdt: ChangeDetectorRef ){
     this.userServi.getUser().subscribe(data =>{
      this.users = data;
      console.log(this.users);
      this.cdt.detectChanges();
     
    })
  }

}