import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup  max={3}>
      <Avatar sx={{width: 30, height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar sx={{width: 30, height:30}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar sx={{width: 30, height:30}} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </AvatarGroup>
  );
}