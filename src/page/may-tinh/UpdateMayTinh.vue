<template>
  <!-- ================Login Box Area ================= -->
  <section class="login_box_area section_gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="login_form_inner">
            <h3>Update new Product</h3>
            <form @submit.prevent="updateComputer">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Tên</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="computer.name"
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
                    v-model="computer.price"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Miêu tả</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="computer.description"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-outline-success"
                @click="updateComputer()"
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
import { useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue'
import { ROUTES_CONSTANTS } from '../../constants/path'
import { computerList } from '../../service/laptop.api'

const route = useRoute()
const router = useRouter()

const id = parseInt(route.params.id)
let computer = reactive(computerList.find(mt => mt.id === id)) || {}

const updateComputer = () => {
  const index = computerList.findIndex(mt => mt.id === id)
  console.log(computerList[index])

  computerList[index].name = computer.name
  computerList[index].price = computer.price
  computerList[index].description = computer.description

  router.push(ROUTES_CONSTANTS.ADMIN.children.MAYTINH.path)
}
</script>
