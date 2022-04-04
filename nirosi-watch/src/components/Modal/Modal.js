import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './index.scss'

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <div className="modal" style={{ display: 'block' }}>
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
                                    <a href=" ">Forgot your password?</a>
                                    <button type="submit">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}