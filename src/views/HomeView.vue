<script>
import axios from "axios";
export default {
     data() {
          return {
               searchValue: "",
               queryTime: null,
               APIKey: "dfbecde9c7ca1faa36ed29f04d911f0e",
               searchResults: null,
          };
     },
     computed() {
          return {
               APIUrl: `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${this.APIKey}&units=metric`,
          };
     },
     methods: {
          getSearchResults() {
               this.queryTime = setTimeout(async () => {
                    if (this.searchValue === "") {
                         this.searchResults = null;
                         return;
                    }
                    const result = await axios.get(this.APIUrl);
                    this.searchResults = result.data;
                    console.log(this.searchResults);
               }, 500);
          },
     },
};
</script>

<template>
     <main class="container">
          <div class="pb-8 text-textColor pt-4">
               <input
                    @input="getSearchResults"
                    v-model="searchValue"
                    type="text"
                    placeholder="Search for City"
                    class="bg-transparent focus:border-b-bgColor border-b border-b-textColor w-full px-1 py-2 focus:outline-none focus:shadow-lg transition duration-150"
               />
          </div>
     </main>
</template>
