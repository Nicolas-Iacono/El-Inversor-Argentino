import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../../context/GlobalAuth';
import { useState, useEffect } from 'react';

function StringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

function stringAvatar(name) {
  
  return {
    sx: {
      bgcolor: StringToColor(name),
      width: 150,
      height: 150,
      fontSize:70

    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
  };
}

export default function BackgroundLetterAvatars() {
  const { user } = useAuth();
  const [nameUser, setNameUser] = useState('');

  useEffect(() => {
    if (user && user.username) {
      setNameUser(user.username);
    }
  }, [user.username]);

  return (
    <Avatar  {...stringAvatar(user.username)} />
  );
}
