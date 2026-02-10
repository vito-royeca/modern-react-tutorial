import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { Route } from "./+types/index"
import type { IProject } from './IProject';
import Pagination from "./components/Pagination";
import ProjectCard from "./components/ProjectCard";
import project from "~/routes/layouts/project";

export async function loader({
    request
}: Route.LoaderArgs):Promise<{projects: IProject[]}> {
    const response = await fetch('http://localhost:8000/projects');
    const data = await response.json();

    return { projects: data };
}

const PortfolioPage = ({ loaderData }: Route.ComponentProps) => {
    const projectsPerPage = 10;
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const { projects } = loaderData as {projects: IProject[]};
    
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    const filteredProjects = selectedCategory === 
        'All' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

    return ( 
        <>
            <h2 className='text-2xl text-white font-bold mb-8'>Portfolio</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(category => (
                        <button 
                            key={category}
                            className={`px-3 py-1 rounded text-sm cursor-pointer ${
                                selectedCategory === category 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-700 text-gray-200'
                            }`}
                            onClick={() => {
                                setSelectedCategory(category)
                                setCurrentPage(1);
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>  

            <AnimatePresence
                mode='wait'>
                <motion.div
                    layout
                    className="grid gap-6 sm:grid-cols-2">
                    {currentProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                        >
                            <ProjectCard 
                                project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
            <Pagination 
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
}

export default PortfolioPage;