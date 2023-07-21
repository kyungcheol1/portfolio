import { useState } from "react";
import { styled } from "styled-components";
import Custom2 from "./modal";

const WrapST = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #ececec;
    margin: 30px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.3);
    }
`;

const ImgdivST = styled.img`
    padding: 3px;
    width: 260px;
    height: 150px;
    overflow: hidden;
    border-radius: 10px;
    border: none;
`;

const TextdivST = styled.div`
    padding: 3px;
    margin-top: 10px;
    width: 260px;
    height: 100px;

    & > div {
        width: 100%;
        margin-top: 3px;
    }
`;

export interface IProjectItem {
    imgurl: string;
    date: string;
    people: string;
    position: string;
    text: string;
}

export const ProjectItem: React.FC<IProjectItem> = (props) => {
    const [modal, setModal] = useState(false);
    const clickHander = () => {
        setModal(!modal);
    };
    return (
        <>
            <WrapST onClick={clickHander}>
                <Custom2 isOpen={modal} onClose={clickHander} width={340} height={500} left={17} content={<TextdivST />}></Custom2>
                <ImgdivST src={props.imgurl}></ImgdivST>
                <TextdivST>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>기간 : </div> <div>{props.date}</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>인원 : {props.people}</div> <div>직책 : {props.position}</div>
                    </div>
                    <div>내용 : {props.text}</div>
                </TextdivST>
            </WrapST>
        </>
    );
};

