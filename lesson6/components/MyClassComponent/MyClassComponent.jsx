import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
  TextField,
} from '@mui/material';

// классовый компонент
export class MyClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.myTypeName,
    }
  }

  static propTypes = {
    setMyRef: PropTypes.object,
    myTypeName: PropTypes.string,
  }

  static defaultProps = {
    myTypeName: 'defaultType',
  }

  updateText = (event) => {
    this.setState({text: event.target.value});
  }

  render () {
    const {
      setMyRef,
      children,
    } = this.props;

    const {
      text,
    } = this.state;

    return (
      <div>
        <div>
          MyClassComponent: {text} {children}
        </div>
        <TextField
          inputRef={setMyRef}
          variant="outlined"
          value={text}
          onChange={this.updateText}
        />
      </div>
    )
  }
}