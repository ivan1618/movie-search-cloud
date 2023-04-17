import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberToPercentage'
})
export class NumberToPercentagePipe implements PipeTransform {

    transform(value: number): string {
        return `${Math.round(value * 10)}`;
    }

}
