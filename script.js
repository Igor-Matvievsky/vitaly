function searchLineBlock(element) {
	document.querySelector('.search-line').style.display = 'block';
	document.querySelector('.header-div-left-menu-ul').style.display = 'none';
	document.querySelector('.header-div-right-other').style.display = 'none';
	document.querySelector('.header-div-right-all_production').style.display = 'none';
	
	return false;
}
function searchLineNone() {
	document.querySelector('.search-line').style.display = 'none';
	document.querySelector('.header-div-left-menu-ul').style.display = 'grid';
	document.querySelector('.header-div-right-other').style.display = 'flex';
	document.querySelector('.header-div-right-all_production').style.display = 'block';
}
function cartBlock() {
	document.querySelector('.cart').style.display = 'block';
	document.querySelector('.overlay').style.display = 'block';
}
function cartNone() {
	document.querySelector('.cart').style.display = 'none';
	document.querySelector('.overlay').style.display = 'none';
}