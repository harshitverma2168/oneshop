import React from 'react'
//withRouter is a higher order component
import { withRouter } from 'react-router-dom';
import'./menu.Styles.scss'
const MenuItmes = ({ imageUrl, title, size, history, linkUrl, match }) => {
    // <div style={{
    //     backgroundImage: `url(${imageUrl})`
    // }} className={`${size} menu-item`} >
    return (<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>shop now</span>
        </div>
    </div>
    );
}

export default withRouter(MenuItmes);