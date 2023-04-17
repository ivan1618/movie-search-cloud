import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';
import { MovieResult, Pagination } from '../../interfaces';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: [ './search-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit, OnDestroy {
    readonly isLoading = new BehaviorSubject(false);
    readonly isCached = new BehaviorSubject<boolean | null>(null);

    movies?: Array<MovieResult>;
    selectedMovie?: MovieResult;
    paginationData?: Pagination;
    searchText?: string;
    hasError = false;

    private readonly destroy$ = new Subject<void>();

    constructor(private readonly movieService: MovieService,
                private readonly translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.translateService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.searchMovie(this.searchText, this.paginationData?.page ?? 1)
        })
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    searchMovie(value: string | undefined, page: number): void {
        if (!value) return;
        this.searchText = value;
        this.resetState();
        this.isLoading.next(true);
        this.movieService.getMovies(value, page)
            .pipe(
                finalize(() => this.isLoading.next(false)))
            .subscribe({
                next: res => {
                    this.movies = res.results;
                    this.paginationData = {
                        page: res.page,
                        total_pages: res.total_pages
                    };
                    this.isCached.next(res.cache_hit > 0);
                },
                error: () => {
                    this.hasError = true;
                }
            })
    }

    showMovieInfo(movie: MovieResult): void {
        this.selectedMovie = movie;
    }

    private resetState(): void {
        this.movies = undefined;
        this.hasError = false;
        this.paginationData = undefined;
        this.isCached.next(null);
    }
}
