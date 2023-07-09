import { useNavigate } from 'react-router-dom';
import './ProductCard.css'
import { PinIcon } from '../../Icons';

export default function ProductCard(props){
    const { name, image, url } = props;
    const navigate = useNavigate();

    return <div className="productcard-card" onClick={()=>navigate(url)}>
        <div className="productcard-img">
            <img src={image} alt={name} className="productcard-card-img"/>
        </div>
        <div className="productcard-content">
            <PinIcon className="productcard-svg"/>
            <h4 className="productcard-card-name">{name}</h4>
        </div>
    </div>
}