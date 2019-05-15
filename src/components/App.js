import React from 'react';
import PhotoAlbum from './photos/PhotoAlbum';
import gif0 from '../assets/8APA.gif';
import gif1 from '../assets/giphy-1.gif';
import gif2 from '../assets/giphy-2.gif';
import gif3 from '../assets/giphy.gif';
import Header from './header/Header';
import Footer from './header/Footer';

export default function App() {
  const photos = [
    gif0,
    gif1,
    gif2,
    gif3
  ];

  return (
    <>
      <Header title={'last airbender memes'} />
      <PhotoAlbum photos={photos} />
      <Footer />
    </>
  );
}

