import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('displays the application title', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /SQE CI\/CD Demo Application/i,
      }),
    ).toBeInTheDocument()
  })

  test('displays the operational status', () => {
    render(<App />)

    expect(screen.getByText(/System is operational/i)).toBeInTheDocument()
  })
})