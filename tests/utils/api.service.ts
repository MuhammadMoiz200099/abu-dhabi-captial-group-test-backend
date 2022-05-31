const getApi = (url: string): string => `/api/v1/${url}`;

const customer = {
  customer: getApi('/customers'),
}

export {
  customer,
};
