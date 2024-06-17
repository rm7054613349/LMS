import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import Header from 'src/view/layout/Header';
import Menu from 'src/view/layout/Menu';

function Layout(props) {
  const match = useRouteMatch();

  const menuVisible = useSelector(
    layoutSelectors.selectMenuVisible,
  );

  return (
    <div className="flex h-full dark:bg-gray-600">
      <Menu url={match.url} />
      <div
        className={`${
          menuVisible ? 'hidden' : 'flex'
        } sm:flex md:flex lg:flex bg-gray-100 dark:bg-gray-600 flex-col flex-auto min-h-screen overflow-x-hidden`}
      >
        <Header />
        <div className="p-6">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
