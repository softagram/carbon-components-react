import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';

const { prefix } = settings;

const TextInputSkeleton = ({ hideLabel, id }) => {
  const label = hideLabel ? null : (
    // eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control
    <label className={`${prefix}--label ${prefix}--skeleton`} htmlFor={id} />
  );

  return (
    <>
      {label}
      <div className={`${prefix}--skeleton ${prefix}--text-input`} />
    </>
  );
};

TextInputSkeleton.propTypes = {
  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,
};

export default TextInputSkeleton;
