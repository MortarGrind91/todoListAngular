import { Injectable } from '@angular/core';
import { Todo } from './todo-type';

@Injectable({
	providedIn: 'root'
})
export class TodoService {

	todosItem:Todo[] = [
	{name: 'First task', done: false},
	{name: 'Two task', done: false},
	{name: 'Three task', done: false}
	];

	name:string = '';

	getTodo():Todo[]{
		return this.todosItem;
	}

	addTaskItem(name){
		this.todosItem.push({name: name, done:false});
	}

	delTaskItem(index){
		this.todosItem.splice(index,1);
	}

	toogleDoneItem(todo){
		todo.done = !todo.done;
	}

	constructor() { }
}
