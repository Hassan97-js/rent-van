import { NavLink } from 'react-router-dom';

const HostVanNav = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#161616',
    borderBottom: '1px solid #161616'
  };

  const setIsActive = ({ isActive }) => (isActive ? activeStyle : {});

  return (
    <nav className='mb-3 mt-4'>
      <ul
        className='flex flex-wrap gap-4 px-0 fs-5 fw-semibold'
        role='list'
        style={{
          color: '#4D4D4D'
        }}>
        <li>
          <NavLink style={setIsActive} to='.' end>
            Details
          </NavLink>
        </li>
        <li>
          <NavLink style={setIsActive} to='pricing'>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink style={setIsActive} to='photos'>
            Photos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HostVanNav;
