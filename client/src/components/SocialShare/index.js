import * as React from 'react';
import PropTypes from 'prop-types';
import {
   FacebookShareButton,
   FacebookIcon,
   TwitterShareButton,
   TwitterIcon,

} from 'react-share';
import Stack from '@mui/material/Stack';
import { SOCIAL_BUTTON_SIZE } from '../../const';



const SocialShare = ({ url, title }) => {
   return (
      <Stack direction="row" spacing={1}>
         <FacebookShareButton url={url}>
            <FacebookIcon round size={SOCIAL_BUTTON_SIZE} />
         </FacebookShareButton>

         <TwitterShareButton url={url} title={title}>
            <TwitterIcon round size={SOCIAL_BUTTON_SIZE} />
         </TwitterShareButton>
      </Stack>
   );

};

SocialShare.propTypes = {
   url: PropTypes.string,
   title: PropTypes.string

}


export default SocialShare;