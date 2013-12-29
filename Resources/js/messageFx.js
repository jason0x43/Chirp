// Override CoalescedHTML methods
function initStyle() {
	if(null == document.getElementById("heading")){
		document.getElementsByTagName('body').item(0).style.marginTop = "5px";
	}

	if(!coalescedHTML) {
		coalescedHTML = new CoalescedHTML();
	}

	coalescedHTML.setAppendElementMethod(function (elem) {
		document.getElementById("Chat").appendChild(elem);
		
		if(!coalescedHTML.isConsecutive) {
			var node = document.getElementById("Chat").lastElementChild;
			var avi = node.getElementsByClassName("avatar")[0];
			var mess = node.getElementsByClassName("messages")[0];
			
			mess.style.marginLeft = "50px";
			mess.style.opacity = "0";
			avi.style.left = "0px";
			avi.style.opacity = "0";
			
			move(mess)
				.add('margin-left', 10)
				.set('opacity', 1)
				.end();
				
			move(avi)
				.add('left', 10)
				.set('opacity', 1)
				.end();
		}
		alignChat(coalescedHTML.shouldScroll);
	});
}