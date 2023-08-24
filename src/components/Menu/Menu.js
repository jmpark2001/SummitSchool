import styled from 'styled-components'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {bool} from 'prop-types'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: black;
  height: 100vh;
  text-align: left;
  padding: 20rem 2rem 2rem;  
  list-style-type: none;
  position: absolute;
  top: 0%;
  right: 0%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  @media (max-width: 599px) {
    width: 100vw;
    padding: 4rem 2rem 2rem;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 599px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: gray;
    }
  }

  li {
    padding: 1rem;
  }
`;

const Menu = ({ open, setOpen }) => {
    return (
        <StyledMenu open={open}>
            <CustomLink to="/" onClick={() => setOpen(!open)}>HOME</CustomLink>
            <CustomLink to="/about" onClick={() => setOpen(!open)}>ABOUT</CustomLink> 
            <CustomLink to="/classInfo" onClick={() => setOpen(!open)}>CLASS INFORMATION</CustomLink>
            <CustomLink to="/registration" onClick={() => setOpen(!open)}>REGISTRATION</CustomLink>
            <CustomLink to="/staff" onClick={() => setOpen(!open)}>STAFF</CustomLink>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Menu