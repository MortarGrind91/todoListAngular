import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-type';
import { TodoService } from '../todo.service';

@Component({
	selector: 'app-todo-detail',
	templateUrl: './todo-detail.component.html',
	styleUrls: ['./todo-detail.component.css'],
	providers: [TodoService]
})
export class TodoDetailComponent implements OnInit {

	todos:Todo[] = [];
	name:string = "";
	decoration: boolean = false;

	constructor( private todoService: TodoService) {}

	ngOnInit() {
		this.todos = this.todoService.getTodo();
	}


	addTask(name:string){
		if(this.name !== ''){
			this.todoService.addTaskItem(name);
			this.name = '';
		}

	}

	delTask(index){
		this.todoService.delTaskItem(index);
	}

	toggleDone(todo){
		// todo.done = !todo.done;

		this.todoService.toogleDoneItem(todo);

	}


}
