import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  }

  colorPick = (color) => {
    this.setState({ color });
  }

  render() {
    const buttons = ['red', 'yellow', 'blue'].map(color => {
      return <button 
        className={styles[color]} 
        key={color} 
        onClick={this.colorPick.bind(null, color)}>
        {color}
      </button>;
    });
    const { color } = this.state;
    return (
      <>
        <section className={styles.ColorPicker}>
          {buttons} 
          <div className={styles[color]}></div>
        </section>
      </>
    );
  }
}
