import ContentWrapper from '../../components/ContentWrapper';
import Rating from './components/Rating';
import './style.css';

const RatingUI = () => {
    return (
        <ContentWrapper>
            <div className='max-w-lg mx-auto mt-10 p-6 py-4'>
            <Rating
                heading="How do you like React?"
                color='blue'
            />
            </div>
        </ContentWrapper>
    );
};

export default RatingUI;
