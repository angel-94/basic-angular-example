import {Component, OnInit} from '@angular/core';
import {SpeechRecognitionService} from "@kamiazya/ngx-speech-recognition";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [
        SpeechRecognitionService,
    ]
})
export class HomeComponent implements OnInit {

    public started = false;
    public message = '';

    frmSpeechDemo: FormGroup;
    finalMessage: any;

    constructor(private speechService: SpeechRecognitionService,) {
    }

    ngOnInit() {

        this.initFrmSpeechDemo();
        console.log('HomeComponent --> ', this.speechService);
        this.speechService.onstart = (e) => {
            console.log('onstart', e);
        };
        this.speechService.onresult = (e) => {
            this.message = e.results[0].item(0).transcript;
            console.log('HomeComponent:onresult ---> ', this.message, e);
        };

    }

    start() {
        this.started = true;
        this.speechService.start();
    }

    stop() {
        this.started = false;
        this.speechService.stop();
    }

    initFrmSpeechDemo() {
        this.frmSpeechDemo = new FormGroup({
            speech: new FormControl()
        })
    }

    onSubmit() {
        console.log('form value --> ', this.frmSpeechDemo.value);
        this.finalMessage = this.frmSpeechDemo.value;
        this.frmSpeechDemo.reset();
    }

    valueForSpeechField() {
        this.speechService.start();
        this.speechService.onresult = (e) => {
            let message = e.results[0].item(0).transcript;
            this.frmSpeechDemo.controls['speech'].setValue(message);
            if (e.results[0].isFinal) {
                this.speechService.stop();
                alert('Speech Recognition is ending. Please try again!');
            }
            console.log('HomeComponent:onresult ---> ', message, e);
        };
    }

}
