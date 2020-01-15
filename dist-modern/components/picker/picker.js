import _extends from '../../polyfills/extends';
import React from 'react';

import data from '../../../data/all.json';
import NimblePicker from './nimble-picker';

import { PickerPropTypes } from '../../utils/shared-props';
import { PickerDefaultProps } from '../../utils/shared-default-props';

export default class Picker extends React.PureComponent {
  render() {
    return React.createElement(NimblePicker, _extends({}, this.props, this.state));
  }
}

Picker.propTypes /* remove-proptypes */ = PickerPropTypes;
Picker.defaultProps = _extends({}, PickerDefaultProps, { data });