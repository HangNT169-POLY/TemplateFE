<template>
  <!-- ================Login Box Area ================= -->
  <section class="login_box_area section_gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="login_form_inner">
            <h3>Add new Product</h3>
            <form @submit.prevent="addMayTinh">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Tên</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="mayTinh.name"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Giá</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="mayTinh.price"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Miêu tả</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="mayTinh.description"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-outline-success"
                @click="addMayTinh()"
              >
                Success
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  <br />
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTES_CONSTANTS } from '../../constants/path'
import { computerList } from '../../service/laptop.api'

const mayTinh = reactive({
  id: computerList.length + 1,
  name: '',
  price: '',
  description: '',
})
const router = useRouter()
const addMayTinh = () => {
  computerList.push(mayTinh)
  // console.log(computerList)
  router.push(ROUTES_CONSTANTS.ADMIN.children.MAYTINH.path)
}
</script>
