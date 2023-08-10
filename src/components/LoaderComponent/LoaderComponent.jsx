import './LoaderComponent.css';
import { DotSpinner } from '@uiball/loaders';

function LoaderComponent() {
    return (
        <div className='loader'>
            <DotSpinner size={40} speed={0.9} color="green"></DotSpinner>
            <div className='loader'>
                <h2>Cargando . . .</h2>
            </div>
        </div>
    );
}

export default LoaderComponent;