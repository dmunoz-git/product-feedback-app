import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIButtonModule } from './shared/ui-components/ui-button/ui-button.module';
import { UIToastModule } from './shared/ui-components/ui-toast/ui-toast.module';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslocoRootModule,

        //Temporal
        UIToastModule,
        UIButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
