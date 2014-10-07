app.factory("SessionStorageService", ['StorageService', 'UserInfoModel', 'SystemParamsModel', function(StorageService, UserInfoModel, SystemParamsModel) {

	var storage = sessionStorage;

	return {
		/* User info */ 
		setUserInfo: function(data) {
			StorageService.set(storage,'userInfo', JSON.stringify(UserInfoModel(data)));
		},

		getUserInfo: function(){
			return StorageService.get(storage,'userInfo');
		},

		setReferrer: function onSetReferrer(data) {
			StorageService.set(storage,'referrer', JSON.stringify(data));
		},

		getReferrer: function onGetReferrer() {
			return StorageService.get(storage,'referrer');
		},

		setSystemParams: function onSetSystemParams(data) {
			StorageService.set(storage,'sytemParams', JSON.stringify(SystemParamsModel(data)));
		},

		getSystemParams: function onGetSystemParams() {
			return StorageService.get(storage,'sytemParams');
		},

		/* Clear session */
		clearUserSession: function onClearUserSession() {
			StorageService.clear(storage);
		}
	}
}]);