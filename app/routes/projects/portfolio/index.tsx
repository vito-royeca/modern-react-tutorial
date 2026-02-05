import { useState } from "react";
import type { Route } from "./+types/index"
import type { IProject } from './IProject';

import Pagination from "./components/Pagination";
import ProjectCard from "./components/ProjectCard";

export async function loader({
    request
}: Route.LoaderArgs):Promise<{projects: IProject[]}> {
    const response = await fetch('http://localhost:8000/projects');
    const data = await response.json();

    return { projects: data };
}

const PortfolioPage = ({ loaderData }: Route.ComponentProps) => {
    const projectsPerPage = 2;
    const { projects } = loaderData as {projects: IProject[]};
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirst, indexOfLast);

    return ( 
        <>
            <h2 className='text-2xl text-white font-bold mb-8'>Portfolio</h2>

            <div className="grid gap-6 sm:grid-cols-2">
                {currentProjects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        project={project} />
                ))}
            </div>
            <Pagination 
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
}

export default PortfolioPage;