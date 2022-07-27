import React, { Component } from "react";

import { BallTriangle } from "react-loader-spinner";
import Info from "./Info";
import getInfo from "../Services/getInfo";

export default class IpInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({ info: data, isLoading: false });
    });
  }

  render() {
    const isLoading = this.state.isLoading;
    return (
      <>
        {isLoading ? (
          <BallTriangle
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        ) : (
          <Info data={this.state.info} />
        )}
      </>
    );
  }
}
