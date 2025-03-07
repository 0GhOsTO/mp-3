import styled from "styled-components";

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #262626;
    color: #D9E5E5;
    @media (max-width:750px) {
        align-items: center;
    }
`;

export default function Header(){
    return (
        <>
            <HeaderWrapper>
                <h1>Andrew Cho</h1>
                <div id="Logo"><p id = "BU">Boston University Sophomore</p></div>
            </HeaderWrapper>
        </>
    );
}