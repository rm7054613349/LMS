import { i18n } from 'src/i18n';
import fields from 'src/modules/product/importer/productImporterFields';
import selectors from 'src/modules/product/importer/productImporterSelectors';
import ProductService from 'src/modules/product/productService';
import importerActions from 'src/modules/shared/importer/importerActions';

const productImporterActions = importerActions(
  'PRODUCT_IMPORTER',
  selectors,
  ProductService.import,
  fields,
  i18n('entities.product.importer.fileName'),
);

export default productImporterActions;
