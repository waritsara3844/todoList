<template>
  <div
    class="q-pa-sm"
    style="max-width: 400px"
    v-if="store.todoList.length > 0"
  >
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="todo in store.todoList" :key="todo.id">
        <q-item-section :class="{ completedClass: todo.completed }">{{
          todo.item
        }}</q-item-section>
        <q-item-section avatar>
          <q-icon
            color="green"
            name="check"
            @click.stop="store.toggleCompletedTodoList(todo.id)"
          />
        </q-item-section>
        <q-item-section avatar>
          <q-icon
            color="red"
            name="delete"
            @click.stop="store.deleteTodoList(todo.id)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useTodoListStore } from "src/stores/todoListStore";
export default defineComponent({
  name: "TodoList",
  data() {
    return {
      store: useTodoListStore(),
    };
  },
});
</script>

<style>
.completedClass {
  text-decoration: line-through;
}
</style>
