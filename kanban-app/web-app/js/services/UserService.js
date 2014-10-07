app.factory("UserService", ['$resource', function($resource) {

	//http://docs.angularjs.org/api/ngResource.$resource
	var User = $resource('/user/:id/:action', {id:'@id',action:'@action'},{
		'update': { method:'PUT' }
	}); 

	return {
		get: function onGet(id) {
			var user = User.get({id:id});
			return user.$promise;
		},
		update: function onUpdate(id,params) {
			var user = new User({ id: id });
			angular.extend(user, params, { id: id });
			return user.$update();
		},
		changeEmail: function onChangeEmail(id,params) {
			var user = new User({ id: id });
			angular.extend(user, params, { id: id });
			return user.$save({action:"changeEmail"});
		},
		changePassword: function onChangePassword(id,params) {
			var user = new User({ id: id });
			angular.extend(user, params, { id: id });
			return user.$save({action:"changePassword"});
		},
		passwordReset: function onPasswordReset(params) {
			var user = new User(params);
			return user.$save({id:"passwordReset"});
		},
		resendEmail: function onResendEmail(params) {
			var user = new User(params);
			return user.$save({id:"resendEmail"});
		},
		getAccessMatrix: function onGetAccessMatrix(userInfo, projectRole, boardRole){
			var result = { 
				project: {
					assignRole: false,
					addRemoveMember: false,
					createBoard: false,
					deleteBoard: false,
					showBoardSettings: false
				}, board: {
					assignRole: false,
					addRemoveMember: false,
					showManageLink: false
				}
			};
			if(userInfo.projectRole === "OWNER"){
				result.board.showManageLink = true;
				result.project.createBoard = true;
				result.project.deleteBoard = true;
				result.project.showBoardSettings = true;

				if(projectRole === "ADMIN" || projectRole === "MEMBER"){
					result.project.assignRole = true;
					result.project.addRemoveMember = true;
					result.board.addRemoveMember = true;
					if(projectRole === "MEMBER"){
						result.board.assignRole = true;
					}
				}
			}else if(userInfo.projectRole === "ADMIN"){
				result.project.createBoard = true;
				result.project.deleteBoard = true;
				result.board.showManageLink = true;
				result.project.showBoardSettings = true;
				if(projectRole === "MEMBER"){
					result.project.assignRole = true;
					result.project.addRemoveMember = true;
					result.board.assignRole = true;
					result.board.addRemoveMember = true;
				}
			}else if(userInfo.projectRole === "MEMBER"){
				if(userInfo.boardRole === "ADMIN"){
					result.board.showManageLink = true;
					result.project.showBoardSettings = true;
					if(boardRole === "MEMBER" || boardRole === null){
						boardRole = "MEMBER";
						result.board.addRemoveMember = true;
					}
				}else{
					result.icon = "role-boardmember";
				}
			}

			//Assign Board Icon
			if(projectRole === "OWNER")
				result.icon = "owner"
			else if(projectRole === "ADMIN")
				result.icon = "projectadmin"
			else if(projectRole === "MEMBER" && boardRole === "ADMIN")
				result.icon = "boardadmin"
			else if(projectRole === "MEMBER" && boardRole === "MEMBER")
				result.icon = "boardmember"

			if(result.board.assignRole){
				if(boardRole === "ADMIN"){
					result.toggleRole = "MEMBER";
				}else if(boardRole === "MEMBER"){
					result.toggleRole = "ADMIN";
				}
			}
			return result;
		}
	};
}]);