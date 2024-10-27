<script setup>
import { useRoute } from 'vue-router'
import { computerList } from '../../service/laptop.api'

const route = useRoute()
const id = parseInt(route.params.id, 10)
const computer = computerList.find(mt => mt.id === id)

console.log('Computer:', computer.name)
</script>
<template>
  <section class="login_box_area section_gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="login_form_inner">
            <h3>Detail Product</h3>
            Tên máy tính: <span>{{ computer.name }}</span>
            <br />
            Giá máy tính: <span>{{ computer.price }}</span>
            <br />
            Miêu tả máy tính: <span>{{ computer.description }}</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
