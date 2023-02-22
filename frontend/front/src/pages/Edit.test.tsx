import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Edit from './Edit';

    describe('Edit', () => {
      it('should open the form when the button is clicked', () => {
        const mockRender = jest.fn();
        render(
          <Edit
            id="123"
            CurrentName="Book Name"
            CurrentDescription="Book Description"
            CurrentAuthor="Book Author"
            CurrentUrl="https://example.com/book.jpg"
            CurrentYear={2022}
            Render={mockRender}
          />
        );
        const button = screen.getByRole('button', { name: 'Editar' });
        fireEvent.click(button);
        const formElement = document.querySelector('form');
    expect(formElement).toBeInTheDocument();
      });
    });
    


