import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
  ){ 
  }
  
  async showProdutos(){
    this.router.navigate(['produtos']);  
  }

  async showPerfil(){
    this.router.navigate(['perfil']);  
  }

  ngOnInit() {

  }

}