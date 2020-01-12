import React from 'react'
import './homepage.Styles.scss';

export const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item' >
                <div className='content'>
                    <h1 className='title'>Hats</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
            <div className='menu-item' >
                <div className='content'>
                    <h1 className='title'>jackets</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
            <div className='menu-item' >
                <div className='content'>
                    <h1 className='title'>gadgets</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
            <div className='menu-item' >
                <div className='content'>
                    <h1 className='title'>mens</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
            <div className='menu-item' >
                <div className='content'>
                    <h1 className='title'>womens</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
        </div>
    </div>
);