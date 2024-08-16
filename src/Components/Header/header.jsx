import './header.css';
import Search from '../Search/search';

function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-2">
          <h1>My E-Commerce</h1>
        </div>
        <div className="col-10">
          <Search />
        </div>
      </div>
    </div>
  );
}
export default Header;