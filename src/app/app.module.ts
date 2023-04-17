import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NumberToPercentagePipe } from './pipes/number-to-percentage.pipe';
import { PercentageToColorPipe } from './pipes/percentage-to-color.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        SearchPageComponent,
        SearchInputComponent,
        MovieCardComponent,
        MovieInfoComponent,
        PaginationComponent,
        NumberToPercentagePipe,
        PercentageToColorPipe,
        LanguageSelectorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [ HttpClient ]
            }
        })
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
