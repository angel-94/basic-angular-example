import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BlankLayoutComponent} from './blank-layout/blank-layout.component';
import {AppLayoutComponent} from './app-layout/app-layout.component';
import {CustomMaterialModule} from "./custom-material/custom-material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {SpeechRecognitionModule} from "@kamiazya/ngx-speech-recognition";

@NgModule({
    declarations: [
        AppComponent,
        BlankLayoutComponent,
        AppLayoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CustomMaterialModule,
        HttpClientModule,
        SpeechRecognitionModule.withConfig(
            {
                lang: 'es',
                interimResults: true,
                maxAlternatives: 10,
                continuous: true
            }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
