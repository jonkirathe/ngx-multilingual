# Ngx-Multilingual

Simple Ngx-Multilingual library for angular

![Static Badge](https://img.shields.io/badge/build-passing-brightgreen)
![GitHub Repo stars](https://img.shields.io/github/stars/raju/ngx-multilingual)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/raju/ngx-multilingual/main)

## Usage

### 1. Install

```
npm install ngrj-multilingual --save
```

import `NgxMultilingualService`。

```typescript
import {NgxMultilingualService} from "ngrj-multilingual";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages: Languages[] = [];
  translatedText: string = '';
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly translationService = inject(NgxMultilingualService);
  @ViewChild('paragraph', {read: ElementRef}) paragraph: any;

  ngOnInit(): void {
    this.getLanguages();
  }

  ngAfterViewInit() {
    this.translate(this.paragraph.nativeElement.innerHTML, 'ar');
  }

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
      }, error => {
        console.log('error: ', error)
      });
  }
}
```

### 2、Template

```html
<div>
  <h1>Translator</h1>
  <p #paragraph>Microservice architecture is a very popular approach in designing and implementing highly scalable web applications. Communication within a monolithic application between components is usually based on method or function calls within the same process. A microservices‑based application, on the other hand, is a distributed system running on multiple machines.</p>

  <h2>Translated Section</h2>
  <p>{{translatedText}}</p>
  <h2>Supported Languages</h2>
  <p *ngFor="let lang of languages">{{ lang.name }} [ {{ lang.code }} ]</p>
  <hr/>
</div>
```

### 3、DOM
This is how the translated page will look like:
# Translator 
Microservice architecture is a very popular approach in designing and implementing highly scalable web applications. Communication within a monolithic application between components is usually based on method or function calls within the same process. A microservices‑based application, on the other hand, is a distributed system running on multiple machines.

# Translated Section {Arabic [ ar ]}
ويعد هيكل الخدمات البالغة الصغر نهجا شعبيا للغاية في تصميم وتطبيق تطبيقات شبكة الإنترنت عالية التصعيد. عادة ما يستند الاتصال في إطار تطبيق أحادي بين العناصر إلى أساليب أو مهام في إطار نفس العملية. ومن ناحية أخرى، يوجد نظام موزع يعمل على أجهزة متعددة.

Supported Languages
English [ en ]

Arabic [ ar ]

Azerbaijani [ az ]

Catalan [ ca ]

Chinese [ zh ]

Czech [ cs ]

Danish [ da ]

Dutch [ nl ]

Esperanto [ eo ]

Finnish [ fi ]

French [ fr ]

German [ de ]

Greek [ el ]

Hebrew [ he ]

Hindi [ hi ]

Hungarian [ hu ]

Indonesian [ id ]

Irish [ ga ]

Italian [ it ]

Japanese [ ja ]

Korean [ ko ]

Persian [ fa ]

Polish [ pl ]

Portuguese [ pt ]

Russian [ ru ]

Slovak [ sk ]

Spanish [ es ]

Swedish [ sv ]

Thai [ th ]

Turkish [ tr ]

Ukranian [ uk ]

Vietnamese [ vi ]



## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/raju/ngx-multilingual/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/raju/ngx-multilingual/blob/main/LICENSE) file for the full text)
