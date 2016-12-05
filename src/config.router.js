export default function (router) {

	router.map({
		"/error": {
			component: function (resolve) {
				resolve({
					template: "<div>您要的页面未开发</div>"
				})
			}
		},
		"/index": {
			component: function (resolve) {
				require(['./components/index'], resolve)
			},
			subRoutes: {
				"/home": {
					component: function (resolve) {
						require(['./components/homePage'], resolve)
					}
				},
				"/wish": {
					component: function (resolve) {
						require(['./components/wishPage'], resolve)
					}
				},
				"/me": {
					component: function (resolve) {
						require(['./components/mePage'], resolve)
					}
				}
			}
		}
	});


	router.redirect({
		"*": "/error",
		"/": "/index/home"
	})
}
