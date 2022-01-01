export interface UIToastData {
    message: string;
    duration?: number;
    close?: string;
    position?: UIToastPosition;
}

export type UIToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'center';
