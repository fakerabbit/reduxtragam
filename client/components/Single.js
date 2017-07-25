import React from 'react';
import Photo from './Photo';

const Single = React.createClass({
  render() {
    const params = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === params.postId);
    console.log(i);
    return (
      <div className="single-photo">
        I'm the Single
      </div>
    )
  }
});

export default Single;