<template>
    <div class="container box-border">
        <div class="flex flex-row justify-between my-8 mx-8 z-0">
            <img src="src/assets/images/logo.svg" alt="Website logo" />
            <button @click="toggleIsMenuVisible">
                <img src="src/assets/images/icon-menu.svg" alt="icon menu" />
            </button>
            <!--Menu-->
            <div v-if="isMenuVisible == true"
                class="flex flex-col gap-2 items-start pl-8 py-4 absolute right-0 top-0 left-50 h-[52rem] w-60 z-50 bg-white shadow-2xl">
                <button @click="toggleIsMenuVisible" class="relative left-40 mb-8">
                    <img src="src/assets/images/icon-close-menu.svg" alt="close menu icon" />
                </button>
                <!--Features dropdown-->
                <button @click="toggleIsFeaturesVisible" class="flex flex-row gap-2 items-baseline">
                    <p class="text-gray-600 hover:text-black font-bold font-sans">
                        Features
                    </p>
                    <span v-if="isFeaturesVisible == false">
                        <img src="src/assets/images/icon-arrow-down.svg" alt="arrow down icon" />
                    </span>
                    <span v-else>
                        <img src="src/assets/images/icon-arrow-up.svg" alt="arrow up icon" />
                    </span>
                </button>
                <!--Features items-->
                <div v-show="isFeaturesVisible">
                    <ul class="flex flex-col gap-4 my-2 ml-8 items-baseline">
                        <li class="flex flex-row-reverse gap-2">
                            <a class="text-gray-400 hover:text-gray-700 font-sans font-normal" href="">Todo List</a>
                            <span>
                                <img src="src/assets/images/icon-todo.svg" alt="todo icon" />
                            </span>
                        </li>
                        <li class="flex flex-row-reverse gap-2">
                            <a class="text-gray-400 hover:text-gray-700 font-sans font-normal" href="">Calendar</a>
                            <span>
                                <img src="src/assets/images/icon-calendar.svg" alt="calendar icon" />
                            </span>
                        </li>
                        <li class="flex flex-row-reverse gap-2">
                            <a class="text-gray-400 hover:text-gray-700 font-sans font-normal" href="">Reminders</a>
                            <span>
                                <img src="src/assets/images/icon-reminders.svg" alt="reminders icon" />
                            </span>
                        </li>
                        <li class="flex flex-row-reverse gap-2">
                            <a class="text-gray-400 hover:text-gray-700 font-sans font-normal" href="">Planning</a>
                            <span>
                                <img src="src/assets/images/icon-planning.svg" alt="planning icon" />
                            </span>
                        </li>
                    </ul>
                </div>
                <!--End of features items-->
                <!--End of features dropdown-->

                <!--Company dropdown-->
                <button @click="toggleIsCompanyVisible" class="flex flex-row gap-2 items-baseline">
                    <p class="text-gray-600 hover:text-black font-bold font-sans">
                        Company
                    </p>
                    <span v-if="isCompanyVisible == false">
                        <img src="src/assets/images/icon-arrow-down.svg" alt="arrow down icon" />
                    </span>
                    <span v-else>
                        <img src="src/assets/images/icon-arrow-up.svg" alt="arrow up icon" />
                    </span>
                </button>
                <!--Company items-->
                <div v-show="isCompanyVisible">
                    <ul class="flex flex-col gap-4 my-2 ml-8 items-baseline">
                        <li>
                            <a class="text-gray-400 hover:text-gray-700 font-sans font-normal href=">History</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-gray-700 font-sans font-normal href=">Our Team</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-gray-700 font-sans font-normal href=">Blog</a>
                        </li>
                    </ul>
                </div>
                <!--End of company items-->
                <!--End of company dropdown-->
                <a class="text-gray-600 hover:text-black font-bold font-sans" href="">Careers</a>
                <a class="text-gray-600 hover:text-black font-bold font-sans mb-10" href="">About</a>
                <!--Login buttons-->
                <div class="flex flex-col items-center gap-2">
                    <button>
                        <a class="text-gray-600 hover:text-black font-semibold font-sans">
                            Login
                        </a>
                    </button>
                    <button
                        class="
                        bg-transparent 
                        hover:bg-black 
                        hover:border-black 
                        border-2 
                        border-gray-500 
                        rounded-xl 
                        px-12 py-2 
                        text-gray-600 
                        hover:text-white 
                        font-semibold 
                        font-sans"
                        >
                        Register
                    </button>
                </div>
                <!--End of login buttons-->
            </div>
            <!--End of menu-->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

let isMenuVisible: Ref<boolean> = ref(false);
let isFeaturesVisible: Ref<boolean> = ref(false);
let isCompanyVisible: Ref<boolean> = ref(false);

function toggleIsCompanyVisible() {
    isCompanyVisible.value = !isCompanyVisible.value;
}

function toggleIsFeaturesVisible() {
    isFeaturesVisible.value = !isFeaturesVisible.value;
}

function toggleIsMenuVisible() {
    isMenuVisible.value = !isMenuVisible.value;
}
</script>
