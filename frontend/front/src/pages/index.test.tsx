import { render, screen } from '@testing-library/react';
import Home from './index';
describe('Home component', () => {
  beforeAll(() => {
    const mockBooks = [
      {
        name: 'Book 1',
        description: 'Description 1',
        author: 'Author 1',
        image_url: 'http://example.com/book1.png',
        year: 2023,
        ID: '12345'
      },
     
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockBooks)
    });
  });

  it('renders list of books fetched from API', async () => {
    render(<Home />);
    
    const book1Name = await screen.findByText('Book 1', {}, { timeout: 5000 });
   

    expect(book1Name).toBeInTheDocument();
  
  });
});
