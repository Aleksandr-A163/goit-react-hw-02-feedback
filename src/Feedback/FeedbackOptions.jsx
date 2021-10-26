import style from './FeedbackOptions.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={style.message}>
        <h1 className={style.message__title}>Please leave feedback</h1>
        <div className={style.message__section}>
          {this.props.options.map(btn => (
            <button
              className={style.message_buttons}
              value={btn}
              key={btn}
              type="button"
              onClick={e => this.props.onLeaveFeedback(e)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
