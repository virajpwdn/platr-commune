import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Child Constructor is Called");
  }

  componentDidMount() {
    console.log("child component is mounted");
  }

  render() {
    const { count } = this.state;
    console.log("Child Component is rendered");
    return (
      <div>
        <h1>This is class based Component</h1>
        {this.props.details}
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              // Here we can do batch changes, means when clicked on a button we want multiple state varibales to change then we can do it over here.
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default AboutClass;
