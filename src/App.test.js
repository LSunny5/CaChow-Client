import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  const { getByText } = render(  
    <BrowserRouter>
      <App />
    </BrowserRouter>);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

describe(`App component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
          <BrowserRouter>
              <App />
          </BrowserRouter>,
          div
      );
      ReactDOM.unmountComponentAtNode(div);
  });
});
