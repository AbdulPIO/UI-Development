import { ReversePipe } from "./reverse.pipe"

describe('Component: User', () => {
    it('should test the pipe', () => {
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
    });
})