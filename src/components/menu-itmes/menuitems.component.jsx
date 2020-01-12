import React from 'react'
import'./menu.Styles.scss'
export const MenuItmes = ({ imageUrl,title,size}) => (
    // <div style={{
    //     backgroundImage: `url(${imageUrl})`
    // }} className={`${size} menu-item`} >
    <div className={`${size} menu-item`}>
    <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }}  />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>shop now</span>
        </div>
        </div>
);
