import type { Route } from "./+types/details"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import type { IProject } from './IProject';

const PORTFOLIO_API_URL = import.meta.env.VITE_PORTFOLIO_API_URL;

export async function loader({
    request,
    params
}: Route.ClientLoaderArgs):Promise<IProject> {
    const response = await fetch(`${PORTFOLIO_API_URL}/projects/${params.id}`);

    if (!response.ok) {
        throw new Response('Project not found', { status: 404 })
    }

    const project: IProject = await response.json();
    return project;
}

export function HydrateFallback() {
    return (
        <div>Loading...</div>
    );
}

const ProjectDetailsPage = ({ loaderData }:Route.ComponentProps) => {
    const project = loaderData;
    

    return ( 
        <>
            <Link
                to="/portfolio"
                className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition"
            >
                <FaArrowLeft className="fa mr-2" /> Back to Portfolio
            </Link>

            <div className="grid gap-8 md:grid-cols-2 items-start">
                <div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-400 mb-4">
                        {project.title}
                    </h1>
                    <p className="gray-300 text-sm mb-4">
                        { new Date(project.date).toLocaleDateString() } &mdash; { project.category }
                    </p>
                    <p className="text-gray-200 mb-6">
                        { project.description}
                    </p>
                    <a 
                        href={project.url}
                        target="_blank"
                        className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition">
                        View Live Site <FaArrowRight className="fa" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProjectDetailsPage;