export interface MovieResponse {
    page: number;
    results: Array<MovieResult>;
    total_pages: number;
    total_results: number;
    cache_hit: number;
    cached_at: number;
}

export interface MovieResult {
    adult: boolean;
    backdrop_path?: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Pagination {
    page: number;
    total_pages: number;
}
