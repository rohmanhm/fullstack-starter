import { render } from '@testing-library/react'
import React from 'react'
import { HiCollection } from 'react-icons/hi'
import Navigation, { NAVIGATION_MENU_TEST_ID } from '../navigation'

const navItems = [
  {
    icon: HiCollection,
    label: 'Menu',
    pathname: '/home',
  },
]

describe('Navigation Menu', () => {
  it('matches snapshot', () => {
    const emptyItems = render(<Navigation />)
    expect(emptyItems.asFragment()).toMatchSnapshot()

    const { asFragment } = render(<Navigation items={navItems} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('render items correctly', () => {
    const { getAllByTestId } = render(<Navigation items={navItems} />)
    expect(getAllByTestId(NAVIGATION_MENU_TEST_ID)).toHaveLength(
      navItems.length
    )
  })
})
