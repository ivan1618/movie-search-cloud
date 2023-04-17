import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../../enums';

@Component({
    selector: 'ms-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: [ './language-selector.component.scss' ]
})
export class LanguageSelectorComponent {
    languages = Object.keys(Languages);
    selectedLanguage: string;

    constructor(private readonly translateService: TranslateService) {
        this.selectedLanguage = this.translateService.currentLang;
        this.setLanguageArray(this.selectedLanguage);
    }

    setLanguage(lang: string): void {
        this.translateService.use(lang);
        this.selectedLanguage = lang;
        this.setLanguageArray(lang);
    }

    private setLanguageArray(lang: string): void {
        const newLanguageList = this.languages.filter(lg => lg !== lang);
        newLanguageList.unshift(lang);
        this.languages = newLanguageList;
    }
}
