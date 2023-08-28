interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Sales Manager', 'Admin'],
  tenantName: 'Organization',
  applicationName: 'Cars',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
