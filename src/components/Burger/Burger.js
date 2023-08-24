import styled from 'styled-components';
import { bool, func } from 'prop-types'

const StyledBurger = styled.button`
  position: relative;
  top: 0%;
  left: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: clamp(1rem, 0.8364rem + 0.7273vw, 2rem);
  height: clamp(1rem, 0.8364rem + 0.7273vw, 2rem);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: clamp(1rem, 0.8364rem + 0.7273vw, 2rem);
    height: clamp(0.2rem, 0.1918rem + 0.0364vw, 0.25rem);
    border-radius: .625rem;
    background-color: white;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: .0625rem;

    // :first-child {
    //     transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    // }

    // :nth-child(2) {
    //     opacity: ${({ open }) => open ? '0' : '1'};
    //     transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
    // }
  }
`;

const Burger = ({open, setOpen}) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
        </StyledBurger>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

export default Burger;