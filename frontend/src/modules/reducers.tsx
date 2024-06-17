import { connectRouter } from 'connected-react-router';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import auth from 'src/modules/auth/authReducers';
import layout from 'src/modules/layout/layoutReducers';
import product from 'src/modules/product/productReducers';
import settings from 'src/modules/settings/settingsReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';

import { combineReducers } from 'redux';
import plan from 'src/modules/plan/planReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,

    product,
  });
