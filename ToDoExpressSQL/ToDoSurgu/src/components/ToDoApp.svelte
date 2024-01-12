<script  lang="ts">
	import ToDoControls from "./ToDoControls.svelte";
	import ToDoItem from "./ToDoItem.svelte";
    import { todoApiModule } from '../lib/api';
    
    let items = loadData();

    function loadData() {
        return todoApiModule.getToDos();
    }
    async function createToDo(event) {
        await todoApiModule.createToDo({
            text: event.detail.text,
            is_done: false
        });
        items = loadData();
    }

    async function changeStatus(event) {
        await todoApiModule.changeStatus(event.detail.id);
        items = loadData();
    }
   
    async function removeToDo(event) {
        await todoApiModule.removeToDo(event.detail.id);
        items = loadData();
    }

</script>

<div class="todo-app">
    {#await items}
        Loading... 
    {:then value}
        <ToDoControls on:add={createToDo} />
        <div class="todo-app__field">
            {#each value as item}
                <ToDoItem id={item.id} text={item.text} bind:isDone={item.is_done} 
                on:remove={removeToDo} on:change={changeStatus}/>  
                
               
            {/each}
        </div>
    {/await}
</div>

<style>
    .todo-app {
        width: 700px;
        height: 80%;
        background: rgb(190, 176, 176);
        border-radius: 15px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .todo-app__field {
        background: white;
        flex-grow: 1;
        border-radius: 15px;
        overflow: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>