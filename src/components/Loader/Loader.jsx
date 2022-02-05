import { ThreeDots } from  'react-loader-spinner'
import s from './Loader.module.css';

const Loader = () => { 
    return (
        <div className={s.loader}>
            <ThreeDots heigth="80"
                width="80"
                color='#3f51b5'
                secondaryColor="lightGrey" />
        </div>
        )
}

export default Loader;
