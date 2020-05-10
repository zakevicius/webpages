import React, { useState, useContext } from "react";
import Button from "../../elements/Button.jsx";
import { PostContext } from "../../../contexts/PostContext.jsx";

const PostForm = () => {
  const { dispatch } = useContext(PostContext);
  const [formData, setFormData] = useState({
    title: "",
    intro: "",
    content: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch({ type: "ADD_POST", formData });
  };

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { title, intro, content } = formData;

  return (
    <div className='post-form'>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <label htmlFor='title'>Intro</label>
        <input
          type='text'
          name='intro'
          value={intro}
          onChange={onInputChange}
        />
        <label htmlFor='title'>Content</label>
        <input
          type='text'
          name='content'
          value={content}
          onChange={onInputChange}
        />
        <Button type='success' text='Submit' />
      </form>
    </div>
  );
};

export default PostForm;
