import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
  padding: 2rem 3rem;
  transition: background-color 0.3s ease;
`
export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarTitle = styled.h1`
  user-select: none;
  border: 3px solid ${({ theme }) => theme.Adminis};
  padding: 4px;
`
