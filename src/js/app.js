import React from 'react';
import { render } from 'react-dom'
import lists from '../json/lists.json'
import LottoList from './lottolist'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list1: JSON.parse(JSON.stringify(lists)).list1,
      list2: JSON.parse(JSON.stringify(lists)).list2
    };
  }

//----------------------------------------------------------------------------

  componentDidMount() {

  }

//----------------------------------------------------------------------------

  getLottoData = (lotto) => this.props.getLottoData(lotto)

//----------------------------------------------------------------------------

  render() { 
      return (
          <div>

            <div className="header">
              <div className="logo"></div>
              <div className="home-text">Home of Lotto Betting</div>
              <div className="join">
                <div className="join-text">JOIN</div>
              </div>
            </div>

            <div className="content">
              <div className="inner-content">

                <div className="title1">
                  <div className="title1-text"><span className="break-line"><span className="black-colour">CHECK OUT</span></span> <span className="break-line"><span className="green-colour">LATEST LOTTO RESULTS</span></span></div>
                  <div className="smile"></div>
                </div>

                <div>
                  <div>
                      <LottoList list = { this.state.list1 } getLottoData = {this.getLottoData} type = 'lotto1' />
                  </div>
                </div>

                <div>
                  <div className="banner">
                    <div className="inner-banner">
                      <div className="banner-image"></div>
                      <div className="banner-text"><span className="bold">Over $350,000 in 6 days lucky winner!</span> KENOLAND keeps that winning feeling rolling!</div>
                      <div className="banner-link">Learn More</div>
                    </div>
                  </div>
                </div>

                <div className="title2">
                  <div className="title2-text"><span className="black-colour">NEVER LOSE A TICKET</span></div>
                  <div className="smile"></div>
                </div>

                <div>
                  <div>
                      <LottoList list = { this.state.list2 } getLottoData = {this.getLottoData} type = 'lotto2' />
                  </div>
                </div>

              </div>              
            </div>

          </div>
      )
  }

//----------------------------------------------------------------------------

}

export default App

