import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner.component';
import { BannerSubtitleDirective, BannerTitleDirective } from './banner.directive';

@NgModule({
    declarations: [BannerTitleDirective, BannerSubtitleDirective, BannerComponent],
    imports: [CommonModule],
    exports: [BannerTitleDirective, BannerSubtitleDirective, BannerComponent],
})
export class BannerModule {}
