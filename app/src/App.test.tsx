import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/MÁS NOTAS DE ACUMULADO GRILLA/i)
  expect(linkElement).toBeInTheDocument()
})
