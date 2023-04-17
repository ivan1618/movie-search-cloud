import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from './enums';

@Component({
    selector: 'ms-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    constructor(private readonly translateService: TranslateService) {
        if (Object.keys(Languages).includes(this.translateService.getBrowserLang() ?? '')) {
            this.translateService.setDefaultLang(this.translateService.getBrowserLang()!);
            this.translateService.use(this.translateService.getBrowserLang()!);
        } else {
            this.translateService.setDefaultLang(Languages.en);
            this.translateService.use(Languages.en);
        }
    }
}
