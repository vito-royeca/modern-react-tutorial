import ContentWrapper from '../../components/ContentWrapper';
import Rating from './components/Rating';
import './style.css';

const RatingUI = () => {
    return (
        <ContentWrapper content={
            <Rating
                heading="How do you like React?"
                color='blue'
            />
        } />
    );
};

export default RatingUI;
