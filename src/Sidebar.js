import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
        <span className='sidebar_hash'>#</span>
        <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg" alt="" />
            <Avatar className='sidebar_avatar'/>
            <h2>Amber Xu</h2>
            <h4>xurongnan307@gmail.com</h4>
        </div>

        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2,543</p>
            </div>
            <div className='sidebar_stat'>
                <p>View on past</p>
                <p className='sidebar_statNumber'>2,448</p>
            </div>
        </div>

        <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>
    </div> 
  ) 
}

export default Sidebar
