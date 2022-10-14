import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage, ref as refS, getDownloadURL } from "firebase/storage";
import { Appointment } from '../sharedApp/Appointment';
import { AppointmentService } from '../sharedApp/appointment.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  lanches: any[] = [];
  p: number = 1;
  hide: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
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

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async showProduto(produto){

    console.log("evento Ok")

    const alert = await this.alertController.create({
      header: produto.firstName,
      message: `${produto.lastName}<br>Valor: R$${produto.mabileNumber}`, 
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
