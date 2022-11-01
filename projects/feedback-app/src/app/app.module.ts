import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { HomeModule } from './modules/home/home.module';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslocoRootModule,

        // Modules
        HomeModule,
        FeedbackModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
