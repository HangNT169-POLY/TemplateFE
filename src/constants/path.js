// Day la noi liet ke cac duong dan FE => client
export const ROUTES_CONSTANTS = {
  ADMIN: {
    path: '/admin',
    name: 'Admin',
    children: {
      MAYTINH: {
        path: '/may-tinh',
        name: 'May-Tinh',
      },
      MAYTINH_DETAIL: {
        path: '/may-tinh/detail/:id',
        name: 'May-Tinh-Detail',
      },
      MAYTINH_UPDATE: {
        path: '/may-tinh/update/:id',
        name: 'May-Tinh-Update',
      },
      MAYTINH_ADD: {
        path: '/may-tinh/add',
        name: 'May-Tinh-Add',
      },
    },
  },
  SINHVIEN: {
    path: '/sinh-vien',
    name: 'Sinh-Vien',
    children: {
      SINHVIEN_DETAIL: {
        path: '/sinh-vien/detail/:id',
        name: 'Sinh-Vien-Detail',
      },
    },
  },
}
