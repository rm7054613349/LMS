import { combineReducers } from 'redux';
import destroy from 'src/modules/product/destroy/productDestroyReducers';
import form from 'src/modules/product/form/productFormReducers';
import importerReducer from 'src/modules/product/importer/productImporterReducers';
import list from 'src/modules/product/list/productListReducers';
import view from 'src/modules/product/view/productViewReducers';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
