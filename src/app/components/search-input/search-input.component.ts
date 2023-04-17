import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'ms-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: [ './search-input.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {
    @Output('search') searchEvent = new EventEmitter<string>();
    @Input() isLoading = false;

    readonly inputControl = new FormControl<string>('');

    constructor() {
    }

    search(): void {
        this.searchEvent.emit(this.inputControl.value ?? '');
    }
}
