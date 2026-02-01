import pkg from 'react-spinners';
const { BarLoader } = pkg;

// import { BarLoader } from "react-spinners";

const cssOverride = {
    display: 'block',
    margin: '0 auto 50px auto',
};

const Spinner = ({
    color='blue',
    width=150
}: {
    color?: string;
    width?: number;
}) => {
    return ( 
        <div>
            <BarLoader 
                color={color}
                width={width}
                cssOverride={cssOverride}
                aria-label='Loading...'
            />
        </div>
    );
}
 
export default Spinner;