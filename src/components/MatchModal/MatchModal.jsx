import React from "react";
import { useState } from "react";

import { Typography, Box, Modal } from "@mui/material";
import { Email, Send, Cancel } from "@mui/icons-material"
import { Button } from "@mui/material"

let storyOwner = 'Sarah Gomiller'
let targetUserStory = 'US12345'
let primaryUserStory = 'US65786'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}

function MatchModal() {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Button variant="contained" color="success" onClick={handleOpen} endIcon={<Email/>}>Contact</Button>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Send the following message to the owner of this story:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        'Hi {storyOwner}! Your user story: <a href="url">{targetUserStory}</a> has potential overlap with work defined in my team's story: <a href="url">{primaryUserStory}</a> Would you be interested in collaborating together?'
                        <Button variant="contained" color="success" onClick={handleOpen} endIcon={<Send/>}>Send</Button>
                        <Button variant="contained" color="error" onClick={handleClose} endIcon={<Cancel/>}>Cancel</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default MatchModal