import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  padding: 36px 26px;
`
export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
