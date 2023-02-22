import { render, screen, fireEvent } from '@testing-library/react';
import Create from './Create';
describe('Render Create component', () => {
  it('should render the Create component', async() => {
    const Render = () => <div>Test Render</div>;
    const CreateBook = jest.fn();
   await render(<Create Render={Render} CreateBook={CreateBook} />);
  });
it('should render the form',  () => {
    const Render = () => <form></form>;
    render(<Create Render={Render} />);
    const formElement = document.querySelector('form');
    expect(formElement).toBeInTheDocument();
  });
});
