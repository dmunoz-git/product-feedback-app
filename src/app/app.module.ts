import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIBadgeModule } from '@shared/ui-components/badge/ui-badge.module';
import { UIButtonModule } from '@shared/ui-components/button/ui-button.module';
import { UIChipsModule } from '@shared/ui-components/chips/ui-chips.module';
import { UICounterModule } from '@shared/ui-components/counter/ui-counter.module';
import { UIDividerModule } from '@shared/ui-components/divider/ui-divider.module';
import { UIDropdownModule } from '@shared/ui-components/dropdown/ui-dropdown.module';
import { UIIconModule } from '@shared/ui-components/icon/ui-icon.module';
import { UIInputModule } from '@shared/ui-components/input/ui-input.module';
import { UIToastModule } from '@shared/ui-components/toast/ui-toast.module';
import { UIToolbarModule } from '@shared/ui-components/toolbar/ui-toolbar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UISelectorModule } from './shared/ui-components/select/ui-selector.module';

import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslocoRootModule,

        // Temporal
        UIButtonModule,
        UIBadgeModule,
        UIChipsModule,
        UICounterModule,
        UIDropdownModule,
        UIDividerModule,
        UIIconModule,
        UIInputModule,
        UIDropdownModule,
        UIToastModule,
        UISelectorModule,
        UIToastModule,
        UIToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
