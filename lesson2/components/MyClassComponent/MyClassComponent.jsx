import React, {Component} from 'react';

// классовый компонент
export class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('class constructor, первый раз создается компонент');

    // если нужно достать значения из props и поместить их в state
    // либо создать дефолтное состояние используют конструктор
    this.state = {
      text: props.myTypeName,
    }
  }

  componentDidMount() {
    console.log('class commponentDidMount, компонент был мотнирован');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('class shouldComponentUpdate, компонент будет обновлен');
    return true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('class componentDidUpdate, компонент был обновлен');
  }

  componentWillUnmount() {
    console.log('class componentWillUnmount, компонент будет размонтирован');
  }

  updateText = (event) => {
    this.setState({text: event.target.value});
  }

  render () {
    console.log('class render, компонент отрисовывается');

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
        <input
          ref={setMyRef}
          value={text}
          onChange={this.updateText}
        />
      </div>
    )
  }
}