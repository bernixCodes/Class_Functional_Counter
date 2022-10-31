import style from "./index.module.css";
import { Component } from "react";

class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <>
        <div className={style.container}>
          <h2 className={style.header}>Class Counter</h2>
          <div className={style.counter}>{this.state.counter}</div>
          <div className={style.btns}>
            <div className={style.increment} onClick={this.handleIncrement}>
              +
            </div>
            <div className={style.decrement} onClick={this.handleDecrement}>
              -
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyClass;
