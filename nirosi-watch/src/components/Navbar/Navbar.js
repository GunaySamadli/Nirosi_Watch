import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Modal from '../Modal/Modal.js'

const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Featured</Link>
          </li>
          <li>
            <Link to="/contact">Pages</Link>
          </li>
          <li>
            <Link to="/contact">Element</Link>
          </li>
        </ul>
      </List>
    </Box>
  );

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Featured</Link>
          </li>
          <li>
            <Link to="/contact">Pages</Link>
          </li>
          <li>
            <Link to="/contact">Element</Link>
          </li>
        </ul>
        <div className="nav-home">
          <Link to="/">
            <img src="https://cdn.shopify.com/s/files/1/0327/6426/4588/files/logoden.png?v=1581566328" alt="nirosi" />
          </Link>
        </div>
        <div className="nav-icons">
          <div className="nav-icon">
            <Link to="/">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </div>
          <div className="nav-icon">
            <Link to="/">
              
              <Modal/>
            </Link>
          </div>
          <div className="nav-icon">
            <Link to="/">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </div>
      </nav>
      <div className="responsive-nav">
        <div className="responsive-nav-items">
          <div>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{<FontAwesomeIcon style={{ fontSize: '30px', color: 'black' }} icon={faBars} />}</Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <div className="nav-home">
            <Link to="/">
              <img src="https://cdn.shopify.com/s/files/1/0327/6426/4588/files/logoden.png?v=1581566328" alt="nirosi" />
            </Link>
          </div>
          <div className="nav-icons">
            <div className="nav-icon">
              <Link to="/">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </div>
            <div className="nav-icon">
              <Link to="/">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
            <div className="nav-icon">
              <Link to="/">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;


