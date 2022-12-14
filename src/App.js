import './App.css';
// import { useState, useEffect } from 'react';
import Post from './components/Post/Post';
// import { db } from './firebase';
import { TextField } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Story from './components/Story/Story';

function App() {
  const posts = [
    {
      id: 'img1',
      username: 'Bugatti',
      caption: 'This is a dummy image for the post.',
      imageUrl: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3bbeac5006e9b894545a3519cc23a735.jpg'
    },
    {
      id: 'img2',
      username: 'Bugatti',
      caption: 'This is a dummy image for the post.',
      imageUrl: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3bbeac5006e9b894545a3519cc23a735.jpg'
    },{
      id: 'img3',
      username: 'Bugatti',
      caption: 'This is a dummy image for the post.',
      imageUrl: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3bbeac5006e9b894545a3519cc23a735.jpg'
    },{
      id: 'img4',
      username: 'Bugatti',
      caption: 'This is a dummy image for the post.',
      imageUrl: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3bbeac5006e9b894545a3519cc23a735.jpg'
    },{
      id: 'img5',
      username: 'Bugatti',
      caption: 'This is a dummy image for the post.',
      imageUrl: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3bbeac5006e9b894545a3519cc23a735.jpg'
    }
  ]

  const stories = [
    {
      id: "story1",
      storyUrl: "https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
    },{
      id: "story2",
      storyUrl: "https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
    },{
      id: "story3",
      storyUrl: "https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
    },{
      id: "story4",
      storyUrl: "https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
    },{
      id: "story5",
      storyUrl: "https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
    },{
      id: "story6",
      storyUrl: "https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
    },
  ]

  // useEffect(()=>{
  //   db.collection('posts').onSnapshot(snapshot=>setPosts(snapshot.docs.map(doc=>({
  //     id: doc.id,
  //     post: doc.data()}))))
  // }, [])

  return (
    <div className="app">
      <div className='app__header'>
        <div className='app__header_content'>
          <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='instagram logo' className='app__header__image'/>
          <TextField id="outlined-basic" label="Search" size='small' variant="outlined" />
          <div className='app__header__icons'>
            <HomeIcon className='app__header__icon'/>
            <AddPhotoAlternateIcon className='app__header__icon'/>
            <MarkChatUnreadIcon className='app__header__icon'/>
            <ExploreIcon className='app__header__icon'/>
            <FavoriteBorderIcon className='app__header__icon'/>
          </div>
        </div>
      </div>
      {stories.map(story=><Story key={story.id} storyUrl={story.storyUrl}/>)}
      {posts.map(post=><Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} key={post.id}/>)}
    </div>
  );
}



export default App;
