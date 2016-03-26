const { Link } = ReactRouter;

App = React.createClass({
  contextTypes: {
    context: React.PropTypes.object.isRequired
  },

  render(){
    return (
      <div className="app-wrap">
        <NavBar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
});
