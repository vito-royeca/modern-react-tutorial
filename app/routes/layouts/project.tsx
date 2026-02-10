import type { Route } from "./+types/project";
import { Outlet } from "react-router"

export function meta({}: Route.MetaArgs) {
    return [
        { 
            title: "Portfolio - Modern React From the Beginning"
        }, 
        { 
            name: "description",
            content: "Portfolio projects"
      },
  ];
}

const ProjectLayout = () => {
    return ( 
        <section>
            <div className="flex p-20 m-auto justify-center items-center">
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </section>
    );
}
 
export default ProjectLayout;