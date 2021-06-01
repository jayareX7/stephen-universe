import React from 'react'
import {navigate} from 'gatsby'

export function GoBack() {
    return(

        <div className="button" onClick={() => navigate (-1)}>
            <i>Go Back</i>
        </div>

)}


class ColoredContainer extends React.Component {
    render () {
      let containerStyle = {
        backgroundColor: this.props.color
      }
      return <div className="container" style={containerStyle}></div>
    }
  }
  
  class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <button title='Back to top' className='scroll button' 
                 onClick={ () => { this.scrollToTop(); }}>
                  <span style={{color: 'primary'}} className='ti-angle-up'></span>
                </button>;
     }
  } 
  
  class ScrollApp extends React.Component {
    constructor() {
      super();
      
      this.state = {
        colors: ["#044747", "#079191", "#38adad", "#90e3e3", "#d5f7f7"]
      }
    }
    
    render () {
      return <div className="long">
                {
                  this.state.colors.map(function(color) {
                      return <ColoredContainer color={color}/>
                  })
                }
                <ScrollButton scrollStepInPx="150" delayInMs="10.66"/>
             </div>
    }
  }


  export default ScrollApp
 

