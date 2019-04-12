// https://tiki.vn/
// example from browser
document.getElementById('header-cart').addEventListener('click', (e) => {
	alert('checkout');
	
	e.stopPropagation();
	e.preventDefault();
});