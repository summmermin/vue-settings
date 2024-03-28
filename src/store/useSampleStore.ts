import {defineStore} from "pinia";

export const useLoginStore = defineStore("sampleInfo", {
    state: () => ({
        sampleInfo: "",
    }),
    actions: {
        setSample(val: any) {
            this.sampleInfo = val;
        },
    },
});
