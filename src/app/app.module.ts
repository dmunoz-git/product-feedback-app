import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { UIButtonModule } from './shared/ui-components/ui-button/ui-button.module';
import { UIChipsModule } from './shared/ui-components/ui-chips/ui-chips.module';
import { UICounterModule } from './shared/ui-components/ui-counter/ui-counter.module';
import { FormsModule } from '@angular/forms';
import { UIToastModule } from './shared/ui-components/ui-toast/ui-toast.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslocoRootModule,

        //Temporal
        UIButtonModule,
        UIChipsModule,
        UICounterModule,
        UIToastModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
