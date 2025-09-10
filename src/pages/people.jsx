import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const People = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeople = async () => {
      const res = await fetch('https://www.swapi.tech/api/people');
      const data = await res.json();
      setPeople(data.results);
    };
    fetchPeople();
  }, []);

  return (
    <>
      <Navbar />
      <div className="people-container">
        <h2>Todos los personajes</h2>
        <ul className="people-list">
          {people.map((person) => {
            const id = person.url.split('/').pop();
            return (
              <li key={id}>
                {person.name}
                <button onClick={() => navigate(`/people/${id}`)}>Ver detalles</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default People;
