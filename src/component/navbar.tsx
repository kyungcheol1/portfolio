import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const LiST = styled.li`
    width: 120px;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

const NavUiST = styled.ul`
    width: 800px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const List = [
    { Text: "Main", link: "" },
    { Text: "About", link: "about" },
    { Text: "Skills", link: "skills" },
    { Text: "Project", link: "project" },
];

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const list = List.map((v) => {
        return (
            <LiST
                onClick={() => {
                    navigate(v.link);
                }}
            >
                {v.Text}
            </LiST>
        );
    });

    return (
        <>
            <NavUiST>{list}</NavUiST>
        </>
    );
};

