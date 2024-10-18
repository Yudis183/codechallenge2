import { useEffect, useState } from 'react';

export default function Teams() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://randomuser.me/api/?results=4');
      const data = await response.json();
      setTeam(data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Our Team</h1>
      <div className="team">
        {team.map((member) => (
          <div key={member.login.uuid} className="team-member">
            <img src={member.picture.large} alt={member.name.first} />
            <h3>{`${member.name.first} ${member.name.last}`}</h3>
            <p>{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
