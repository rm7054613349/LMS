/// File is generated from https://studio.fabbuilder.com - product

export default (app) => {
  app.post(
    `/tenant/:tenantId/product`,
    require('./productCreate').default,
  );
  app.put(
    `/tenant/:tenantId/product/:id`,
    require('./productUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/product/import`,
    require('./productImport').default,
  );
  app.delete(
    `/tenant/:tenantId/product`,
    require('./productDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/product/autocomplete`,
    require('./productAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/product/count`,
    require('./productCount').default,
  );
  app.get(
    `/tenant/:tenantId/product`,
    require('./productList').default,
  );
  app.get(
    `/tenant/:tenantId/product/:id`,
    require('./productFind').default,
  );
};
/// File is generated from https://studio.fabbuilder.com - product
