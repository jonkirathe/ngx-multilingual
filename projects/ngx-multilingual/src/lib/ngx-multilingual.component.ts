import {Component, DestroyRef, inject} from '@angular/core';
import {NgxMultilingualService} from "./ngx-multilingual.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Languages} from "./languages";

@Component({
  selector: 'lib-ngx-multilingual',
  template: `
    <!--<label for="languageSelect">Select Language:</label>
    <select id="languageSelect" [(ngModel)]="selectedLanguage" (change)="changeLanguage()">
      <option *ngFor="let lang of supportedLanguages" [value]="lang">{{ lang }}</option>
    </select>>-->
    <h2>Supported Languages</h2>
    <p *ngFor="let lang of languages">{{ lang }}</p>
    <div>
      <p>{{ translatedText }}</p>
      <button (click)="translate('hello', 'de')">Translate to German</button>
    </div>
  `,
  styles: [
  ]
})
export class NgxMultilingualComponent {
  translatedText: string = '';
  languages: Languages[] = [];
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly translationService = inject(NgxMultilingualService)
  constructor() {}

  getLanguages(): void {
    this.translationService.languages()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((languages) => {
        this.languages = languages;
      });
  }
  translate(text: string, targetLanguage: string): void {
    this.translationService.translateText(text, targetLanguage)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((translation) => {
      this.translatedText = translation;
    });
  }
}
