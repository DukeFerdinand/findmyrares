import React from "react";

interface HelloWorldProps {
  greeting: string;
}

class HelloWorld extends React.Component<HelloWorldProps> {
  constructor(props: HelloWorldProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <p className="mt-5">Greeting: {this.props.greeting}</p>
      </React.Fragment>
    );
  }
}

export default HelloWorld;
