import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user = {} as User;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
  ) { }

  showHome(){
    this.router.navigate(['dashboard']);  
  }

  showProdutos(){
    this.router.navigate(['produtos']);  
  }

  changeName(){
    console.log("OK");
  }

  ngOnInit() {
  }

}
