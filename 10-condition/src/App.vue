<script setup>
import { ref, reactive } from 'vue'
const isLogin = ref(true)
const toggleLogin = () => {
  isLogin.value = !isLogin.value
}
const userStatus = ref('online')
const changeStatus = () => {
  if (userStatus.value === 'online') {
    userStatus.value = 'away'
  } else if (userStatus.value === 'away') {
    userStatus.value = 'offline'
  } else {
    userStatus.value = 'online'
  }
}
const isVisible = ref(true)
const changeVisibility = () => {
  isVisible.value = !isVisible.value
}
const shoppingItem = ref([
  { name: 'sp1', price: 1000 },
  { name: 'sp2', price: 10001 },
  { name: 'sp3', price: 10002 },
  { name: 'sp4', price: 10003 },
])
const user = ref({
  firstName: 'Hoang',
  lastName: 'Hoang',
  age: 25,
  address: 'HN',
  email: 'hoang@gmail.com',
  phone: '0909090909',
  isActive: true,
})
const users = ref([
  {
    firstName: 'Hoang',
    lastName: 'Hoang',
    age: 25,
    address: 'HN',
    email: 'hoang@gmail.com',
    phone: '0909090909',
    isActive: true,
  },
  {
    firstName: 'Hoang1',
    lastName: 'Hoang1',
    age: 25,
    address: 'HN1',
    email: 'f@gmail.com',
    phone: 'fd',
    isActive: false,
  },
])
const toDos = reactive([
  { id: 1, name: 'hoc lap trinh', isCompleted: false },
  { id: 2, name: 'hoc vue', isCompleted: true },
  { id: 3, name: 'hoc react', isCompleted: false },
  { id: 4, name: 'hoc angular', isCompleted: true },
  { id: 5, name: 'hoc html', isCompleted: false },
  { id: 6, name: 'hoc css', isCompleted: true },
  { id: 7, name: 'hoc js', isCompleted: false },
])
let toDoObject = reactive({
  name: '',
  isCompleted: false,
})
const newToDo = ref('')
const isCompletedValue = ref(false)
const addToDo = () => {
  if (newToDo.value.trim() === '') {
    return ''
  }
  const toDo = {
    id: toDos.length + 1,
    name: newToDo.value,
    isCompleted: isCompletedValue.value,
  }
  toDos.push(toDo)
  newToDo.value = ''
  isCompletedValue.value = false
}
const deleteToDo = index => {
  toDos.splice(index, 1)
}
const detailToDo = id => {
  toDoObject.name = toDos.find(item => item.id === id).name
  toDoObject.isCompleted = toDos.find(item => item.id === id).isCompleted
  toDoObject.id = id
  console.log(toDoObject)
}

const editToDo = id => {
  const index = toDos.findIndex(item => item.id === id)
  toDos[index].name = toDoObject.name
  toDos[index].isCompleted = toDoObject.isCompleted
  toDoObject.name = ''
  toDoObject.isCompleted = false
}
</script>

<!-- Rendering theo dieu kien:
 Co 2 directive dung nhieu nhat: v-if & v-show 
 v-if: muon hien thi hoac loai bo phan tu nao do ra khoi dom.
 Dieu kien dung => hien thi trong dom ( tao va loai bo phan tu ra khoi dom theo dieu kien )
 v-show: dung de hien thi va an phan tu trong dom. Tuy nhien hien thi khac v-if.
 Neu v-if: thay doi phan tu khoi dom thi no se render lai.
 Con v-show: thay doi phan tu trong dom thi no se khong render lai. => chi them thuoc tinh css la disable hoac khong
 Vay cau hoir: Khi nao nen dung v-if khi nao dung v-show. 
 V-if: Chi dung khi muon them/xoa phan tu ra khoi dom
 V-Show: Chi muon hien thi hoac an no di.
 Luu y: Voi truong hop render lai thuong xuyen => Nen dung v-if (Chi phi lon hon)
-->
<!-- V-for: Danh sach trong Vue: Cho phep lap 1 danh sach:
  Lap qua mang
  Lap qua doi tuong
  Su dungj vs template de k tao ra the thua
  Truy cap vao chi so index
  Su dung key -->
