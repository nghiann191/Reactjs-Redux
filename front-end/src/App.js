import React from 'react';
import axios from 'axios';

axios.get('http://localhost:8080/device_summary')
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        console.log(error);
    })
export default class App extends React.Component {

    render() {
        return ("he");
    }
}