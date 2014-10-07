app.factory("LocalStorageService", ['StorageService', 'LoginSessionModel', function(StorageService, LoginSessionModel) {

	var storage = localStorage;

	return {
		setLoginSession: function onSetLoginSession(data) {
			StorageService.set(storage,'loginSession', JSON.stringify(LoginSessionModel(data)));
		},

		getLoginSession: function onGetLoginSession() {
			return StorageService.get(storage,'loginSession');
		},

		clearLoginSession: function onClearLoginSession() {
			StorageService.unset(storage, 'loginSession');
		},

		clearLocalStorage: function onClearLocalStorage() {
			StorageService.clear(storage);
		}
	}
}]);