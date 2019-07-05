import React, {Component} from 'react'
import '../../../scss/hero.scss'
import '../../../css/styles.css'

class Hero extends React.Component {
    constructor() {
        super()
        this.state = {
            data: 
            [
                {
                    "id": 1,
                    "name": "foo",
                    "age": 20
                },
                {
                    "id": 2,
                    "name": "bar",
                    "age": 30
                },
                {
                    "id": 3,
                    "name": "bazz",
                    "age": 40
                }
            ]
        }
    }
    render() {
        return (
            <div className="test">
                <h1>Hero Component</h1>
            </div>
        );
    }
}

export default Hero