<template>
  <main>
    <div>
      <h1 v-if="isLogin">Chao mung cac ban da dang nhap vao he thong</h1>
      <h1 v-else>User:</h1>
      <button @click="toggleLogin">
        {{ isLogin ? 'Dang xuat' : 'Dang nhap' }}
      </button>
      <br />
      <h1 v-if="userStatus === 'online'">User status: online</h1>
      <h1 v-else-if="userStatus === 'away'">User status: away</h1>
      <h1 v-else>User status: offline</h1>
      <br />
      <button @click="changeStatus">Change status user</button>
      <h1>V-show</h1>
      <h1 v-show="isVisible">Noi dung nay an hoac hien thi</h1>
      <button @click="changeVisibility">Change</button>
    </div>
    <div>
      <h1>Danh sach san pham - V-for</h1>
      <ul>
        <!-- Nen co key se co 1 bai noi ve tai sao can co key trong nay -->
        <li v-for="item in shoppingItem" :key="item.name">
          {{ item.name }} - {{ item.price }}
        </li>
      </ul>
      <h1>Hien thi day so</h1>
      <span v-for="n in 10" :key="n">{{ n }}</span>
    </div>
    <div>
      <h1>Thong tin sv - v-for (object)</h1>
      <ul>
        <!-- key: key cua object 
         value: gia tri cua key do
         -->
        <li v-for="(value, key, index) in user" :key="key">
          {{ key }}:{{ value }}:{{ index }}
        </li>
      </ul>
    </div>
    <div>
      <h1>Thong tin cac sv - v-for (mang object)</h1>
      <ul>
        <!-- template => k sinh ra element -->
        <template v-for="(user, index) in users" :key="user.name">
          <li v-if="user.isActive" :key="user.name">
            {{ user.firstName }} - {{ user.isActive ? 'Active' : 'Inactive' }} -
            {{ index }}
          </li>
        </template>
      </ul>
    </div>
    <!-- Tai sao phai dung key:
     - Key: v-for: Giup cho view xac dinh nut trong dom la nut duy nhat. De co the theo doi su thay doi cua phan tu cua ds do khi du lieu thay doi
     => Toi uu hoa qua trinh cap nhat dom => Dung view co the tai su dung va sap xep 1 cach hieu qua thay vi tao ra hoac xoa cac phan tu k can thiet
     => Quan ly hieu suat : Khi ma ds thay doi => view co gang hieu qua nhat co the de cap nhat cac phan tu. Neu k co key view se su dung cac thuat toan tuong doi
     de cap nhat ds => dan toi tai su dung k chinh xac => co the gay ra loi
     => Tai su dung va cap nhat can thiet thay vi render lai toan bo ds
     Mot so luu y: Key nen la gia tri duy nhat ( thuong la do BE tra ra ) => Khong nen dung chi so cua mang vi ds thay doi => phan anh phan tu k chinh xac
     => Hieu suat kem => KHONG THAY DOI KY ( KHONG NEN PHU THUOC VAO DU LIEU THAY DOI) => KEY THAY DOI => VIEW SE PHA HOAI CAC PHAN TU THAY VI RENDER CAP NHAT LAI -->

    <div>
      <h1>To-do - app</h1>
      <div>
        Ten cong viec:
        <!-- @keyup.enter="addToDo"  : an phim enter cung ra value -->
        <input type="text" v-model="newToDo" @keyup.enter="addToDo" />
        Completed: <input type="checkbox" v-model="isCompletedValue" />
        <button @click="addToDo">Add</button>
      </div>
      <div>
        <h1>Sua thong tin</h1>
        Ten cong viec:
        <!-- @keyup.enter="addToDo"  : an phim enter cung ra value -->
        <input type="text" v-model="toDoObject.name" />
        Completed:
        <input type="checkbox" v-model="toDoObject.isCompleted" />
        <button @click="editToDo(toDoObject.id)">Update</button>
      </div>
      <ul>
        <template v-for="(item, index) in toDos" :key="item.id">
          <li>
            {{ index }} - {{ item.name }} -
            {{ item.isCompleted ? 'Completed' : 'Not completed' }}
            <button @click="deleteToDo(index)">Xoa</button>
            <button @click="detailToDo(item.id)">Detail</button>
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>
