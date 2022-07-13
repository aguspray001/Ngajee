import {fireEvent, render, RenderResult, screen} from '@testing-library/react';
import { exact } from 'prop-types';
import Button from "../components/atoms/Button";

describe('should testing button', ()=>{

    const handleClick = jest.fn();

    it('renders button', ()=>{
        render(<Button type="Dewadwa">dewd</Button>)
        expect(screen.getByText('dewd')).toBeInTheDocument();
    })

    it('calling onclick when button is clicked', ()=>{
        render(<Button type="btn" onClick={handleClick}>Click Me</Button>)
        fireEvent.click(screen.getByText(/click me/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    it('calling onclick when button is double clicked', ()=>{
        render(<Button type="btn" onClick={handleClick}>Click Me</Button>)
        fireEvent.click(screen.getByText(/click me/i));
        fireEvent.click(screen.getByText(/click me/i));
        expect(handleClick).toHaveBeenCalledTimes(2);
    })

})