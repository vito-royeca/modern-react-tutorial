import { Link } from "react-router";

const GridWrapper = ({ 
    title,
    path,
    icon,
    text1,
    text2,
    isIconOnLeft
}: {
    title: string;
    path: string;
    icon: string;
    text1: string;
    text2: string;
    isIconOnLeft: boolean;
}) => {
    return (
        <div className={`w3-row-padding ${isIconOnLeft ? 'w3-light-grey' : ''} w3-padding-64 w3-container`}>
            <div className="w3-content">
                {isIconOnLeft && (
                    <div className="w3-third w3-center">
                        <i className={`fa ${icon} w3-padding-64 w3-text-red w3-margin-right`}></i>
                    </div>
                )}
                <div className="w3-twothird">
                    <h1>
                        <Link 
                            to={path}
                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                            {title}
                        </Link>
                    </h1>
                    <h5 className="w3-padding-32">{text1}</h5>
                    <p className="w3-text-grey">{text2}</p>
                </div>

                {!isIconOnLeft && (
                    <div className="w3-third w3-center">
                        <i className={`fa ${icon} w3-padding-64 w3-text-red`}></i>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GridWrapper;