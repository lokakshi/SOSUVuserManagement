import React, { useState } from 'react';
import './SideMenu.css'
const SideMenu = ({ users }) => {
  const [searchFilter, setSearchFilter] = useState('');

  const filteredUsers = users.filter(user => user.name.includes(searchFilter));

  return (
    <div className="side-menu">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search users..."
          value={searchFilter}
          onChange={e => setSearchFilter(e.target.value)}
        />
      </div>
      <ul className="user-list">
        {filteredUsers.map(user => (
          <li key={user.id}>
            <img src={user.profileIconUrl} alt={user.name} />
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
