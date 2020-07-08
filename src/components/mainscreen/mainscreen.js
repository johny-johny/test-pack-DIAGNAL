import React from "react";
import axios from "axios";
import "./mainscreen.css";
import { connect } from "react-redux";
import classnames from "classnames";

class Mainscreen extends React.Component {
  state = {
    titleList: [],
    reValue: "",
    prevScrollpos: window.pageYOffset,
    visible: true,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({
          titleList: res.data,
        });
      })
      .catch((error) => {
        console.log("error");
      });
    this.handleScroll();
  }

  handleScroll = (event) => {
    if (event !== undefined) {
      const myEvent = event.target.scrollTop;
      if (myEvent > 15) {
        this.setState({
          visible: true,
        });
      } else {
        this.setState({
          visible: false,
        });
      }
    } else {
      this.setState({
        visible: false,
      });
    }
  };
  render() {
    const { titleList } = this.state;
    return (
      <div className="main-screen-container">
        <div
          className="main-screen-inner-container"
          onScroll={this.handleScroll}
        >
          {this.props.storeValue ? (
            <ul className="titleList">
              {titleList
                .filter((x) => x.name.includes(this.props.storeValue))
                .map((ele) => (
                  <li>{ele.name}</li>
                ))}
            </ul>
          ) : (
            <ul className="titleList">
              {titleList.map((ele) => (
                <li>{ele.name}</li>
              ))}
            </ul>
          )}

          <div
            className={classnames({
              footer: !this.state.visible,
              content_hide: this.state.visible,
            })}
          >
            <h6>footer</h6>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeValue) => {
  return {
    storeValue,
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Mainscreen);
