import styled from "styled-components";

const ProfilePhoto = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width:750px) {
        flex-direction: column;
        justify-content: center;
    }
`;


const ProfileImg = styled.img`
    justify-items: center;
    width: 100%;
    padding: 5% 5%;
    min-height: 50vh;
    min-width: 50vh;
    height: auto;
    max-height: 70%;
    @media (max-width:750px) {
        flex-direction: column;
        min-height: 0;
        min-width: 0;
    }
`;

const TextLayer = styled.div`
    padding: 1% 1%;
    justify-content: center;
`;

export default function Home(){
    document.title = "Home | Resume";
    return (
        <>
            <MainWrapper>
                <ProfilePhoto><ProfileImg id="profile" src="/profile.jpg" ></ProfileImg></ProfilePhoto>
                    <TextLayer>
                        <p>
                            My name is Andrew Cho,
                            tenacious worker and sophomore of Boston University Computer Science,
                            seeking opportunities for growth. Navigate and overcome challenges effectively.
                            Works effectively between people and thrives in a team environment.
                            Open-minded to new ideas and opinions.
                        </p>
                    </TextLayer>
            </MainWrapper>
        </>
    );
}
