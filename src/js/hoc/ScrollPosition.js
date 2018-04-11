import React, { Component } from 'react';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

const ScrollPosition = InnerComponent => target => {
  return class extends Component {
    state = {
      active: false
    };
    
    componentDidMount() {
      this.subscription$ = Observable.fromEvent(document, 'scroll')
        .map(event => event.target.defaultView.document.querySelector(target).getBoundingClientRect().y)
        .do(x => console.log(x))
        .subscribe(y => y < 17 && y > -1600 ? this.setState({active:true}) : this.setState({active:false}));
    }
  
    componentWillUnmount() {
      this.subscription$.unsubscribe();
    }
    
    render() {
      return(
        <InnerComponent {...this.state} {...this.props}/>
      )
    }
  }
};

export default ScrollPosition;