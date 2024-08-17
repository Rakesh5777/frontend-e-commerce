import './header.css';
import Search from '../Search/search';

function Header() {

const cart =(e)=>{
  console.log('cart');
}
  return (
    <div className="header">
      <div className=" text-4xl text-pink-500 col-4">I love you bby</div>
    </div>
  );
}
export default Header;