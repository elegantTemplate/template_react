import React, {Component} from 'react'
import { test } from '../../components/utils/api'

export default class Home extends Component {
    componentWillMount(){
        test().then((res) => {
            console.log(res)
        });
    }
    
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}