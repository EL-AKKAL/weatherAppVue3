<script>
import axios from "axios";
import { useRouter } from "vue-router";
import CitiesList from "../components/CitiesList.vue";
export default {
     data() {
          return {
               searchValue: "",
               queryTime: null,
               CityAPIKey: "48756ac9c7msh5d5d43457a587cdp1a4db9jsn31a741d72640",
               CityAPIUrl: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
               cities: null,
               errorMessage: false,
               router: useRouter(),
          };
     },
     methods: {
          getSearchResults() {
               clearTimeout(this.queryTime);
               this.queryTime = setTimeout(async () => {
                    if (this.searchValue === "") {
                         this.cities = null;
                         return;
                    }
                    const options = {
                         method: "GET",
                         url: this.CityAPIUrl,
                         params: { namePrefix: this.searchValue },
                         headers: {
                              "X-RapidAPI-Key": this.CityAPIKey,
                              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
                         },
                    };

                    try {
                         const response = await axios.request(options);
                         this.cities = response.data.data;
                         console.log(response.data.data);
                    } catch (error) {
                         this.errorMessage = true;
                         this.cities = null;
                         console.error(error);
                    }
               }, 500);
          },
          previewCity(cityName, countryName) {
               this.router.push({
                    name: "city",
                    params: {
                         country: countryName,
                         city: cityName,
                    },
                    query: {
                         country: countryName,
                         city: cityName,
                         preview: true,
                    },
               });
          },
     },
     components: {
          CitiesList,
     },
};
</script>

<template>
     <main class="container">
          <div class="pb-8 text-textColor pt-4 relative">
               <input
                    @input="getSearchResults"
                    v-model="searchValue"
                    type="text"
                    placeholder="Search for City"
                    class="bg-transparent focus:border-b-bgColor border-b border-b-textColor w-full px-1 py-2 focus:outline-none focus:shadow-lg transition duration-150"
               />

               <ul
                    v-if="this.searchValue != ''"
                    class="w-full absolute bg-transparent text-textColor py-2 px-1 top-[65px] left-0"
               >
                    <li
                         v-if="this.errorMessage"
                         key="0000000"
                         class="w-full py-2 bg-secondaryColor/40 px-3 self-start mb-2 cursor-pointer transition duration-300 hover:bg-secondaryColor/60 rounded-md"
                    >
                         <p class="text-base text-textColor/40 capitalize">
                              Something went wrong , please try again
                         </p>
                    </li>
                    <li
                         v-if="!serverError && this.cities?.length === 0"
                         key="000000000"
                         class="w-full py-2 bg-secondaryColor/40 px-3 self-start mb-2 cursor-pointer transition duration-300 hover:bg-secondaryColor/60 rounded-md"
                    >
                         <p class="text-base text-textColor/40 capitalize">
                              No results found , try a different term
                         </p>
                    </li>
                    <template v-else>
                         <li
                              v-for="city in this.cities"
                              @click="previewCity(city.name, city.country)"
                              :key="city.id"
                              class="w-full py-2 bg-secondaryColor/40 px-3 self-start mb-2 cursor-pointer transition duration-300 hover:bg-secondaryColor/60 rounded-md"
                         >
                              <h3 class="text-lg">{{ city.name }}</h3>
                              <p class="text-base text-textColor/40">
                                   {{ city.country }}
                              </p>
                         </li>
                    </template>
               </ul>

               <div class="flex items-start py-6 w-full gap-4 flex-col">
                    <Suspense>
                         <CitiesList />
                         <template #fallback>
                              <p>loading...</p>
                         </template>
                    </Suspense>
               </div>
          </div>
     </main>
</template>
