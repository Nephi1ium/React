function Welcome ({bootCampName}){
    console.log("bootcampname", this.bootCampName;
    if(bootCampName){
      return(
        <div>
        <h1>Welcome to {this.bootCampName}!</h1>
        </div>
      );
    }
}




















class App extends React.Component {
    constructor(props) {
    super(props);
    this.bootCampName = this.bootCampName.bind(this);  
    };
}
    
render() {
    console.log("this state", this.state);
     return (
     <Welcome/>
     );
  }
  
ReactDOM.render(<App />, document.getElementById('root'));