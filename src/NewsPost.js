import React, {PureComponent} from 'react';
import Comment from './Comment';

import './NewsPost.css'

let id = 0;

function getCommentId() {
  id += 1;
  return id;
}
class NewsPost extends PureComponent {
  state = {
    commentInput: '',
    comments: []
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({commentInput: value});
  }

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      const {commentInput, comments} = this.state;

      const newComment = {
        text: commentInput, 
        id: getCommentId()
      };

      this.setState({
        commentInput: '', 
        comments: [...comments, newComment]
      });
    }
  }

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  }

  render() {
    const {text} = this.props;
    const {commentInput, comments} = this.state;

    return (
      <div className="NewsPost">
        <p className="NewsPost__text">{text}</p>
        <div className="NewsPost__comments">
          {comments.map(comment => (
            <Comment
              id={comment.id}
              key={comment.id}
              text={comment.text}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
        <input 
          className="NewsPost__input" 
          placeholder="Добавить комментарий" 
          value={commentInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default NewsPost;
