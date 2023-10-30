import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const useTodoListStore = defineStore("useTodoListStore", {
  state: () => ({
    todoList: useStorage("todoList", []),
    id: useStorage("id", 0),
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    addTodoList(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    deleteTodoList(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id != itemID;
      });
    },
    toggleCompletedTodoList(itemID) {
      const todo = this.todoList.find((result) => {
        return result.id == itemID;
      });
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
