console.log('Vue OK', Vue);

const {createApp} = Vue

const app = createApp ({
    data: () => ({
        tasks: [
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' },
        ]
    }),
    methods: {
        // Funzione per spuntare gli elementi dalla list
        toggleTask(id) {
            this.tasks.forEach(task => {
                if (id === task.id) {
                    task.done = !task.done
                }
            })
        },
        // Funzione per rimuovere il task
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => id !== task.id);
        }
    }
});

app.mount('#root')