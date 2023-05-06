import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Title } from '../components/Title';


//Para comprobar que el componente se renderiza correctamente.
describe('Title component', () => {
  test('renders correctly', () => {
    const { container } = render(<Title />);
    expect(container).toMatchSnapshot();
  });
//Para comprobar que el componente muestra el texto 'React Test App'
  test('displays the title text', () => {
    const { getByText } = render(<Title />);
    expect(getByText('React Test App')).toBeInTheDocument();
  });
});