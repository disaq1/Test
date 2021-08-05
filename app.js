const App = {
    data() {
        return {
            placeholderString: "Введите слова(ограничение в 10 символов)",
            title: "список заметок",
            inputValue: "",
            notes: [],
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !=='') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNode(idx) {
            this.notes.splice(idx, 1)
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
        },
    }
}

Vue.createApp(App).mount('#app')