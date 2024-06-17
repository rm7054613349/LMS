import PropTypes from 'prop-types';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

export function InputFormItem(props) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    type,
    placeholder,
    autoFocus,
    autoComplete,
    required,
    externalErrorMessage,
    disabled,
    endAdornment,
  } = props;

  const {
    register,
    errors,
    formState: { touched, isSubmitted },
  } = useFormContext();

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage,
  );

  return (
    <div>
      <div>
        {Boolean(label) && (
          <label
            className={`block text-sm text-gray-800 dark:text-gray-200`}
            htmlFor={inputId}
          >
            {label}{' '}
            {required ? (
              <span className="text-sm text-red-400">
                *
              </span>
            ) : null}
          </label>
        )}

        <div className="flex flex-nowrap items-baseline">
          <input
            id={inputId}
            name={name}
            type={type}
            ref={register}
            onChange={(event) => {
              props.onChange &&
                props.onChange(event.target.value);
            }}
            onBlur={(event) => {
              props.onBlur && props.onBlur(event);
            }}
            placeholder={placeholder || undefined}
            autoFocus={autoFocus || undefined}
            autoComplete={autoComplete || undefined}
            disabled={disabled}
            className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ${
              errorMessage
                ? 'border-red-400 text-red-600'
                : ''
            }`}
          />
          {endAdornment && (
            <span className="ml-2 text-gray-700">
              {endAdornment}
            </span>
          )}
        </div>
      </div>
      <div className="text-red-600 text-sm mt-2">
        {errorMessage}
      </div>
      {Boolean(hint) && (
        <div className="text-gray-500 text-sm mt-2">
          {hint}
        </div>
      )}
    </div>
  );
}

InputFormItem.defaultProps = {
  type: 'text',
  required: false,
};

InputFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  endAdornment: PropTypes.any,
  onChange: PropTypes.any,
};

export default InputFormItem;
