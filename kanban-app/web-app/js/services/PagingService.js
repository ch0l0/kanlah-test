app.factory("PagingService", [function() {

	return {
		
		/* Property that will holds all the data */
		data: [],

		/* Integer value that holds the maximum number of record per page */
		limit: 10,

		/* Integer value that holds the total number of records */
		limit: null,

		setLimit: function onSetLimit(limit) {
			this.limit = limit;
			return this;
		},

		getLimit: function onGetLimit() {
			return this.limit;
		},

		setPage: function onSetPage(page) {
			this.page = page;
			return this;
		},

		setTotal: function onSetTotal(total) {
			this.total = total;
			return this;
		},

		getPage: function onGetPage() {
			return this.page;
		},

		getNoOfPage: function onGetNoOfPages() {
			return Math.ceil(this.total/this.limit);
		},

		getTotal: function onGetTotal() {
			return this.total;
		},

		getOffset: function onGetOffset() {
			return (this.page - 1) * this.limit;
		}

	};

}]);