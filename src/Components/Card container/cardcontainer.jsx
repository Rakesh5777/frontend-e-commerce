import './cardcontainer.css';
import Items from '../Items/items';
function Cardcontainer({data}) {
    return (
        <div className="cardcontainer">
            {data.map(product => (
                <Items key={product.id} product={product} />
            ))}
        </div>
    );
}
export default Cardcontainer;