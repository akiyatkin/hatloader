export let HatLoader = {
	show: (msg) => {
		let cls = (div,cls) => div.getElementsByClassName(cls)[0]
		let hat = cls(document, 'hat')
		let span = cls(hat, 'msg')
		if (!span) {
			span = document.createElement('span')
			span.className = 'msg'
			hat.appendChild(span)
		}
		span.innerHTML = msg
		hat.classList.add('hatloader')
	},
	hide: () => {
		let cls = (div,cls) => div.getElementsByClassName(cls)[0]
		let hat = cls(document, 'hat')
		let span = cls(hat, 'msg')
		if (span) hat.removeChild(span)
		hat.classList.remove('hatloader')	
	}
}

export default HatLoader