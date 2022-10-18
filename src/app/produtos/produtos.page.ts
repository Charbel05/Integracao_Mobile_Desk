import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage, ref as refS, getDownloadURL } from "firebase/storage";
import { Appointment } from '../sharedApp/Appointment';
import { AppointmentService } from '../sharedApp/appointment.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})

export class ProdutosPage {

  lanches: any[] = [];
  p: number = 1;
  hide: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public authService: AuthenticationService,
    public alertController: AlertController,
    public router: Router,
    public crudApi: AppointmentService, 
  ) { }
 
  async showHome(){
    this.router.navigate(['dashboard']);  
  }

  async showPerfil(){
    this.router.navigate(['perfil']);  
  }

  ngOnInit() {
    const storage = getStorage();
    this.dataState();
    let s = this.crudApi.getBookingList();
    s.snapshotChanges().subscribe(data => {
      this.lanches = [];
      console.log("Aqui  ", this.lanches);
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.lanches.push(a as Appointment);
        console.log("Aqui  ", this.lanches);
      })
    })
  }

  dataState() {
    this.crudApi.getBookingList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hide = false;
        this.noData = true;
      } else {
        this.hide = true;
        this.noData = false;
      }
    })
  }

  async popUpProduto(){

    console.log("evento Ok")

    const alert = await this.alertController.create({
      header: 'This is an alert!',
      message: 'This is an alert!', 
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
        },
        {
          text:'COMPRAR',
        },
      ],
    });

    await alert.present();
  }

}
