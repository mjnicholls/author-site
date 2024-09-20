import React from 'react';
import { styled } from '@mui/material/styles'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const f = "Cormorant Infant"

const MainTextHeader = styled(DialogTitle)({
  fontFamily: f,
  fontSize: "28px",
  fontWeight: 800
})

const MainText = styled(DialogContent)({
  fontFamily: f,
  fontSize: "22px",
})

const PinModal = ({ open, handleClose, title, content }) => {
  return (
    <Dialog 
    open={open} 
    onClose={handleClose}
    maxWidth="md"
    fullWidth={true}
    sx={{ '& .MuiDialog-paper': { width: '1000px', maxWidth: 'none' } }}
  >
        <MainTextHeader>
        {title}
        </MainTextHeader>
      <MainText>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </MainText>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PinModal;
