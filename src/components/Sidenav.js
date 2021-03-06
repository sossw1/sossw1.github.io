import React from 'react';

function Sidenav() {
  return (
    <ul id='slide-out' className='sidenav sidenav-fixed blue-grey darken-4'>
      <li>
        <a href='#home' className='white-text sidenav-close'><i className='material-icons white-text'>home</i>Home</a>
      </li>
      <li>
        <a href='#profile' className='white-text sidenav-close'><i className='material-icons white-text'>assignment_ind</i>Profile</a>
      </li>
      <li>
        <a href='#projects' className='white-text sidenav-close'><i className='material-icons white-text'>wb_incandescent</i>Projects</a>
      </li>
      <li>
        <a href='#technology' className='white-text sidenav-close'><i className='material-icons white-text'>personal_video</i>Technology</a>
      </li>
      <li>
        <a href='#education' className='white-text sidenav-close'><i className='material-icons white-text'>school</i>Education</a>
      </li>
    </ul>
  );
}

export default Sidenav;