import React, { Component} from 'react'
import './directory.Styles.scss'
import { MenuItmes } from '../menu-itmes/menuitems.component'


export default class Directory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sections: [{
                id: 1,
                url: 'https://i.ibb.co/px2tCc3/jackets.png',
                title:'JACKETS'
            },
                {
                    id: 2,
                    url: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    title: 'SHOES'
                },
            {
                    id: 3,
                    url: 'https://i.ibb.co/cvpntL1/hats.png',
                    title: 'HATS'
                },
            {
                    id: 4,
                    url: 'https://i.ibb.co/GCCdy8t/women.png',
                    title: 'WOMEN',
                    size:'large'
                },
            {
                    id: 5,
                    url: `https://i.ibb.co/R70vBrQ/men.png`,
                    title: 'MEN',
                    size:'large'
                    
                }
            ]
        }
    }
    
    render() {
        return (
            <div className='directory-menu'>
                
                {
                    this.state.sections.map(({ title, url, id, size }) => (<MenuItmes key={id} title={title} imageUrl={url} size={size}/>))
                }
            </div>
        )
    }
}

