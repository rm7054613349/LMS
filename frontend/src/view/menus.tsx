import {
  faChevronRight,
  faCog,
  faCreditCard,
  faHistory,
  faThLarge,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import config from 'src/config';
import { i18n } from 'src/i18n';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: faCreditCard,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: faUserPlus,
  },

  {
    path: '/audit-logs',
    icon: faHistory,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: faCog,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },
  {
    path: '/product',
    permissionRequired: permissions.productRead,
    icon: faChevronRight,
    label: i18n('entities.product.menu'),
  },
].filter(Boolean);
