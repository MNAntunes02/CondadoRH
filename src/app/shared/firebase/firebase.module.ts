import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { environment } from '../../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class FirebaseModule { }
