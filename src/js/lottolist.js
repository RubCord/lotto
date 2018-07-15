import React from 'react';
import { render } from 'react-dom'
import Lotto1 from './lotto1'
import Lotto2 from './lotto2'

class LottoList extends React.Component {
  constructor(props) {
    super(props);

  }

//----------------------------------------------------------------------------

  componentDidMount() {

  }

//----------------------------------------------------------------------------

  render() {
    const lottoComponents = this.props.list.map((lotto, index) => {
        
        switch (this.props.type) {
          case 'lotto1':
              return <Lotto1 key={index} list = {lotto} data = {this.props.getLottoData(lotto)} />
              break;
          case 'lotto2':
              return <Lotto2 key={index} list = {lotto} data = {this.props.getLottoData(lotto)} />
              break;           
        }
        
    });      

    return (
      <div className="list1">
        {lottoComponents}
      </div>
    )
  }

//----------------------------------------------------------------------------

}

export default LottoList
