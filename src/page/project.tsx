import { ProjectItem } from "../component/projectitem";
import { projectData } from "../datas/projectdata";
import { styled } from "styled-components";

const ProjectWrapST = styled.div`
    width: 800px;
    height: min-content;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const Project: React.FC = () => {
    const data = projectData.map((v, i) => {
        return <ProjectItem key={i} imgurl={v.imgurl} date={v.date} people={v.people} position={v.position} text={v.text}></ProjectItem>;
    });
    return (
        <>
            <ProjectWrapST>{data}</ProjectWrapST>
        </>
    );
};

