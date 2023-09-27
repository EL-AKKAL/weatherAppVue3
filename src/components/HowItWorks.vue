<template>
     <!-- <Teleport to="body"> -->
     <transition name="overlay">
          <div
               v-show="modalActive"
               class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
          >
               <transition name="item">
                    <div
                         v-if="modalActive"
                         class="relative p-7 pb-10 rounded-md bg-white self-start mt-32 max-w-screen-md"
                    >
                         <i
                              @click="$emit('close-modal')"
                              class="fa-solid fa-circle-xmark cursor-pointer hover:text-secondaryColor transition duration-150 text-bgColor text-2xl absolute top-4 right-4"
                         ></i>
                         <slot></slot>
                    </div>
               </transition>
          </div>
     </transition>
     <!-- </Teleport> -->
</template>

<script>
export default {
     name: "howItWorks",
     props: ["modalActive"],
};
</script>
<style scoped>
.overlay-enter-active,
.overlay-leave-active {
     transition: opacity 0.5s ease;
}

.overlay-enter-from,
.overlay-leave-to {
     opacity: 0;
}

.item-enter-active,
.item-leave-active {
     transition: all 0.3s ease-out;
}

.item-enter-from,
.item-leave-to {
     transform: translateY(50px);
     opacity: 0;
}
</style>
