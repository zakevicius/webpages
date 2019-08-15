import React from 'react';
import Button from '../elements/Button';
import image from '../../img/img-3.JPG'

const PostItem = () => {
  return (
    <div className="post flex wrap">
      <img src={image} alt="woman with donkey" className="post_image" />
      <div className="post_content">
        <h2>POST TITLE</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nemo aut sed facilis maxime quo odit nulla voluptatum quas voluptas! Quaerat excepturi, natus maiores fuga laudantium repudiandae dicta asperiores optio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque qui laboriosam consectetur ipsam, magni recusandae nisi vero? Libero, beatae perferendis esse aliquam vel optio minima molestiae, reiciendis eius velit odio!</p>
      </div>
      <div className="post_buttons">
        <Button text='Daugiau...' type='secondary' />
      </div>
    </div>
  )
}

export default PostItem
