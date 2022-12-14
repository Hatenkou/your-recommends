import * as React from 'react';
import PropTypes from 'prop-types';
import {
   Box,
   Typography,
   Modal,
   Paper,
   InputBase,
   Divider,
   Alert,
   IconButton,
} from '@mui/material/';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CONFIRM_TIMEOUT } from '../../const';
import { FormattedMessage } from "react-intl";
import SocialShare from '../SocialShare';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '1px solid #696d70',
   borderRadius: '10px',
   boxShadow: 20,
   p: 4,
};

const ConfirmModal = ({ open, url, title, onClose }) => {

   const [openAlert, setOpenAlert] = React.useState(false);

   React.useEffect(() => {
      let timer;
      if (openAlert) {
         timer = setTimeout(() => { setOpenAlert(false) }, CONFIRM_TIMEOUT)
      }
      return () => clearTimeout(timer)
   }, [openAlert])

   return (
      <Modal
         open={open}
         onClose={onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <Typography id="momoviedal-modal-title" variant="h6" component="h2">
               {title}
            </Typography>
            <Paper
               component="form"
               sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%'
               }}
            >
               <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="List URL"
                  inputProps={{ 'aria-label': 'List URL' }}
                  value={url}
               />
               <IconButton
                  href={url}
                  target="_blank"
                  sx={{ p: '10px' }}
                  aria-label="preview">
                  <RemoveRedEyeIcon />
               </IconButton>
               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
               <CopyToClipboard
                  text={url}
                  onCopy={() => setOpenAlert(true)}>
                  <IconButton color="primary" sx={{ p: '10px' }} aria-label="copy to link">
                     <ContentCopyIcon />
                  </IconButton>
               </CopyToClipboard>
            </Paper>

            <Typography id="modal-modal-title"
               variant="h6"
               component="h3"
            >
               <FormattedMessage id="share_with_friends" />
            </Typography>
            <SocialShare
               url={url}
               title={title}
            />
            {openAlert ? (
               <Alert
                  action={
                     <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                           setOpenAlert(false);
                        }}
                     >
                        <CloseIcon fontSize="inherit" />
                     </IconButton>
                  }
                  sx={{ mb: 1 }}
               >
                  <FormattedMessage id="copied" />
               </Alert>
            ) : null}
         </Box>
      </Modal>
   );
};

ConfirmModal.propTypes = {
   open: PropTypes.bool,
   title: PropTypes.string,
   url: PropTypes.string,
   onClose: PropTypes.func
};

export default ConfirmModal;