import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.nav};
  padding: 32px 48px;
`
export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
