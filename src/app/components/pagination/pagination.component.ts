import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '../../interfaces';

@Component({
    selector: 'ms-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: [ './pagination.component.scss' ]
})
export class PaginationComponent {
    @Output('changePage') changePageEmitter = new EventEmitter<number>();
    @Input() data!: Pagination;

    pageChange(page: number): void {
        this.changePageEmitter.emit(page);
    }

}
