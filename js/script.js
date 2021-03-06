{
    const tasks = [
        {
            content: "nagrać lekcję",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvent = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButtons, index) => {
        removeButtons.addEventListener("click", () => {
            removeTask(index);
        });
    });

    const toggelDoneButtons = document.querySelectorAll(".js-done");

    toggelDoneButtons.forEach((toggelDoneButtons, index) => {
        toggelDoneButtons.addEventListener("click", () => {
            toggleTaskDone(index);
        });
    });}
    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style=\"text-decoration: line-through\"" : ""}
            >
            <button class="js-done">zrobione</button>
            <button class="js-remove">usun</button>
              ${task.content}
                </li>
                `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvent();
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}