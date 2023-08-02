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
            /*====== toLowerCase() 轉換英文小寫 ======*/
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
        <select v-model="inputType">
            <option>text</option>
            <option>radio</option>
            <option>select</option>
        </select>
        <h3>{{ inputType }}</h3>
        <div v-if="inputType === 'text'">
            <label>Type = text</label> <input type="text">
        </div>
        <div v-else-if="inputType === 'radio'">
            <label>Type = radio</label> <input type="radio" name="gender"> Boy <input type="radio" name="gender"> Girl
        </div>
        <div v-else-if="inputType === 'select'">
            <label>Type = select</label> <select><option>Boy</option><option>Girl</option></select>
        </div>
    </div>
    `,
    data() {
        return {
            inputType: "text",
        };
    },
});
app.mount("#app");
