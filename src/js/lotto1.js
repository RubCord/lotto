import React from 'react';
import { render } from 'react-dom'
import moment from 'moment'
import styled from 'styled-components'

//----------------------------------------------------------------------------
//Defining break points

const size = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px'
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`
};

//----------------------------------------------------------------------------
//Defining Style Components
//----------------------------------------------------------------------------

const LottoImage = styled.div`
  @media ${device.mobile} {
    background: ${props => `url('images/320/${props.image}') no-repeat;`};
    width: 285px;       
  }

  @media ${device.tablet} {
    background: ${props => `url('images/1024/${props.image}') no-repeat;`};
    width: ${props => props.columnspan == '2' ? '640px' : '306px'};
  }

  @media ${device.laptop} {
    background: ${props => `url('images/1024/${props.image}') no-repeat;`};
    width: ${props => props.columnspan == '2' ? '640px' : '306px'};
  }
`;

//----------------------------------------------------------------------------

const LottoContainer = styled.div`
  display: grid;
  grid-template-columns: 7px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
    "strip-colour lotto-mainbox";
  border: 1px solid #D9DEDA;
  flex: 1 0 1;
  margin: 10.5px;
`;

//----------------------------------------------------------------------------

  const StripColor = styled.div`
    background-color: ${props => `${props.color}`};
`;

//----------------------------------------------------------------------------

const LottoMainboxNumbersNumberlist = styled.div`
  grid-area: lotto-mainbox-numbers-numberlist;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  @media ${device.mobile} {
    width: 285px;
  }

  @media ${device.tablet} {
    width: ${props => props.columnspan == '2' ? '640px' : '306px'};
  }

  @media ${device.laptop} {
    width: ${props => props.columnspan == '2' ? '640px' : '306px'};
  }
`;

//----------------------------------------------------------------------------

  const NumberCircled = styled.div`
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 18px;
    height: 18px;
    padding: 7px;
    background: #fff;
    border: 1px solid ${props => `${props.color}`};
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif;
    display: inline-block;
    vertical-align: middle;
    margin-right: 7px;
    margin-bottom: 7px;
`;

//----------------------------------------------------------------------------

const LottoMainboxImageText1 = styled.div`
    font-family: 'Daxline Pro 900';
    font-size: ${props => props.sizemaintext == 'big' ? '28px' : '17Spx'};
    padding-top: 14px;
    padding-left: 14px;
    color: white;
`;

//----------------------------------------------------------------------------

const LottoMainboxImageText2 = styled.div`
    grid-area: lotto-mainbox-image-text2;
    font-family: 'Daxline Pro 500';
    font-size: 14px;
    padding-left: 14px;
    color: white;
`;

//----------------------------------------------------------------------------
//Rendering Component
//----------------------------------------------------------------------------

class Lotto1 extends React.Component {

  render() {
    if (this.props.data) {

        const winningNumbersCircled = Array.isArray(this.props.data.numbers) ? this.props.data.numbers.map((number, index) => <NumberCircled color='#D9DEDA' key={index}>{number}</NumberCircled>) : null;
        const supplementaryNumbersCircled = Array.isArray(this.props.data.supplementary) ? this.props.data.supplementary.map((number, index) => <NumberCircled color={this.props.list.suppscolor} key={index}>{number}</NumberCircled>) : null;
        const bonusNumbersCircled = Array.isArray(this.props.data.bonus) ? this.props.data.bonus.map((number, index) => <NumberCircled color={this.props.list.suppscolor} key={index}>{number}</NumberCircled>) : null;
        const powerballNumbersCircled = Array.isArray(this.props.data.powerballs) ? this.props.data.powerballs.map((number, index) => <NumberCircled color={this.props.list.suppscolor} key={index}>{number}</NumberCircled>) : null;

      return (    
    <LottoContainer columnspan={this.props.list.columnspan}>
      <StripColor color={this.props.list.stripcolor}></StripColor>
      <div className="lotto-mainbox">
        <LottoImage image={this.props.list.image} columnspan={this.props.list.columnspan} className="lotto-mainbox-image">
          <div className="lotto-mainbox-image-text">
            <LottoMainboxImageText1 sizemaintext={this.props.list.sizemaintext}>{this.props.list.maintext}</LottoMainboxImageText1>
            <LottoMainboxImageText2>{this.props.list.subtext}</LottoMainboxImageText2>
          </div>
          <div className="lotto-mainbox-image-navigation">
            <div className="lotto-mainbox-image-navigation-arrowleft">&lt;</div>
            <div className="lotto-mainbox-image-navigation-content">
              <div className="lotto-mainbox-image-navigation-content-text1">DRAW {this.props.data.nr}</div>
              <div className="lotto-mainbox-image-navigation-content-text2">{moment(this.props.data.drawingDate,'DD/MM/YYYY').format('ddd, DD MMM YYYY')}</div>
            </div>
            <div className="lotto-mainbox-image-navigation-arrowright">&gt;</div>
          </div>
        </LottoImage>
        <div className="lotto-mainbox-numbers">
          <LottoMainboxNumbersNumberlist columnspan={this.props.list.columnspan}>
            <div className="lotto-mainbox-numbers-numberlist-winningnumbers">
              <div className="lotto-mainbox-numbers-numberlist-winningnumbers-text">{ winningNumbersCircled ? 'Winning numbers' : '' }</div>
              <div className="lotto-mainbox-numbers-numberlist-winningnumbers-numbers">{ winningNumbersCircled ? winningNumbersCircled : '' }</div>
            </div>
            { (supplementaryNumbersCircled || bonusNumbersCircled || powerballNumbersCircled) ? 
            <div className="lotto-mainbox-numbers-numberlist-supps">
              <div className="lotto-mainbox-numbers-numberlist-supps-text">{ (supplementaryNumbersCircled || bonusNumbersCircled || powerballNumbersCircled) ? 'Supps' : '' }</div>
              <div className="lotto-mainbox-numbers-numberlist-supps-numbers">{ supplementaryNumbersCircled ? supplementaryNumbersCircled : (bonusNumbersCircled ? bonusNumbersCircled : (powerballNumbersCircled ? powerballNumbersCircled : '' )) }</div>
            </div>
            : '' }
          </LottoMainboxNumbersNumberlist>
          <div className="lotto-mainbox-numbers-options">Price details<span className="line"></span>Help &amp; FAQ</div>
        </div>
      </div>
    </LottoContainer>
      )
    } else {
        return null
    }
  }

//----------------------------------------------------------------------------

}

export default Lotto1