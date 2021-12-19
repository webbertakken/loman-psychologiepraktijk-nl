import React from 'react'
import { render, screen, fireEvent } from '../testUtils'
import Layout from '../../src/components/page/Layout'

describe('Layout', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Layout menu={[]}>{null}</Layout>, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders renders children', () => {
    render(
      <Layout menu={[]}>
        <button onClick={() => alert('button is clickable')}>
          Test Button
        </button>
      </Layout>,
      {}
    )
    window.alert = jest.fn()
    fireEvent.click(screen.getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('button is clickable')
  })
})
