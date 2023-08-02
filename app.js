const app = Vue.createApp({
    data() {
        return {
            message: "Hello World !!!",
            whichPage: "Home",
            pages: ["Home", "Page1", "Page2", "Page3"],
        };
    },
    computed: {
        whichPageComponent() {
            return `my-${this.whichPage.toLowerCase()}`;
        },
    },
});

app.component("my-home", {
    template: `
    <div class="component">
        <div>從props 來的 => {{ parentMessage }}</div>
        <div>自己的 msg => {{ message }}</div>
    </div>
    `,
    props: ["parentMessage"],
    data() {
        return {
            message: "Welcome my world ~~",
        };
    },
});

app.component("my-page1", {
    template: `
    <h1><mark class="skyblue">{{ message }}</mark></h1>
    `,
    data() {
        return {
            message: "This is my Vue practise !!!",
        };
    },
});

app.component("my-page2", {
    template: `
    <div class="p2">
        <h1>What's your name ?</h1>
        <input type="text" v-model="name">
        <p>My name is {{ name }}.</p>
    </div>
    `,
    data() {
        return {
            name: "",
        };
    },
});

app.component("my-page3", {
    template: `
    <div class="p3">
        <h1>What's your name ?</h1>
        <input type="text" v-model="name">
        <p>My name is {{ name }}.</p>
    </div>
    `,
    data() {
        return {
            name: "",
        };
    },
});
app.mount("#app");
