import React from "react";
import { FaBookmark, FaRegBookmark, FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    
    const initialLikes = Math.floor(Math.random() * 11);

    this.state = {
      image: this.props.book[0],
      title: this.props.book[1],
      author: this.props.book[2],
      publisher: this.props.book[3],
      year: this.props.book[4],
      bookmark: false,
      liked: false,
      likeCount: initialLikes
    };

    this.check_bookmark = this.check_bookmark.bind(this);
    this.toggle_like = this.toggle_like.bind(this);
  }

  check_bookmark() {
    this.setState({ bookmark: !this.state.bookmark });
  }

  toggle_like() {
    if (!this.state.liked) {
      this.setState({
        liked: true,
        likeCount: this.state.likeCount + 1
      });
    } else {
      this.setState({
        liked: false,
        likeCount: this.state.likeCount - 1
      });
    }
  }

  render() {
    return (
      <div className="card text-center h-100 shadow-sm">
        <div className="card-body">
          <img
            src={"img/" + this.state.image}
            alt={this.state.title}
            width="150px"
            height="200px"
            style={{ marginBottom: "10px", objectFit: "cover" }}
          />
          <h5 className="card-title title" style={{ fontSize: "1rem", fontWeight: "bold" }}>
            {this.state.title}
          </h5>
          <p className="card-text author text-secondary mb-1" style={{ fontSize: "0.9rem" }}>
            {this.state.author}
          </p>
          <p className="card-text text-muted publisher" style={{ fontSize: "0.8rem" }}>
            {this.state.publisher} <small className="year">({this.state.year})</small>
          </p>
        </div>

        {}
        <div className="card-footer text-muted d-flex justify-content-between align-items-center">
          
          {}
          <div 
            className="d-flex align-items-center" 
            onClick={this.toggle_like} 
            style={{ cursor: "pointer", gap: "5px", fontSize: "0.9rem" }}
          >
            {this.state.liked ? <FaThumbsUp className="text-primary" /> : <FaRegThumbsUp />}
            <span>{this.state.likeCount} Like(s)</span>
          </div>

          {}
          <div 
            className="d-flex align-items-center" 
            onClick={this.check_bookmark} 
            style={{ cursor: "pointer", gap: "5px", fontSize: "0.9rem" }}
          >
            <span className="text-success">
              {this.state.bookmark ? "Bookmark!" : ""}
            </span>
            {this.state.bookmark ? <FaBookmark className="text-warning" /> : <FaRegBookmark />}
          </div>

        </div>
      </div>
    );
  }
}

export default CatalogItem;