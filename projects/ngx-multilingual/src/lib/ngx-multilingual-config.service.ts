import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxMultilingualConfigService {
  supportedLanguages: string[] = ['en', 'fr', 'es'];
  defaultLanguage: string = 'en';
}
