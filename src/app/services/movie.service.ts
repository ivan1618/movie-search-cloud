import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../interfaces';
import { environment } from '../../environments/environment';
import { ENDPOINTS } from '../constans';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private readonly http: HttpClient,
                private readonly translateService: TranslateService) {
    }

    getMovies(textValue: string, page: number): Observable<MovieResponse> {
        let params = new HttpParams();
        params = params.append('query', encodeURI(textValue.trim()))
        params = params.append('page', page)
        params = params.append('language', this.translateService.currentLang);
        return this.http.get<MovieResponse>(`${environment.apiUrl}/${ENDPOINTS.MOVIES}`, { params });
    }
}
