import { defineStore } from 'pinia';
import axios from "axios";

export const Global = defineStore('global', {
  state: () => ({
    containerDirectories: [],
    containerFields: [],
  }),
  actions: {
    setGlobalData() {
      axios.get('global/data', {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token')
        }
      }).then((response) => response.data).then((response) => {
        if (response.directories) {
          this.containerDirectories = response.directories;
        }
        if (response.fields) {
          this.containerFields = response.fields;
        }
      }).catch((error) => {
        console.log(error);
      });
    },
  }
});