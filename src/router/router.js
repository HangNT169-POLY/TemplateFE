import { ROUTES_CONSTANTS } from '../constants/path'
import AddMayTinh from '../page/may-tinh/AddMayTinh.vue'
import DetailMayTinh from '../page/may-tinh/DetailMayTinh.vue'
import MayTinh from '../page/may-tinh/MayTinh.vue'
import UpdateMayTinh from '../page/may-tinh/UpdateMayTinh.vue'
import DetailSinhVien from '../page/sinh-vien/DetailSinhVien.vue'
import SinhVien from '../page/sinh-vien/SinhVien.vue'
import TrangChu from '../page/TrangChu.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routers = [
  {
    path: '/',
    name: 'Trang-Chu',
    component: TrangChu,
  },
  {
    path: ROUTES_CONSTANTS.ADMIN.children.MAYTINH.path,
    name: ROUTES_CONSTANTS.ADMIN.children.MAYTINH.name,
    component: MayTinh,
  },
  {
    path: ROUTES_CONSTANTS.ADMIN.children.MAYTINH_DETAIL.path,
    name: ROUTES_CONSTANTS.ADMIN.children.MAYTINH_DETAIL.name,
    component: DetailMayTinh,
  },
  {
    path: ROUTES_CONSTANTS.ADMIN.children.MAYTINH_UPDATE.path,
    name: ROUTES_CONSTANTS.ADMIN.children.MAYTINH_UPDATE.name,
    component: UpdateMayTinh,
  },
  {
    path: ROUTES_CONSTANTS.ADMIN.children.MAYTINH_ADD.path,
    name: ROUTES_CONSTANTS.ADMIN.children.MAYTINH_ADD.name,
    component: AddMayTinh,
  },
  {
    path: ROUTES_CONSTANTS.SINHVIEN.path,
    name: ROUTES_CONSTANTS.SINHVIEN.name,
    component: SinhVien,
  },
  {
    path: ROUTES_CONSTANTS.SINHVIEN.children.SINHVIEN_DETAIL.path,
    name: ROUTES_CONSTANTS.SINHVIEN.children.SINHVIEN_DETAIL.name,
    component: DetailSinhVien,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routers,
})
