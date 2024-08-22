import React, { useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useAuth } from '../../../context/GlobalAuth';
import { useState } from 'react';
import BackgroundLetterAvatars from './StringToColor';

const AvatarLogo = () => {
  const { user } = useAuth();
  const [nameUser, setNameUser] = useState('')

  console.log(user.username)
  useEffect(() =>{
  setNameUser(user.username)
  },[nameUser])

  BackgroundLetterAvatars(nameUser)

  return (
    <div>{nameUser}</div>
  )
}

export default AvatarLogo