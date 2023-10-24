import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Languages} from "./languages";

const headers = new Headers();
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Methods', 'GET');
headers.append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class NgxMultilingualService {
  private libreTranslateUrl = 'https://translate.fedilab.app/';

  constructor(private http: HttpClient) {}

  languages(): Observable<Languages[]> {
    const params = new HttpParams()

    return this.http.get(this.libreTranslateUrl + 'languages').pipe(
      map((response: any) => response)
    );
  }

  translateText(text: string, targetLanguage: string): Observable<string> {
    const params = new HttpParams()
      .set('q', text)
      .set('source', "auto")
      .set('target', targetLanguage);

    return this.http.post(this.libreTranslateUrl + 'translate', null, { params }).pipe(
      map((response: any) => response.translatedText)
    );
  }
  /*private lingvaLunarUrl = 'https://lingva.lunar.icu/_next/data/lp5cuqVxSfFeVf8tdegpN/auto';

  constructor(private http: HttpClient) {}
  translateText(text: string, targetLanguage: string): Observable<string> {
    const translationUrl = `${this.lingvaLunarUrl}/${targetLanguage}/${text}.json`;
    // @ts-ignore
    return this.http.get(translationUrl).pipe(
      map((response: any) => response.translatedText)
    );
  }*/
}
