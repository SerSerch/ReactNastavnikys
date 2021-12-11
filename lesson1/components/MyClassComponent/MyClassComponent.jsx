import React, {Component} from 'react';

// классовый компонент
export class MyClassComponent extends Component {
  render () {
    const {
      myTypeName,
      children,
    } = this.props;

    return (
      <div>
        MyClassComponent: {myTypeName} {children}
      </div>
    )
  }
}