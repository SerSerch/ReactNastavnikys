import React, {useState} from 'react';
import {
  TextField,
} from '@mui/material';
import PropTypes from "prop-types";

// функциональный компонет
export const MyFuncComponent = (props) => {
  const {
    setMyRef,
    myTypeName,
    children,
  } = props;

  const [text, setText] = useState(myTypeName);

  const updateText = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <div>
        MyFuncComponent: {text} {children}
      </div>
      <TextField
        inputRef={setMyRef}
        variant="outlined"
        value={text}
        onChange={updateText}
      />
    </div>
  )
}

MyFuncComponent.propTypes = {
  setMyRef: PropTypes.object,
  myTypeName: PropTypes.string,
}

MyFuncComponent.defaultProps = {
  myTypeName: 'defaultType',
}