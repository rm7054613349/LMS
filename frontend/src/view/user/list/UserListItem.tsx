import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import selectors from 'src/modules/user/userSelectors';

function UserListItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const label = (record) => {
    if (!record) {
      return null;
    }

    if (!record.fullName) {
      return record.email;
    }

    return `${record.fullName} <${record.email}>`;
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link
            className="text-blue-500 dark:text-blue-400 focus:text-blue-400 hover:text-blue-400"
            to={`/user/${record.id}`}
          >
            {label(record)}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{label(record)}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
}

UserListItem.propTypes = {
  value: PropTypes.any,
};

export default UserListItem;
