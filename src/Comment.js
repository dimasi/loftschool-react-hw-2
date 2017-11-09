import React, {PureComponent} from 'react';

import './Comment.css'

class Comment extends PureComponent {
  handleDelete = () => {
    const {id, onDelete} = this.props;
    onDelete(id);
  }

  render() {
    const {text} = this.props;

    return (
      <div className="Comment">
        <p className="Comment__text">{text}</p>
        <span className="Comment__delete delete" onClick={this.handleDelete}>&times;</span>
      </div>
    );
  }
}

export default Comment;
