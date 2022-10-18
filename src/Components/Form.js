import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latA: 0, latB: 0, longA: 0, longB: 0 };
    this.onLatAhandle = this.onLatAhandle.bind(this);
    this.onLongAHandle = this.onLongAHandle.bind(this);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onLongBHandle = this.onLongBHandle.bind(this);
    this.onLatBhandle = this.onLatBhandle.bind(this);
  }

  onSubmitHandle(e) {
    e.preventDefault();
    const R = 6371e3;
    const x1 = (this.state.latA * Math.PI) / 180;
    const x2 = (this.state.latB * Math.PI) / 180;
    const deltaX = ((this.state.latB - this.state.latA) * Math.PI) / 180;
    const deltaY = ((this.state.longB - this.state.longA) * Math.PI) / 180;
    const a =
      Math.sin(deltaX / 2) ** 2 +
      Math.cos(x1) * Math.cos(x2) * Math.sin(deltaY / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    alert("La distance entre les villes est de " + distance);
  }

  onLatAhandle(e) {
    this.setState({ latA: e.target.value });
  }

  onLongAHandle(e) {
    this.setState({ longA: e.target.value });
  }

  onLatBhandle(e) {
    this.setState({ latB: e.target.value });
  }

  onLongBHandle(e) {
    this.setState({ longB: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandle}>
        <label htmlFor="latitudeA">
          Saisissez la latitude de la ville A
          <br />
          <input
            type="text"
            id="latitudeA"
            value={this.state.latA}
            onChange={this.onLatAhandle}
          />
        </label>
        <br />
        <br />
        <label htmlFor="longitudeA">
          Saisissez la longitude de la ville A
          <br />
          <input
            type="text"
            id="longitudeA"
            value={this.state.longA}
            onChange={this.onLongAHandle}
          />
        </label>
        <br /> <br />
        <label htmlFor="latitudeA">
          Saisissez la latitude de la ville B
          <br />
          <input
            type="text"
            id="latitudeA"
            value={this.state.latB}
            onChange={this.onLatBhandle}
          />
        </label>
        <br />
        <br />
        <label htmlFor="longitudeA">
          Saisissez la longitude de la ville B
          <br />
          <input
            type="text"
            id="longitudeA"
            value={this.state.longB}
            onChange={this.onLongBHandle}
          />
        </label>{" "}
        <br />
        <br />
        <input type="submit" value="Calculer" />
      </form>
    );
  }
}
