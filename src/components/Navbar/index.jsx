import {Link} from "react-router-dom";
import styled from "styled-components";
import "./style.css";

const Nav = styled.nav`
    background-color: #333;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    ${(props) => props.style}
    @media (min-width: ${(props) => props.breakpoints.small}){
        flex-direction: row;
    }   
`;

const Logo = styled.div`
    font-size: 1.5rem;
    color: white;
    ${(props) => props.style}
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 0;
    flex-direction: column;
    width: 100%;
    ${(props) => props.style}
    @media (min-width: ${(props) => props.breakpoints.small}){
        flex-direction: row;
        width: initial;
    }
`;

const MenuItem = styled.li`
    font-size: 1rem;
    text-transform: uppercase;
    display: flex;
    width: 100%;
    ${(props) => props.style}
    @media (min-width: ${(props) => props.breakpoints.small}){
        width: initial;
    }
`;

const linkDefault = {
    color: 'white',
    textDecoration: 'none',
    padding: '1em',
    width: '100%',
    textAlign: 'center'
}

const Navbar = (props) => {
    return <>
        <Nav style={props.navStyle} breakpoints={props.breakpoints}>
            <Logo style={props.logoStyle}>
                {
                    props.logoImage ? <img src={props.logoImage} />  : props.logoTitle
                }
            </Logo>
            <Menu style={props.menuStyle} breakpoints={props.breakpoints}>
                <MenuItem style={props.menuItemStyle} breakpoints={props.breakpoints}><Link style={{...linkDefault, ...props.linkStyle}} to="/">Dashboard</Link></MenuItem>
                <MenuItem style={props.menuItemStyle} breakpoints={props.breakpoints}><Link style={{...linkDefault, ...props.linkStyle}} to="/login">Login</Link></MenuItem>
                <MenuItem style={props.menuItemStyle} breakpoints={props.breakpoints}><Link style={{...linkDefault, ...props.linkStyle}} to="/products">ProductList</Link></MenuItem>
            </Menu>
        </Nav>
    </>
}

export default Navbar;