import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          alt="Star Wars Logo"
          className="logo-img"
        />
        <h1 className="logo-text">Star Wars Databank</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/films">Películas</Link></li>
        <li><Link to="/people">Personajes</Link></li>
        <li><Link to="/planets">Planetas</Link></li>
        <li><Link to="/species">Especies</Link></li>
        <li><Link to="/starships">Naves</Link></li>
        <li><Link to="/vehicles">Vehículos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
