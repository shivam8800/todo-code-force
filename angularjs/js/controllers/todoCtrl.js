angular.module('todomvc')
	.controller('TodoCtrl', function TodoCtrl($scope, $routeParams, $filter, store) {
		'use strict';

		var todos = $scope.todos = store.todos;

		$scope.newTodo = '';

		$scope.$watch('todos', function () {
			$scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
			$scope.completedCount = todos.length - $scope.remainingCount;
			$scope.allChecked = !$scope.remainingCount;
		}, true);

$scope.addTodo = function () {
			var newTodo = {
				title: $scope.newTodo.trim(),
				completed: false
			};

			if (!newTodo.title) {
				return;
			}

		 $scope.set2 = function($ayd) {
			var thumb = getParameterByName(this.newTodo, 'v'),
				url = 'http://img.youtube.com/vi/' + thumb + '/default.jpg';
			this.thumb = url
			console.log(url);
		
			$scope.saving = true;
			if (todos.push(url)){
				$scope.newTodo = '';
				$scope.saving = false;
			}
			// store.insert(thumb)
			// 	.then(function success() {
			// 		$scope.newTodo = '';
			// 	})
			// 	.finally(function () {
			// 		$scope.saving = false;
			// 	});
		}
		
			function getParameterByName(url, name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(url);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
			}
		};

		$scope.removeTodo = function (todo) {
			store.delete(todo);
		};

		$scope.saveTodo = function (todo) {
			store.put(todo);
		};

		$scope.toggleCompleted = function (todo, completed) {
			if (angular.isDefined(completed)) {
				todo.completed = completed;
			}
			store.put(todo, todos.indexOf(todo))
				.then(function success() {}, function error() {
					todo.completed = !todo.completed;
				});
		};

		$scope.clearCompletedTodos = function () {
			store.clearCompleted();
		};

		$scope.backLinkClick = function () {
			console.log("jfkdsjf");
			window.location.reload();
			clearCompletedTodos(); 
		};
	});