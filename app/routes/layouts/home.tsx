import { Outlet } from "react-router"
import Hero from "../components/Hero";

const HomeLayout = () => {
    return ( 
        <>
            <Hero 
                title="Modern React From the Beginning"
                subtitle="Class Projects"
            />
            <section>
                <Outlet />
            </section>
        </>
    );
}
 
export default HomeLayout;