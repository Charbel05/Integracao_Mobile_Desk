import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

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
