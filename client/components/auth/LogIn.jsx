const {
  TextField,
  RaisedButton,
  Paper
} = mui;

LogIn = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _handleSubmit(event) {
    event.preventDefault();

    let userName = this.refs.username.getValue();
    let password = this.refs.password.getValue();

    console.log(userName);
    console.log(password);

    Meteor.loginWithPassword({username: userName}, password, (error) => {
      if (error) {
        console.log(error);
        return;
      }

      this.context.router.push('/account');
    });
  },

  getStyles() {
    return {
      textField: {
        display: 'block',
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
        width: '200px',
        height: '50px',
        marginTop: '50px',
        marginBottom: '15px'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div className='login'>
        <Paper zDepth={2} className='paper'>
          <form onSubmit={ this._handleSubmit } >
            <TextField
              ref='username'
              style={styles.textField}
              floatingLabelText='User Name'
              floatingLabelStyle={styles.floatingLabel} />

              <TextField
                ref='password'
                style={styles.textField}
                floatingLabelText='Password'
                floatingLabelStyle={styles.floatingLabel}
                type='password' />

                <RaisedButton
                  style={styles.button}
                  labelStyle={styles.label}
                  type='submit'
                  label='Log in'
                  primary={true} />
          </form>
        </Paper>
      </div>
    );
  }
});
