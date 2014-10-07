app.factory("NotificationService", ['$resource', function($resource) {

	//http://docs.angularjs.org/api/ngResource.$resource
	var Notification = $resource('/notifications/:id', {id:'@id'}, {
		'get': { method:'GET' },
		'query': { isArray: false, method:'GET' }
	}); 

	return {

		all: function onQueryNotifications(params) {
			return new Notification().$query(params);
		},

		getUnreadCount: function onGet() {
			return new Notification().$get({id:'new'});
		},

		setAsRead: function onSetAsRead(params) {
			return new Notification(params).$save({id:'read'});
		},

		delete: function onRemove(id) {
			var notification = new Notification.delete({id:id});
			return notification.$promise;
		}
	};
}]);