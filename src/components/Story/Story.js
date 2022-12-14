import React from 'react'
import './Story.css'

const Story = (props) => {
  const {storyUrl, username} = props
  return (
    <div className='story'>
      <div className='story__wrapper'>
        <img src={storyUrl} alt='story avatar' className='story__image'/>
      </div>
      <p className='story__text'>{username}</p>
    </div>
  )
}

export default Story