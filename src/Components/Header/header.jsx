import './header.css';
import Home from '../Home/home'

function Header() {

const cart =(e)=>{
  console.log('cart');
}
  return (
    <div className="header">
      <Home/>
    </div>
  );
}
export default Header;