import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIButtonModule } from './shared/ui-components/button/ui-button.module';
import { UIDividerModule } from './shared/ui-components/divider/ui-divider.module';
import { UIDropdownModule } from './shared/ui-components/dropdown/ui-dropdown.module';

import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslocoRootModule,
        UIButtonModule,
        UIDropdownModule,
        UIDividerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
