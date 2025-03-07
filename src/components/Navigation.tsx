import {Link} from 'react-router-dom';
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 100%;
`;

const NavUl = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #262626;
    font-size: calc(3px + 2vw);
    list-style: none;
    padding-left: 0;
    justify-content: space-evenly;
    @media(max-width: 750px) {
        display: flex;
        flex-direction: row;
    }
`;

const NavList = styled.li`
    text-align: center;
    font-size: calc(3px + 2vw);
    background-color: #000000;
    padding: 1vh 0%;
    margin: 1vh 3%;
    border-radius: 8px;
    @media(max-width: 750px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 2vw;
        text-align: center;
        padding: 1% 0%;
        margin: 1% 0.5%;
        list-style: none;
    }
`;

const StyledLink = styled(Link)`
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: #D9E5E5;
`;

const NavWrapper = styled.div`
    max-width: 100%;
    @media (max-width: 750px) {
        width: 100%;
    }
`;

export default function Navigation(){

    return(
        <NavWrapper>
            <StyledNav>
                <NavUl>
                    <NavList><StyledLink to="/">Home</StyledLink></NavList>
                    <NavList><StyledLink to="/Experience">Experience</StyledLink></NavList>
                    <NavList><StyledLink to="/LeadershipPositions">Leadership Positions</StyledLink></NavList>
                    <NavList><StyledLink to="/Certifications">Certifications</StyledLink></NavList>
                    <NavList><StyledLink to="/Education">Education</StyledLink></NavList>
                    <NavList><StyledLink to="/SkillsAndInterests">Skills & Interests</StyledLink></NavList>
                    <NavList><StyledLink to="/Project">Project</StyledLink></NavList>
                </NavUl>
            </StyledNav>
        </NavWrapper>

    );
}