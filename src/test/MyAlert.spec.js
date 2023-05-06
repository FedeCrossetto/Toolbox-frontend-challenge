import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyAlert from '../components/MyAlert';

describe('MyAlert component', () => {
  test('renders correctly', () => {
    const { container } = render(<MyAlert showAlert={true} setShowAlert={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  test('shows alert message', () => {
    const setShowAlert = jest.fn();
    const { getByText, getByRole } = render(<MyAlert showAlert={true} setShowAlert={setShowAlert} />);

    const closeButton = getByRole('button');
    fireEvent.click(closeButton);

    expect(setShowAlert).toHaveBeenCalledWith(false);
    expect(getByText('The selected file does not contain information.')).toBeInTheDocument();
  });

  test('does not show alert message', () => {
    const { queryByText } = render(<MyAlert showAlert={false} setShowAlert={() => {}} />);
    expect(queryByText('The selected file does not contain information.')).toBeNull();
  });
});