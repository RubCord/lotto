import React from 'react';
import { render } from 'react-dom'
import axios from 'axios';
import jsonData from '../json/drawings.json'
import App from './app'
import '../css/styles.css'

class Server extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null 
    };
  }

//----------------------------------------------------------------------------

  getLottoData = (lotto) => {
     if (this.state.data) { 
       console.log('returned: ' + this.state.data[lotto.name][lotto.time]);
       return this.state.data[lotto.name][lotto.time];    
     } else {
       console.log('returned: ' + null);
       return null
     }
  }

//----------------------------------------------------------------------------

  componentDidMount() {
    //Uncomment these lines to load the json data from a remote server
    // axios.get(`/json`)
    //   .then(res => {
    //     this.setState({ data: res.data })
    // })

    //Loading the json data from a local file
    this.setState({ data: JSON.parse(JSON.stringify(jsonData))})
  }

//----------------------------------------------------------------------------

  render() {
      return (        
        <div>
          <App getLottoData = {this.getLottoData} /> 
        </div>
      )
  }

}

//----------------------------------------------------------------------------

render (
  <Server />, document.getElementById('app')
);

//----------------------------------------------------------------------------