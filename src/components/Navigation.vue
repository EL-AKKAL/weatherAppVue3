<template>
     <header class="sticky top-0 bg-bgColor shadow-lg">
          <nav
               class="container flex flex-row items-start gap-4 text-textColor py-6"
          >
               <RouterLink :to="{ name: 'home' }">
                    <div class="flex items-center gap-3">
                         <i class="fa-solid fa-cloud-sun text-2xl"></i>
                         <p class="text-2xl">Smooth Weather</p>
                    </div>
               </RouterLink>

               <div class="flex gap-3 flex-1 justify-end">
                    <i
                         @click="closeIt"
                         class="fa-solid fa-circle-info text-xl hover:text-secondaryColor cursor-pointer transition duration-150"
                    ></i>
                    <i
                         @click="addCityToFavorite"
                         v-if="this.route.query.preview"
                         class="fa-solid fa-circle-plus text-xl hover:text-secondaryColor cursor-pointer transition duration-150"
                    ></i>
               </div>
               <HowItWorks @close-modal="closeIt" :modalActive="modalActive">
                    <div class="text-black">
                         <h1
                              class="text-2xl text-secondaryColor font-bold mb-1"
                         >
                              About:
                         </h1>
                         <p class="mb-4">
                              Smooth Weather allows you to track the current and
                              future weather of cities of your choosing.
                         </p>
                         <h2
                              class="text-2xl font-bold mb-1 text-secondaryColor"
                         >
                              How it works:
                         </h2>
                         <ol class="list-decimal list-inside mb-4">
                              <li>
                                   Search for your city by entering the name
                                   into the search bar.
                              </li>
                              <li>
                                   Select a city within the results, this will
                                   take you to the current weather for your
                                   selection.
                              </li>
                              <li>
                                   Track the city by clicking on the "+" icon in
                                   the top right. This will save the city to
                                   view at a later time on the home page.
                              </li>
                         </ol>

                         <h2
                              class="text-2xl font-bold mb-1 text-secondaryColor"
                         >
                              Removing a city
                         </h2>
                         <p>
                              If you no longer wish to track a city, simply
                              select the city within the home page. At the
                              bottom of the page, there will be am option to
                              delete the city.
                         </p>
                    </div>
               </HowItWorks>
          </nav>
     </header>
</template>

<script>
import { RouterLink, useRoute, useRouter } from "vue-router";
import HowItWorks from "./HowItWorks.vue";
import { uid } from "uid";

export default {
     name: "Navigation",
     data() {
          return {
               modalActive: false,
               savedCities: [],
               route: useRoute(),
               router: useRouter(),
          };
     },
     components: {
          HowItWorks,
     },
     methods: {
          closeIt() {
               console.log("ss");
               this.modalActive = !this.modalActive;
          },
          addCityToFavorite() {
               if (localStorage.getItem("savedCities")) {
                    this.savedCities = JSON.parse(
                         localStorage.getItem("savedCities")
                    );
               }
               const cityToAdd = {
                    id: uid(),
                    country: this.route.params.country,
                    city: this.route.params.city,
               };
               this.savedCities.push(cityToAdd);
               localStorage.setItem(
                    "savedCities",
                    JSON.stringify(this.savedCities)
               );
               let query = Object.assign({}, this.route.query);
               delete query.preview;
               query.id = cityToAdd.id;
               this.router.replace({ query });
               console.log("added");
          },
     },
};
</script>
