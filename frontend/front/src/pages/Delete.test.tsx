import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Delete from './Delete';

describe('Deletar', () => {
  it('Call API to delete when item is clicked', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({}),
    });
    global.fetch = mockFetch;

    const mockRender = jest.fn();
    render(<Delete id="1" Render={mockRender} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await new Promise(resolve => setTimeout(resolve, 1000)); // Aguarda um segundo para a função passada para a prop Render ser chamada.

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:8000/delete/1', {
      method: 'DELETE',
    });
    expect(mockRender).toHaveBeenCalled();
  });
});
