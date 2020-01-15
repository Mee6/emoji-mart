import _extends from '../polyfills/extends';
import React from 'react';
import PropTypes from 'prop-types';

import NimbleEmoji from './emoji/nimble-emoji';

export default class NotFound extends React.PureComponent {
  render() {
    const { data, emojiProps, i18n, notFound, notFoundEmoji } = this.props;

    const component = notFound && notFound() || React.createElement(
      'div',
      { className: 'emoji-mart-no-results' },
      NimbleEmoji(_extends({
        data: data
      }, emojiProps, {
        size: 38,
        emoji: notFoundEmoji,
        onOver: null,
        onLeave: null,
        onClick: null
      })),
      React.createElement(
        'div',
        { className: 'emoji-mart-no-results-label' },
        i18n.notfound
      )
    );

    return component;
  }
}

NotFound.propTypes /* remove-proptypes */ = {
  notFound: PropTypes.func.isRequired,
  emojiProps: PropTypes.object.isRequired
};