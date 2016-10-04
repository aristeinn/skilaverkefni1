var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

export default CommentBox;