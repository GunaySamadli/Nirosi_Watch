import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CachedIcon from '@mui/icons-material/Cached';
import './index.scss'
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#fff',
    boxShadow: '7px 6px 40px #ccccdf29',
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };


    return (
        <div>
            < FontAwesomeIcon onClick={handleOpen} icon={faUser} />
            <Modal

                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={{ height: '600px' }} sx={style}>
                    <div className={isActive ? 'modal active ' : "modal "}>
                        <div className="modal-img">
                            <img src="https://cdn.shopify.com/s/files/1/0327/6426/4588/files/logoden.png?v=1581566328" alt="" />
                        </div>
                        <div className="modal-body">
                            <div className="modal-title">
                                <h2>Great to have you back!</h2>
                            </div>
                            <div className="modal-form">
                                <form action="">
                                    <input type="email" placeholder='Email adress' />
                                    <input type="password" placeholder='Password' />
                                    <Link to=''>Forgot your password?</Link>
                                    <button type="submit">Log In</button>
                                </form>
                                <div className="box-register">
                                    <span >Don’t have an account?</span>
                                    <Link to='' onClick={toggleClass}>
                                        Register now
                                        <ArrowForwardIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={isActive ? 'modal-register active' : "modal-register "}
                    >
                        <div className="modal-img">
                            <BorderColorIcon />
                        </div>
                        <div className="modal-body">
                            <div className="modal-form">
                                <form action="">
                                    <input type="email" placeholder='Email adress' />
                                    <input type="password" placeholder='Password' />
                                    <button type="submit">Register</button>
                                </form>
                                <div className="box-register">
                                    <Link to='/' onClick={toggleClass}>
                                        Back to login
                                        <ArrowForwardIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={isActive ? 'modal-forget ' : "modal-forget active"}
                    >
                        <div className="modal-img">
                            <CachedIcon />
                        </div>
                        <div className="modal-body">
                            <div className="modal-form">
                                <form action="">
                                    <input type="email" placeholder='Email adress' />
                                    <button type="submit">Submit</button>
                                </form>
                                <div className="box-register">
                                    <Link to='/' onClick={toggleClass}>
                                        Cancel
                                        <ArrowForwardIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Box>
            </Modal>
        </div>
    );
}