  
class B extends Component {
  
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
      
    handleTextChange(e){
        this.props.handleTextChange(e.target.value);
    }
      
    render() {
        return (
            <input value={this.props.text} 
                   onChange={this.handleTextChange} />
        );
    }
    }
          
    export default B;
    Filename- C.js:

    
    
    import React,{ Component } from 'react';
      
class C extends Component {
      
    render() {
        return (
            <h3>Output: {this.props.text}</h3>
        );
    }
    }
          
    export default C;