app.factory("SystemParamsService", ['$resource', function($resource) {

	//http://docs.angularjs.org/api/ngResource.$resource
	var SystemParams = $resource('/params'); 

	return {

		all: function onAllSystemParams() {
			return new SystemParams().$get();
		}

	};
}]);