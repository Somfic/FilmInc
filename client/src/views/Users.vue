<template>
  <div class="users">
    <Navbar></Navbar>
    <div class="row">
      <div class="col-3">
        <div class="list-group">
          <div class="list-group-item list-group-item-action" @click="newItem">
            <i class="fas fa-plus-circle pr-3" />Nieuw
          </div>
          <div
            class="list-group-item list-group-item-action"
            v-for="item in users"
            :key="item"
            :class="{ active: item._id == user._id }"
            @click="setActive(item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="col-auto">
        <div class="form-group row">
          <label for="name" class="col-form-label col-sm-4">Naam</label>
          <div class="col-sm-8">
            <input class="form-control" type="text" v-model="user.name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="name" class="col-form-label col-sm-4">Inlog</label>
          <div class="col-sm-8">
            <input class="form-control" type="number" v-model="user.uid" />
          </div>
        </div>
        <div class="form-group row">
          <label for="name" class="col-form-label col-sm-4">Pincode</label>
          <div class="col-sm-8">
            <input
              class="form-control"
              type="password"
              placeholder="••••"
              pattern="[0-9]{4}"
              inputmode="numeric"
              v-model="user.code"
            />
          </div>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="user.isAdmin"
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            Is Administrator
          </label>
        </div>
        <div class="row mt-3">
          <Action
            v-if="isNew"
            :actions="newActions"
            @executed="update"
          ></Action>
          <Action
            v-if="!isNew"
            :actions="editActions"
            @executed="update"
          ></Action>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Action from "../components/action/Action";
import userService from "../services/users";

export default {
  name: "Users",
  data() {
    return {
      users: [],
      user: {},
      passcode: "",
      isNew: true,
      newActions: [
        {
          message: "Maak gebruiker aan",
          class: "btn-dark",
          action: () => userService.create(this.user),
        },
      ],
      editActions: [
        {
          message: "Sla wijzigingen op",
          class: "btn-dark",
          action: () => userService.edit(this.user._id, this.user),
        },
      ],
    };
  },
  methods: {
    newItem() {
      this.user = {};
      this.isNew = true;
    },

    setActive(item) {
      this.isNew = false;
      this.user = item;
    },

    update() {
      userService.get().then((res) => {
        this.users = res.data;
      });
    },
  },
  async created() {
    this.update();
  },
  components: {
    Navbar,
    Footer,
    Action,
  },
};
</script>
