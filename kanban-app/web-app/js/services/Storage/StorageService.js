app.factory("StorageService", [function() {
	var storage = sessionStorage;
	return {
		get: function(storage, key) {
			return storage['getItem'](key) === "" ? null : JSON.parse(storage['getItem'](key));
		},
		set: function(storage, key, val) {
			return storage['setItem'](key, val);
		},
		unset: function(storage, key) {
			return storage['removeItem'](key);
		},
		clear: function(storage){
			return storage['clear']();
		}
	};

}]);