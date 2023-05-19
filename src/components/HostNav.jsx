import { NavLink } from 'react-router-dom';

const HostNav = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#161616',
    borderBottom: '1px solid #161616'
  };

  const setIsActive = ({ isActive }) => (isActive ? activeStyle : {});

  return (
    <nav className='mb-16'>
      <ul className='flex gap-4 text-lg px-0' role='list'>
        <li>
          <NavLink className='clr-gray' style={setIsActive} to='.' end>
            Host
          </NavLink>
        </li>
        <li>
          <NavLink className='clr-gray' style={setIsActive} to='income'>
            Income
          </NavLink>
        </li>
        <li>
          <NavLink className='clr-gray' style={setIsActive} to='vans'>
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink className='clr-gray' style={setIsActive} to='reviews'>
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HostNav;
