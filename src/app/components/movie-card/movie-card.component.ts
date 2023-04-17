import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieResult } from '../../interfaces';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'ms-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: [ './movie-card.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {
    @Input() movie!: MovieResult;
    @Output('moreInfo') moreInfoEmitter = new EventEmitter();
    
    movieImage?: string;

    ngOnInit(): void {
        if (this.movie.poster_path || this.movie.backdrop_path) {
            this.movieImage = `${environment.imagePathUrlSmall}/${this.movie.backdrop_path ?? this.movie.poster_path}`;
        }
    }

    moreInfo(): void {
        this.moreInfoEmitter.emit();
    }
}
