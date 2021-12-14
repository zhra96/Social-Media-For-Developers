import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';


const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState(0);
  const [experience, setExperience] = useState(0);


  return (
<section>
<div className="post-form bg-white p-1 my-1">
        <div className="bg-primary p">
          <h3>Post a Job</h3>
        </div>
        <form className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text,title,skills,education,description,salary,experience });
          setText('');
          setTitle('');
          setSkills('');
          setEducation('');
          setDescription('');
          setSalary(0);
          setExperience(0);
        }}>
          <div className="p-1 my-1 post-form">
            <label htmlFor="title">Job title</label>
          <input type="text"  name="title" id="title" required/>
        </div>
          <div className="p-1 my-1 post-form">
            <label htmlFor="skills">Skills required:</label>
              <input type="text" id="skills" name="skills"/>
        </div>
        <div className="p-1 my-1 post-form">
          <label htmlFor="education">Choose qualification level:</label>
        <select name="edu" id="education">
            <option value="1">matric/O level</option>
            <option value="2">inter/A level</option>
            <option value="3">bachelor's</option>
            <option value="4">master's</option>
            <option value="">mphil</option>
            <option value="">phD</option>
        </select>
      </div>
      <div className="p-1 my-1 post-form">
        <label htmlFor="job-description"> Job Description:</label>
          <textarea
            name="description"
            id="job-description"
            cols="30"
            rows="5"
            required/>
        </div> 
      <div className="p-1 my-1 post-form">
        <label htmlFor="experience">Experience required(in number of years):</label>
        <input type="number"id="experience" name="experience" />
      </div>
      <div className="p-1 my-1 post-form">
        <label htmlFor="salary">Salary (in PKR):</label>
        <input type="number" id="salary" name="salary" required />
      </div>
      <div className="p-1 my-1 post-form">
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </div>
        </form>
        </div>
    <button type="button" className="btn btn-danger">
      <i className="fas fa-times"></i>
    </button>
</section>
    
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
