import styled from 'styled-components';
import {useState} from 'react';



const ImageUl = styled.ul`
    width: 100%;
    list-style:none;
    justify-items: center;
    padding-left: 0;
    padding: 10vh;
`;


const ImageConv = styled.li`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
`;

const HCenter = styled.h1`
    text-align: center;
`;

const CalcStyle = styled.div<{$neg: boolean}>(props =>`
    
    @font-face {
        font-family: calcFont;
        src: url("/calculatorFont.ttf");
    }
    font-family: calcFont;
    max-width: 100%;
    min-height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    background-color: ${props.$neg ? "red" : "green"};
    background-opacity: 0.7;
    padding: 1vh 1vw;
    margin: 4vh 30%;
    border-style: solid;
    border-width: 20px;
    border-color: #D9E5E5;
    box-shadow: 0 0 50px black;
    justify-content: space-evenly;
    border-width: thick;
`);

const InputStyle = styled.input`
    max-width: 20%;
    font-size: calc(2vw + 1px);
    font-family: calcFont;
    text-align: center;
`;

const ButtonStyle = styled.div`
    align-items: center;
    text-align: center;
`;

const ButtonOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: calcFont;
    font-size: calc(2vw + 1px);
`;

const ButtonTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: calcFont;
    font-size: calc(2vw + 1px);
`;

const ResultStyle = styled.div`
    margin: 4vh 0;
    max-width: 100%;
    text-align: center;
    font-size: calc(2vw + 1px);
    color: black;
`;

const Darrow = styled.p`
    color: black;
    font-size: calc(2vw + 1px);
`;


export default function Project(){
    const [firstNum, setFirstNum] = useState<string>("");
    const [lastNum, setLastNum] = useState<string>("");
    const [result, setResult] = useState<string>("ANS");
    const [color, setColor] = useState<boolean>(false);

    document.title = "Project | Resume";

    const handleOperation = (op:string) =>{
        const num1 = Number(firstNum);
        const num2 = Number(lastNum);


        let res: number | string = Number(1);

        if(op === "power"){
            for (let i =0; i < Number(lastNum); i++ ) {
                res *= Number(firstNum);
            }
        }else if(op === "add"){
            res = num1 + num2;
        }else if(op === "subtract"){
            res = num1 - num2;
        }else if(op === "multiply"){
            res = num1 * num2;
        }else if(op === "divide"){
            res = num2 !== 0 ? num1 / num2 : "Error";
        }

        setColor(Number(res)<0);
        setResult(String(res));
    };

    return (
        <>
            <ImageUl>
                <ImageConv><img id="gitHub" src="/githubIcon.jpeg" alt = "gitHub" style={{width: "100%"}} ></img></ImageConv>
                <ImageConv id="wordLi" onClick={() => window.open("https://github.com/0GhOsTO/Final_Project", "_blank")}>Github</ImageConv>
            </ImageUl>

                <HCenter> Calculator </HCenter>
                <CalcStyle $neg={color}>
                    <InputStyle value = {firstNum}
                           onChange={(e) => setFirstNum(e.target.value)}/>
                    <Darrow>&darr;</Darrow>
                    <ButtonStyle>
                        <ButtonOne>
                            <button onClick = {() => handleOperation("add")}>+</button>
                            <button onClick = {() => handleOperation("subtract")}>-</button>
                            <button onClick = {() => handleOperation("divide")}>/</button>
                            <button onClick = {() => handleOperation("multiply")}>*</button>
                        </ButtonOne>

                        <ButtonTwo>
                            <button onClick = {() => handleOperation("power")}>POWER</button>
                            <button onClick = {() => {
                                setResult("ANS");
                                setFirstNum("");
                                setLastNum("");
                            }}>CLEAR
                            </button>
                        </ButtonTwo>
                    </ButtonStyle>


                    <InputStyle value = {lastNum}
                           onChange={(e) => setLastNum(e.target.value)}/>
                    <Darrow>&darr;</Darrow>
                    <ResultStyle>
                        <p color={"black"}>{result}</p>
                    </ResultStyle>

            </CalcStyle>
        </>
    );
}
