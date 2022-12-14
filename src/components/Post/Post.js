import React from 'react'
import { Avatar } from '@mui/material'
import './Post.css'

const Post = (props) => {
  const {username, caption, imageUrl} = props
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar alt={username} src="/static/images/avatar/1.jpg" className='post__avatar'/>
        <h3>{username}</h3>
      </div>
      <img src={imageUrl} alt='post' className='post__image'/>
      <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
    </div>
  )
}

export default Post