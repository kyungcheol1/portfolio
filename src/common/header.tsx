import { Navbar } from "../component/navbar";
import { styled } from "styled-components";
import { HeaderLogo } from "../component/logo";

const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Header: React.FC = () => {
    return (
        <HeaderWrap>
            <HeaderLogo></HeaderLogo>
            <Navbar></Navbar>
        </HeaderWrap>
    );
};

