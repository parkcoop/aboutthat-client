import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import heart from "./img/heart.png";
//make heart + number as component
class Datasheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageResponse: "",
      user: this.props.user
    };
  }
  handleRelativeTime = inputTime => {
    const today = new Date().getTime();
    const milliInput = new Date(inputTime).getTime();

    const diff = (today - milliInput) / 1000;
    if (diff >= 604800) {
      const weeks = Math.floor(diff / 604800);
      return `${weeks}w`;
    } else if (diff >= 86400) {
      const days = Math.floor(diff / 86400);
      return `${days}d`;
    } else if (diff >= 3600) {
      const hours = Math.floor(diff / 3600);
      return `${hours}h`;
    } else if (diff >= 60) {
      const minutes = Math.floor(diff / 60);
      return `${minutes}m`;
    }
    const seconds = Math.floor(diff);
    return `${seconds}s`;
  };

  componentDidMount() {
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=${this.props.data.name.toLowerCase()}`
      )
      .then(wikiResponse => {
        let pageNumber = Object.keys(wikiResponse.data.query.pages);
        let response = wikiResponse.data.query.pages[pageNumber].extract;
        this.setState({
          pageResponse: response
        });
      });
  }
  handleComment = e => {
    this.setState({
      comment: e.target.value
    });
  };
  addComment = e => {
    e.preventDefault();
    // console.log(this.state.user);
    // console.log(this.props.data._id);
    axios.post(
      `https://secure-garden-36333.herokuapp.com/addcomment/${
        this.props.data._id
      }`,
      {
        user: this.state.user.username,
        userId: this.state.user._id,
        comment: this.state.comment
        // itemId: this.props.data._id
      }
    );
    window.location.href = `/items/${this.props.data._id}`;
  };
  render() {
    return (
      <div className="infoSection">
        <h1>{this.props.data.name}</h1>
        <p id="contributors">
          Contributors:{" "}
          {this.props.data.contributors.length > 1 &&
            this.props.data.contributors.map(contributors => {
              return (
                <Link to={`/users/${contributors}`}>
                  {contributors}
                  {", "}
                </Link>
              );
            })}
          {this.props.data.contributors.length == 1 &&
            this.props.data.contributors.map(contributors => {
              return <Link to={`/users/${contributors}`}>{contributors}</Link>;
            })}
        </p>
        <hr />
        <p>
          {this.props.data.description.map(descriptions => {
            if (descriptions.endsWith(".")) {
              return (
                descriptions.charAt(0).toUpperCase() +
                descriptions.slice(1) +
                " "
              );
            } else {
              return `${descriptions
                .charAt(0)
                .toUpperCase()}${descriptions.slice(1)}. `;
            }
          })}
        </p>
        <p>
          Contains:{" "}
          {this.props.data.mayContain.length > 0 &&
            this.props.data.mayContain.map(chemicals => {
              return <b>{chemicals}</b>;
            })}
        </p>
        <p>
          Read more:{" "}
          {this.props.data.sources.map(sources => {
            if (sources.startsWith("http")) {
              return (
                <li>
                  <a href={sources}>{sources}</a>
                </li>
              );
            } else {
              return (
                <li>
                  <a href={"http://" + sources}>{sources}</a>
                </li>
              );
            }
            // console.log(sources.startsWith("http"));
          })}
        </p>
        <center>
          {" "}
          <Link to={`/items/edit/${this.props.data._id}`}>
            <button className="newButton">Add a fact</button>
          </Link>
        </center>
        <hr />
        {this.state.pageResponse && (
          <div>
            <h4>
              <i>From Wikipedia:</i>
            </h4>
            <p>
              {this.state.pageResponse &&
                this.state.pageResponse.substring(0, 1000) + "..."}
            </p>
            <center>
              {" "}
              <a
                href={`https://en.wikipedia.org/wiki/${this.props.data.name.toLowerCase()}`}
              >
                <button className="newButton">Read Wikipedia article</button>
              </a>
            </center>
          </div>
        )}
        <br />
        <hr />
        <br />
        {this.state.user && (
          <form id="commentform" onSubmit={this.addComment}>
            <textarea onChange={this.handleComment} className="commentBox" />
            <br />
            <button type="submit" className="newButton">
              Add comment
            </button>
          </form>
        )}
        <h2>Comments</h2>
        {this.props.data.comments &&
          this.props.data.comments
            .sort(function(a, b) {
              return b.timestamp - a.timestamp;
            })
            .map(comments => {
              return (
                <div className="comment">
                  <h5>{comments.username}</h5>
                  <p>{this.handleRelativeTime(comments.timestamp)}</p>
                  <hr />
                  <h3>{comments.comment}</h3>
                </div>
              );
            })}

        <div />
      </div>
    );
  }
}

export default Datasheet;
