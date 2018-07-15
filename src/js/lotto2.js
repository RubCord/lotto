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
    width: 285px;
    background: ${props => `url('images/320/${props.image}') 95% 20% no-repeat, linear-gradient(90deg, ${props.color} 0%, ${props.gradientcolor} 100%)`};
    background-size: 75px auto, cover;
  }

  @media ${device.tablet} {
    width: ${props => props.columnspan == '2' ? '640px' : '306px'};
    background: ${props => `url('images/1024/${props.image}') 95% 20% no-repeat, linear-gradient(90deg, ${props.color} 0%, ${props.gradientcolor} 100%)`};
    background-size: 75px auto, cover;
  }

  @media ${device.laptop} {
    width: ${props => props.columnspan == '2' ? '640px' : '306px'};
    background: ${props => `url('images/1024/${props.image}') 95% 20% no-repeat, linear-gradient(90deg, ${props.color} 0%, ${props.gradientcolor} 100%)`};
    background-size: 75px auto, cover;
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
    font-size: ${props => props.sizemaintext == 'big' ? '28px' : '17px'};
    padding-top: 14px;
    padding-left: 14px;
    color: white;
`;

//----------------------------------------------------------------------------

const LottoMainboxImageText2 = styled.div`
    grid-area: lotto-mainbox-image-text2;
    font-family: 'Daxline Pro 500';
    font-size: 21px;
    padding-left: 14px;
    color: white;
`;

//----------------------------------------------------------------------------
//Rendering Component
//----------------------------------------------------------------------------

class Lotto2 extends React.Component {

  render() {
    if (this.props.data) {

        const winningNumbersArrayLength = Array.isArray(this.props.data.numbers) ? (this.props.data.numbers.length) : null;
        const winningNumbers = (winningNumbersArrayLength == 1) ? this.props.data.numbers.toString().split('') : this.props.data.numbers;
        const winningNumbersCircled = Array.isArray(winningNumbers) ? winningNumbers.map((number, index) => <NumberCircled color='#D9DEDA' key={index}>{number}</NumberCircled>) : null;
        const supplementaryNumbersCircled = Array.isArray(this.props.data.supplementary) ? this.props.data.supplementary.map((number, index) => <NumberCircled color={this.props.list.suppscolor} key={index}>{number}</NumberCircled>) : null;
        const bonusNumbersCircled = Array.isArray(this.props.data.bonus) ? this.props.data.bonus.map((number, index) => <NumberCircled color={this.props.list.suppscolor} key={index}>{number}</NumberCircled>) : null;
        const powerballNumbersCircled = Array.isArray(this.props.data.powerballs) ? this.props.data.powerballs.map((number, index) => <NumberCircled color={this.props.list.suppscolor} key={index}>{number}</NumberCircled>) : null;
        const megaballsNumbersCircled = Array.isArray(this.props.data.megaballs) ? this.props.data.megaballs.map((number, index) => <NumberCircled color={this.props.list.suppscolor} key={index}>{number}</NumberCircled>) : null;
        
      return (    
    <LottoContainer columnspan={this.props.list.columnspan}>
      <StripColor color={this.props.list.stripcolor}></StripColor>
      <div className="lotto-mainbox">
        <LottoImage image={this.props.list.image} columnspan={this.props.list.columnspan} color={this.props.list.stripcolor} gradientcolor={this.props.list.gradientcolor} className="lotto-mainbox-image">
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
              <div className="lotto-mainbox-numbers-numberlist-winningnumbers-numbers">{winningNumbersCircled ? winningNumbersCircled : ''}</div>
            </div>
            { (supplementaryNumbersCircled || bonusNumbersCircled || powerballNumbersCircled || megaballsNumbersCircled) ? 
            <div className="lotto-mainbox-numbers-numberlist-supps">
              <div className="lotto-mainbox-numbers-numberlist-supps-text">{ (supplementaryNumbersCircled || bonusNumbersCircled) ? 'Supps' : (powerballNumbersCircled ? 'P Ball' : (megaballsNumbersCircled ? 'M Millions' : '')) }</div>
              <div className="lotto-mainbox-numbers-numberlist-supps-numbers">{ supplementaryNumbersCircled ? supplementaryNumbersCircled : (bonusNumbersCircled ? bonusNumbersCircled : (powerballNumbersCircled ? powerballNumbersCircled : (megaballsNumbersCircled ? megaballsNumbersCircled : '' ))) }</div>
            </div>
            : '' }
          </LottoMainboxNumbersNumberlist>
          <div className="lotto-mainbox-numbers-options">Price details<span className="line"></span>Bet Now</div>
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

export default Lotto2