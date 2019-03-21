import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  matches: String[];
  record: String = '';
  isRecording = false;

  constructor(
    private speechRecognition: SpeechRecognition,
    private plt: Platform,
    private cd: ChangeDetectorRef
    // private speechService: SpeechRecognitionService
  ) { }

  ngOnInit() {
    console.log("PRUEBA EN LA PANTALLA")
    
  }

  getPermission(){
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        console.log(hasPermission)
        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }
      });
  }

  startListening(){
    console.log('Start');

    let options = {
      language: 'es-MX'
    }
    this.speechRecognition.startListening(options)
    .subscribe(
      (matches) => {
        console.log(JSON.stringify(matches))
        this.matches = matches;
        this.record = this.matches[0];
        this.cd.detectChanges();
      },
      (onError) => console.log('error', onError)
    )
    this.isRecording = true;
  }

  stopListening(){
    this.speechRecognition.stopListening()
    .then(() => {
      this.isRecording = false;
    })

  }

  isIos(){
    return this.plt.is('ios');
  }

}
