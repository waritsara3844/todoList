<template>
  <div class="q-pa-sm" style="max-width: 400px">
    <q-form @submit.prevent="onSubmit" @reset="onReset">
      <q-input
        filled
        v-model="todo"
        label="Type your list"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <div>
        <q-btn label="Add" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useTodoListStore } from "src/stores/todoListStore";
export default defineComponent({
  name: "TodoForm",
  data() {
    return {
      todo: null,
      store: useTodoListStore(),
    };
  },
  methods: {
    onSubmit() {
      if (this.todo.length == 0) return;
      this.store.addTodoList(this.todo);
      this.todo = "";
    },
    onReset() {
      this.todo = "";
    },
  },
});
</script>
