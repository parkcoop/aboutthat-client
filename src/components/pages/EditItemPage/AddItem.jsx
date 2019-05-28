import React, { Component } from "react";
import axios from "axios";

const styles = {
  background: "white",
  width: "50%",
  margin: "auto",
  padding: 100,
  textAlign: "center"
};

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      source: [],
      description: [],
      vegan: true,
      paleo: true,
      keto: true,
      mayContain: [],
      photoUrl: "",
      user: this.props.userInSession.username,
      userId: this.props.userInSession._id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = field => e => {
    this.setState({
      [field]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    axios.post("https://secure-garden-36333.herokuapp.com/addEntry", {
      name: this.state.name,
      source: this.state.source,
      description: this.state.description,
      vegan: this.state.vegan,
      paleo: this.state.paleo,
      keto: this.state.keto,
      mayContain: this.state.mayContain,
      imageUrl: this.state.photoUrl,
      user: this.state.user,
      userId: this.state.userId
    });
    window.location.href = `/`;
  }

  handleUpload = file => {
    console.log("file", file);
    axios
      .post("https://secure-garden-36333.herokuapp.com/upload", file)
      .then(response => {
        this.setState({ photoUrl: response.data.secure_url });
      })
      .catch(err => console.error(err));
  };

  handleFile = async e => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    await this.handleUpload(uploadData);
  };

  render() {
    return (
      <div
        className="infoSection"
        style={{ margin: "auto", textAlign: "center" }}
      >
        <h1>Add Entry</h1>

        <hr />
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            <b>Image upload</b>
          </label>
          <br />
          <input
            style={{ border: "1px solid black" }}
            type="file"
            onChange={this.handleFile}
          />
          <br />
          <br />
          <label>
            <b>Name (try to make as same as Wikipedia's article)</b>
          </label>
          <br />
          <input
            onChange={this.handleChange("name")}
            type="text"
            name="name"
            required
          />
          <br />
          <label>
            <b>Source</b>
          </label>
          <br />
          <input
            onChange={this.handleChange("source")}
            type="text"
            name="source"
          />
          <br />
          <label>
            <b>Description (one sentence)</b>
          </label>
          <br />
          <input
            onChange={this.handleChange("description")}
            style={{ width: "50%" }}
            type="text"
            required
            name="description"
          />
          <br />
          <label>
            <b>What active chemicals does this contain? (separated by comma)</b>
          </label>
          <br />
          <input
            onChange={this.handleChange("mayContain")}
            type="text"
            name="mayContain"
          />
          <br />
          <label>Is it vegan/plant-based?</label> <br />
          <select onChange={this.handleChange("vegan")} name="vegan">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <br />
          <label>Is it considered keto/carbohydrate-free?</label> <br />
          <select onChange={this.handleChange("keto")} name="keto">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <br />
          <label>Is it considered paleo?</label> <br />
          <select onChange={this.handleChange("paleo")} name="paleo">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <br />
          <br />
          <button type="submit">Submit Entry</button>
        </form>

        <hr />
        {/* {this.state.pageResponse && (
            <div>
              <h4>
                <i>From Wikipedia:</i>
              </h4>
              <p>
                {this.state.pageResponse &&
                  this.state.pageResponse.substring(0, 1000) + "..."}
              </p>
              <a
                href={`https://en.wikipedia.org/wiki/${this.props.data.name.toLowerCase()}`}
              >
                OMG
              </a>
            </div>
          )} */}
        {/* <Link to={`/items/edit/${this.props.data._id}`}>
            <button>Add a fact</button>
          </Link> */}
      </div>
    );
  }
}

export default AddItem;
