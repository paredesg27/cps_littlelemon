import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  // Mocking props
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();
  const mockAvailableTimes = {
    availableTimes: ['14:00', '14:30', '15:00', '15:30']
  };

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  test('renders BookingForm with all fields', () => {
    // Check if date input is present
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    
    // Check if time select dropdown is present and options are correct
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(screen.getByText('14:00')).toBeInTheDocument();
    expect(screen.getByText('14:30')).toBeInTheDocument();

    // Check if guests input is present
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();

    // Check if occasion select dropdown is present and options are correct
    const occasionSelect = screen.getByLabelText(/choose an occasion/i);
    expect(occasionSelect).toBeInTheDocument();
    expect(screen.getByText('Not Applicable')).toBeInTheDocument();
    expect(screen.getByText('Anniversary')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();
  });

  test('submits form with correct values', () => {
    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-08-05' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '14:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/choose an occasion/i), { target: { value: 'Anniversary' } });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Check if submitForm is called with the correct data
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2024-08-05',
      time: '14:00',
      guests: '4',
      occasion: 'Anniversary'
    });
  });

  test('dispatches event when date changes', () => {
    // Change date value
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-08-05' } });

    // Check if dispatch is called
    expect(mockDispatch).toHaveBeenCalledWith('2024-08-05');
  });
});