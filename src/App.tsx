import styled from "styled-components";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from "./components/Navigation.tsx"
import Experience from "./components/Experience.tsx"
import Home from "./components/Home.tsx"
import Certifications from "./components/Certifications.tsx";
import SkillsAndInterests from "./components/SkillsAndInterests.tsx";
import LeadershipPositions from "./components/LeadershipPositions.tsx";
import Education from "./components/Education.tsx";
import Project from "./components/Project.tsx";
import Credits from "./components/Credits.tsx";
import Header from "./components/Header.tsx";


const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #262626;
    height: 100vh;
    flex: 1;
`;


const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    /*For testing*/
    background-color: #262626;
    @media(max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;

const MainWrapper = styled.div`
    width: 100%;
    align-self: center;
`;

const MainText = styled.div`
    width:70%;
    text-decoration: none;
    color: #D9E5E5;
    font-family: 'Sans Serif Collection', sans-serif;
    align-items: center;
    padding: 5%;
    @media(max-width: 750px) {
        width: 100%;
    }
`;

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
const FooterWrapper = styled.footer`
    width: 80vw;
    margin: 0 auto;
    color: whitesmoke;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: black;
`;

const NavCheck = styled.div`
    height:40%;
    width: 30%;
    @media (max-width: 750px) {
        width: auto;
    }
`;



export function App(){
    document.title = "Home | Resume";
    return(
        <>
            <AppWrapper>
            <PageWrapper>
                <Header/>
                <MainWrapper>
                    <BrowserRouter>

                        <Container>
                            <NavCheck>
                                <Navigation />
                            </NavCheck>


                            <MainText>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/Experience" element={<Experience />} />
                                    <Route path="/LeadershipPositions" element={<LeadershipPositions />} />
                                    <Route path="/Certifications" element={<Certifications/>} />
                                    <Route path="/Education" element={<Education/>}/>
                                    <Route path="/SkillsAndInterests" element={<SkillsAndInterests/>}/>
                                    <Route path="/Project" element={<Project/>}/>
                                </Routes>
                            </MainText>
                        </Container>
                    </BrowserRouter>
                </MainWrapper>





            </PageWrapper>
            <BrowserRouter>
                <FooterWrapper>Rights Reserved by Andrew Cho<Credits />  &copy;</FooterWrapper>
            </BrowserRouter>
            </AppWrapper>
        </>
    )
}

export default App;
