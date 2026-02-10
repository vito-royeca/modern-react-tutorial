import type { Route } from "./+types/index";
import { Link } from 'react-router';
import { FaFilePdf } from 'react-icons/fa';

export function meta({}: Route.MetaArgs) {
    return [
        { 
            title: "About - Modern React From the Beginning"
        }, 
        { 
            name: "description",
            content: "Learning React from the ground up along with modern environments such as React Router v7, TanStack, MERN, etc."
      },
  ];
}

const AboutPage = () => {
    return (
        <>
            <h1>About</h1>
            <div className="w3-content">
                <p className="text-gray-500 p-2">
                    These are the completed class projects for the Udemy online course:&nbsp;
                    <Link
                        to='https://www.udemy.com/course/modern-react-from-the-beginning/'
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        target='_blank'
                    >
                        Modern React From the Beginning
                    </Link>
                    .
                </p>
                <p className="text-gray-500 p-2">
                    View the certificate obtained from completing this course:
                </p>
                <p className="text-gray-500 p-2">
                    <Link 
                        to='/UC-e61ed28d-2af8-46de-ba76-c04745109b09.pdf'
                        target='_blank'>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            <FaFilePdf className='fa mr-2' /> Udemy certificate
                        </button>
                    </Link>
                </p>
            </div>
        </>
     );
}
 
export default AboutPage;