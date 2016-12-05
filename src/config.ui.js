import alertUi from 'vux/dist/components/alert'
import scroller from 'vux/dist/components/scroller'
const Ui = {
	install(Vue) {
		Vue.component("alertUi", alertUi)
		Vue.component("scroller", scroller)
	}
}

module.exports = Ui;