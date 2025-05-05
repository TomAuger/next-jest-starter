import { render, screen } from '@testing-library/react'
import HelloWorld from '../HelloWorld'

describe('HelloWorld', () => {
  it('renders hello world text', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Hello, Val!')).toBeInTheDocument()
  })
}) 