export interface UiToastData {
    message: string;
    duration?: number;
    close?: string;
    position?: UiToastPosition;
}

export type UiToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'center';
