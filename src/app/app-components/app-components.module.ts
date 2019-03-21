import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppComponentsPage } from './app-components.page';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

// import { SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { Platform } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: AppComponentsPage,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CustomMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppComponentsPage, HomeComponent],
  providers: [
    SpeechRecognition,
    // Platform
    // SpeechRecognitionService,
  ]
})
export class AppComponentsPageModule { }
