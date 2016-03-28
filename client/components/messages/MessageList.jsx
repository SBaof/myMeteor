MessageList = React.createClass({
  render() {
    const allMessages = _.map(this.props.messages, (message, key) => {
      return (
        <Message owner={message.owner}
          avatar={message.avatar}
          createAt={message.createAt}
          content={message.content}
          key={key} />
      );
    });

    let styles = {
      cricle: {
        margin: '0 auto',
        paddingTop: '100px',
        display: 'block'
      }
    };

    return (
      <div id='message-list'>
        <div>
          { allMessages }
        </div>
      </div>
    );
  }
});
