<script>
    export let id;
    export let text;
    export let isDone;
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="todo-item" class:todo-item_done={isDone}>
    <input 
        type="checkbox" 
        on:change={dispatch('change', { id })} 
        checked={isDone} 
    />
    <span class="todo-item__text">{text}</span>
    <button class="todo-item__btn" on:click={dispatch('remove', { id })}>Del</button>
</div>

<style>
    .todo-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background: rgb(239, 164, 164);
        border-radius: 10px;
    }
    .todo-item_done {
        background: rgb(175, 225, 175);
    }
    .todo-item_done .todo-item__text {
        text-decoration: line-through;
    }
    .todo-item__text {
        flex-grow: 1;
    }
    .todo-item__btn {
        border: none;
        border-radius: 10px;
        background-color: chocolate;
        padding: 10px;
        min-width: 100px;
    }
</style>