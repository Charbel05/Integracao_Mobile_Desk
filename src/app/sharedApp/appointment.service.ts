import { Injectable } from '@angular/core';
import { Appointment } from '../sharedApp/Appointment';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }
  
  // Update
  updateBooking(id, apt: Appointment) {
    return this.bookingRef.update({
      $key: apt.$key,
      firstName: apt.firstName,
      lastName: apt.lastName,
      mobileNumber: apt.mobileNumber
    });
  }

  
}
