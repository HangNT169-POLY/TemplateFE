<template>
  <div class="container">
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-5">
              <h2>Quản lý sinh viên</h2>
              <section class="login_box_area section_gap">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="login_form_inner">
                        <form @submit.prevent="saveStudent">
                          <div class="mb-3 row">
                            <label
                              for="staticEmail"
                              class="col-sm-2 col-form-label"
                              >Tên</label
                            >
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                v-model="studentForm.name"
                              />
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label
                              for="inputPassword"
                              class="col-sm-2 col-form-label"
                              >Tuổi</label
                            >
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                v-model="studentForm.age"
                              />
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-2 col-form-label"
                              >Ngành học</label
                            >
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                v-model="studentForm.major"
                              />
                            </div>
                            <div class="mb-3 row">
                              <label class="col-sm-2 col-form-label"
                                >Giới tính</label
                              >
                              <div class="col-sm-10">
                                <input
                                  type="radio"
                                  :value="true"
                                  v-model="studentForm.gender"
                                  name="gioiTinh"
                                />
                                Nam
                                <input
                                  type="radio"
                                  :value="false"
                                  v-model="studentForm.gender"
                                  name="gioiTinh"
                                />
                                Nữ
                              </div>
                            </div>
                          </div>
                          <button type="submit" class="btn btn-outline-success">
                            {{ editing ? 'Cập nhật' : 'Thêm' }}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Ngành học</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in students" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.major }}</td>
              <td>{{ item.gender === true ? 'Nam' : 'Nữ' }}</td>
              <td>
                <a
                  class="btn btn-outline-danger"
                  href="#"
                  role="button"
                  @click="removeStudent(item.id)"
                >
                  Remove</a
                >&nbsp;
                <RouterLink
                  class="btn btn-outline-primary"
                  :to="`/sinh-vien/detail/${item.id}`"
                  >Detail</RouterLink
                >
                &nbsp;
                <a
                  class="btn btn-outline-warning"
                  href="#"
                  role="button"
                  @click="editStudent(item)"
                >
                  Update</a
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
import { onMounted, reactive, ref } from 'vue'
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from '../../service/student.api'

const students = ref([])
const editing = ref(false)

const fetchStudent = async () => {
  students.value = await getStudents()
}

const removeStudent = async id => {
  console.log(id)

  await deleteStudent(Number(id))
  await fetchStudent()
}

let studentForm = reactive({
  id: '',
  name: '',
  age: '',
  gender: false,
  major: '',
})

const resetForm = () => {
  studentForm.name = ''
  studentForm.age = ''
  studentForm.gender = true
  studentForm.major = ''
}
const editStudent = student => {
  studentForm = {
    ...student,
    gender: Boolean(student.gender), // Chuyển đổi `gender` thành boolean
  }
  editing.value = true
}
const saveStudent = async () => {
  studentForm.gender = Boolean(studentForm.gender) // Chuyển đổi về boolean

  if (editing.value) {
    await updateStudent(studentForm.id, studentForm)
  } else {
    const maxId =
      students.value.length > 0 ? Math.max(...students.value.map(s => s.id)) : 0
    studentForm.id = String(maxId + 1)
    await createStudent(studentForm)
  }
  editing.value = false
  resetForm()
  await fetchStudent()
}
onMounted(fetchStudent)
</script>
