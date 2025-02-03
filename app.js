import { createApp, ref } from "https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.esm-browser.prod.js";
import { songs } from "./songs.js";

createApp({
    setup() {
        const selectedSong = ref(null);
        return { songs, selectedSong };
    }
}).mount("#app");
