import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'percentageToColor'
})
export class PercentageToColorPipe implements PipeTransform {

    transform(value: string): string {
        let colorValue = +value;
        if (colorValue > 75) {
            return 'green';
        } else if (colorValue > 60) {
            return 'blue';
        } else {
            return 'orange';
        }
    }
}
