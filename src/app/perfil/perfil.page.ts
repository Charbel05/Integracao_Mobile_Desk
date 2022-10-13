import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  async showHome(){
    this.router.navigate(['dashboard']);  
  }

  async showPerfil(){
    this.router.navigate(['perfil']);  
  }
  ngOnInit() {
  }

}
