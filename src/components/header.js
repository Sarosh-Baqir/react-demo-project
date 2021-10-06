import { Component } from 'react';

import './header.css';

class Header extends Component{
    render() {
        return(
            <div>
                <span className='header'>Total Movies  <span id="moviescount">{this.props.data.length}</span></span>
            </div>
        );
    }
}


export default Header;