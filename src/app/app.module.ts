import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIIconModule } from './shared/ui-components/icon/ui-icon.module';

import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, TranslocoRootModule, UIIconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
