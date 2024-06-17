import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import FilesUploader from 'src/view/shared/uploaders/FilesUploader';

function FilesFormItem(props) {
  const {
    label,
    name,
    hint,
    storage,
    formats,
    max,
    required,
    externalErrorMessage,
  } = props;

  const {
    register,
    errors,
    formState: { touched, isSubmitted },
    setValue,
    watch,
  } = useFormContext();

  useEffect(() => {
    register({ name });
  }, [register, name]);

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage,
  );

  return (
    <div>
      {Boolean(label) && (
        <label
          className={`block text-sm text-gray-800 dark:text-gray-200`}
        >
          {label}{' '}
          {required ? (
            <span className="text-sm text-red-400">*</span>
          ) : null}
        </label>
      )}

      <FilesUploader
        storage={storage}
        formats={formats}
        value={watch(name)}
        onChange={(value) => {
          setValue(name, value, {
            shouldValidate: true,
            shouldDirty: true,
          });
          props.onChange && props.onChange(value);
        }}
        max={max}
      />

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

FilesFormItem.defaultProps = {
  max: undefined,
  required: false,
};

FilesFormItem.propTypes = {
  storage: PropTypes.object.isRequired,
  formats: PropTypes.any,

  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  formItemProps: PropTypes.object,
  max: PropTypes.number,
};

export default FilesFormItem;
