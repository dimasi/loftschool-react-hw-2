import React, {PureComponent} from 'react';
import NewsPost from './NewsPost';

import './App.css';

let id = 0;

function getNewsPostId() {
  id += 1;
  return id;
}
class App extends PureComponent {
  state = {
    newsInput: '',
    news: []
  }

  handleChange = e => {
    const value = e.target.value;
    const {news} = this.state;

    this.setState({
      newsInput: value,
      news: news
    });
  }

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      const {newsInput, news} = this.state;
      const newNewsPost = {text: newsInput};

      this.setState({
        newsInput: '', 
        news: [...news, newNewsPost]
      });
    }
  }

  render() {
    const {newsInput, news} = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <input 
            className="App__input" 
            placeholder="Добавить новость" 
            value={newsInput}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </header>
        <div className="App__news-list">
          {news.map(newsPost => (
            <NewsPost
              key={newsPost.text}
              text={newsPost.text}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
