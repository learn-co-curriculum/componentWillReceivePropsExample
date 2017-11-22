import React from 'react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      increasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps:', nextProps);
    console.log('current props:', this.props);
    if (nextProps.number > this.props.number) {
      this.setState({ increasing: true });
    } else {
      this.setState({ increasing: false });
    }
  }

  render() {
    const { increasing } = this.state;
    return (
      <div>
        <h1 style={{ color: increasing ? 'green' : 'red' }}>
          {this.props.number}
          <i className={`chevron ${increasing ? 'up' : 'down'} icon`} />
        </h1>
      </div>
    );
  }
}
