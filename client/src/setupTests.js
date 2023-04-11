// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const {handleChange} = require('../src/Components/SearchBar')


describe('la funcion handleChange' , () => {
    it('handleChange debe ser una funcion' , () => {
        expect(typeof handleChange).toBe('function')
    });
});
