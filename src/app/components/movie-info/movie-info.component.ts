import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MovieResult } from '../../interfaces';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'ms-movie-info',
    templateUrl: './movie-info.component.html',
    styleUrls: [ './movie-info.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieInfoComponent implements OnInit, OnDestroy {
    @Output('close') closeEmitter = new EventEmitter();
    @Input() movie!: MovieResult;

    movieImage?: string;

    constructor() {
        document.querySelector('html')!.style.overflow = 'hidden';
    }

    ngOnInit(): void {
        if (this.movie.poster_path || this.movie.backdrop_path) {
            this.movieImage = `${environment.imagePathUrlOriginal}/${this.movie.backdrop_path ?? this.movie.poster_path}`;
        }
    }

    ngOnDestroy() {
        document.querySelector('html')!.style.overflow = 'auto';
    }

    closeModal(event: MouseEvent): void {
        if ((event.target as HTMLElement).classList.contains('ms-modal')) {
            this.closeEmitter.emit();
        }
    }
}
