import React ,{ Component } from 'react';

class NavMenu extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        };
    }
    render() {
        return (
            <div>
                <ul>
                    <li><a href="#">First</a></li>
                    <li><a href="#">Second</a></li>
                    <li><a href="#">Third</a></li>
                </ul>
            </div>
        )
    }
}


export default NavMenu;