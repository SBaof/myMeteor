const { RaisedButton } = mui;

Home = React.createClass({
  render() {
    return (
      <div>
        <RaisedButton label='Hello world'
                      primary={true}
        />
      </div>
    );
  }
});
