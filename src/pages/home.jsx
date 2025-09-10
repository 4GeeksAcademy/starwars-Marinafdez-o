import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeople = async () => {
      const res = await fetch('https://www.swapi.tech/api/people');
      const data = await res.json();
      setPeople(data.results.slice(0, 10));
    };
    fetchPeople();
  }, []);

  const imageMap = {
    'Luke Skywalker': 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png',
    'Darth Vader': 'https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg',
    'Leia Organa': 'https://upload.wikimedia.org/wikipedia/en/1/1b/Leia_Organa.png',
    'Obi-Wan Kenobi': 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
    'R2-D2': 'https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png',
    'C-3PO': 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>Personajes destacados</h2>
        <div className="card-grid">
          {people.map((person) => {
            const id = person.url.split('/').pop();
            const image = imageMap[person.name] || 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg';
            return (
              <div key={id} className="card">
                <img src={image} alt={person.name} className="character-img" />
                <h3>{person.name}</h3>
                <button onClick={() => navigate(`/people/${id}`)}>Ver detalles</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
