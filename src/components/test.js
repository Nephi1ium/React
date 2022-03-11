class App extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        partyType: "birthday",
        entertainment: "clowns",
        richGuests: 22, 
        venue: {
          name: "Polly's Party Palace",
          capacity: 120
        }
      };
    }
  
    render() {
      return (
        <div>
          <Party aParty={this.state.partyType} aParty1={this.state.entertainment} aParty2={this.state.venue} aParty3={this.state.richGuests}/>
        </div>
      );
    }
  }
  
  
  class Party extends React.Component {
    render () {
      return (
      <div>
          <h3>Party Time!</h3>
          <p>
            This {this.props.aParty} party will be held at {this.props.aParty2} with a maximum capacity of {this.props.aParty2.capacity}.        </p>
          <p>
            Featured entertainment {this.props.aParty1} for our {this.props.aParty3} benefactors!
          </p>
      </div>
        );
    }
  }
  
  
  ReactDOM.render(<App />, document.getElementById('root'));