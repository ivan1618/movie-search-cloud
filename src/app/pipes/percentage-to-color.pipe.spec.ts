import { PercentageToColorPipe } from './percentage-to-color.pipe';

describe('PercentageToColorPipe', () => {
    it('create an instance', () => {
        const pipe = new PercentageToColorPipe();
        expect(pipe).toBeTruthy();
    });
});
