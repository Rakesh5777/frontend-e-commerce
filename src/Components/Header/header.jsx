import './header.css';
import Search from '../Search/search';

function Header() {

const cart =(e)=>{
  console.log('cart');
}
  return (
    <div className="header">
     <div className="col-4">TradeWave</div>
    </div>
  );
}
export default Header;