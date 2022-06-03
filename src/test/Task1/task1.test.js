import helloWorld from '../../app/Task1/task1'; // require helloWorld script

describe('Hello-World Test', () => {
    //Performing test
    it('Checks if function returns right value', () => {
        expect(helloWorld()).toBeTruthy();
    });
});