import React from 'react';
import PieChart from './components/PieChart/PieChart';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setData} from './actions/index';

class App extends React.Component {
    componentDidMount(){
        this.props.setData();
    }
        render() {
            
            return ( <PieChart> </PieChart>);
            }
        }
function mapDispatchToProps(dispatch){
    return bindActionCreators({setData},dispatch);
}
export default connect(null,mapDispatchToProps)(App);