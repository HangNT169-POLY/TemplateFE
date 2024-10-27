<template>
  <div class="container">
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-5">
              <h2>Product <b style="color: #fff">Management</b></h2>
            </div>
            <div class="col-sm-7">
              <RouterLink class="btn btn-outline-secondary" to="/may-tinh/add"
                >Add New Product</RouterLink
              >
            </div>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in listMayTinh" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.price }}</td>
              <td>
                <a
                  class="btn btn-outline-danger"
                  href="#"
                  role="button"
                  @click="removeMayTinh(item.id)"
                >
                  Remove</a
                >&nbsp;
                <RouterLink
                  class="btn btn-outline-primary"
                  :to="`/may-tinh/detail/${item.id}`"
                  >Detail</RouterLink
                >
                &nbsp;
                <RouterLink
                  class="btn btn-outline-warning"
                  :to="`/may-tinh/update/${item.id} `"
                  >Update</RouterLink
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { computerList } from '../../service/laptop.api'

const listMayTinh = reactive(computerList)

const removeMayTinh = id => {
  const index = listMayTinh.findIndex(item => item.id === id)
  listMayTinh.splice(index, 1)
}
</script>
