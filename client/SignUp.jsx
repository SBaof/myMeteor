const {
  TextField,
  RaisedButton,
  Paper
} = mui;

SignUp = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _handleSubmit (event) {
    event.preventDefault();

    let userName = this.refs.username.getValue();
    let password = this.refs.password.getValue();

    console.log(userName);
    console.log(password);

    Accounts.createUser({
      username: userName,
      password: password
    }, (error) => {
      if (error) {
        console.log(error);
        return;
      }

      this.context.router.push('/account');
    });
  },

  getStyle() {
    return {
      textField: {
        display: 'bloock',
        width: '100%'
      },

      floatingLabel: {
        fontSize: '20px'
      },

      label: {
        fontWeight: '600',
        fontSize: '20px'
      },

      button: {
        height: '50px',
        width: '200px',
        marginTop: '50px',
        marginBottom: '15px'
      }
    };
  },

  render() {
    let styles = this.getStyle();
    return (
      <div className='signup'>
        <Paper zDepth={2} className='paper'>
          <form onSubmit={ this._handleSubmit }>

          <TextField
            ref='username'
            style={styles.textField}
            floatingLabelText='UserName'
            floatingLabelStyle={styles.floatingLabel} />
          <TextField
            ref='password'
            style={styles.textField}
            type='password'
            floatingLabelText='Password'
            floatingLabelStyle={styles.floatingLabel} />

          <RaisedButton
            style={styles.button}
            labelStyle={styles.label}
            type='submit'
            label='Sign Up'
            primary={true} />
          </form>
        </Paper>
      </div>
    );
  }
});
