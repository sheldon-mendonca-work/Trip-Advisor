import ProductCard from '../ProductCard/ProductCard';
import './ProductListCard.css';

export default function ProductListCard (props){
    const { data, preUrl } = props;

    return <section className="productlist-section">
        <div className="productlist-list">
            { data.length === 0 && <h3>No items on data...</h3> }
            {
                data.length > 0 && data.map((item) => {
                    return <ProductCard key={item.id} name={item.name} image={item.image} url={`${preUrl}${item.id}`} />
                })
            }
        </div>
    </section>
}