class LocalStorage {
    // initialisation de la liste de taches
    constructor() {
        this.tasks = [{"title":"1.Idée","isChecked":true},{"title":"2.Marché","isChecked":true},{"title":"3.Wireframe","isChecked":true},{"title":"4.Design","isChecked":true},{"title":"5.Landingpage","isChecked":true},{"title":"6.Développement","isChecked":false},{"title":"7.Publish","isChecked":false},{"title":"8.Pub","isChecked":false},{"title":"9.Feedback","isChecked":false}];
    }

    // obtenir une tache
    getTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            return JSON.parse(savedTasks);
        }
        return this.tasks;
    }

    // ajouter une tache
    addTask(task) {
        this.tasks.push(task);
    }

    // supprimer une tache
    deleteTask(task) {
        this.tasks.splice(task, 1);
    }

    saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export default LocalStorage;