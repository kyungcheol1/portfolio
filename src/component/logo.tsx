import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ImgdivST = styled.img`
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 25px;
    border: none;
    margin-right: 10px;
`;

const LogoWrap = styled.div`
    width: 250px;
    height: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const HeaderLogo: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <LogoWrap
                onClick={() => {
                    navigate("/");
                }}
            >
                <ImgdivST src="https://i.ibb.co/42sw8sm/Kakao-Talk-20221123-090131446.jpg" />
                <h2>Gyung Cheol</h2>
            </LogoWrap>
        </>
    );
};

