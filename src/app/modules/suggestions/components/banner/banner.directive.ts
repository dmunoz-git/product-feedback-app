import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[app-banner-title]',
})
export class BannerTitleDirective {
    @HostBinding('class') class = 'banner__title';
}

@Directive({
    selector: '[app-banner-subtitle]',
})
export class BannerSubtitleDirective {
    @HostBinding('class') class = 'banner__subtitle';
}
