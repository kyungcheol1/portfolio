import { Project } from "../page/project";
import { Route, Routes } from "react-router-dom";
import { Main } from "../page/main";
import { About } from "../page/about";
import { Skills } from "../page/skills";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
        </Routes>
    );
};

