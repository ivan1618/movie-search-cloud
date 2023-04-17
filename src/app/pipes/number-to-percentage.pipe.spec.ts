import { NumberToPercentagePipe } from './number-to-percentage.pipe';

describe('NumberToPercentagePipe', () => {
    it('create an instance', () => {
        const pipe = new NumberToPercentagePipe();
        expect(pipe).toBeTruthy();
    });
});
