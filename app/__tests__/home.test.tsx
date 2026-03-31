import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('should render correctly', () => {
    render(<div>Hello DevOps</div>)
    expect(screen.getByText('Hello DevOps')).toBeInTheDocument()
  })
})