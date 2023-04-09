const dataBasket = JSON.parse(basket);
console.log(dataBasket);
const base2 = document.querySelector('.card_item');

function addSectionNEW() {
	dataBasket.reverse().forEach((element) => {
		base2.insertAdjacentHTML(
			'afterbegin',
			`<div class="first">
	<img class="first_img" src=${element.img} alt="photo1" />
	<div class="first_text">
		<h4 class="h4_card">${element.h4}</h2>
		<div class="first_p">
			<p>
				Price: <span class="price_card">$${element.price}</span>
			</p>
			<p>Color: ${element.color}</p>
			<p>Size:${element.size}</p>
			<p>
				Quantity: <input type="number" value=${element.quantity} />
			</p>
		</div>
	</div>
	<div class="first_close">
		<img src="./img/CLOSE.png" alt="close" />
	</div>
</div>;`
		);
	});
}

// const batt = document.querySelector('a.card_link');
// batt.onclick =???
/**
 * Обработчик открытия корзины при клике на ее значок.
 */
const cardActive = document.querySelector('.card_item');
const cardClick = document.querySelector('.card_link');

function toggleMenu() {
	cardActive.classList.toggle('hidden');
}
cardClick.addEventListener('click', toggleMenu);

cardClick.forEach((element) => {
	element.addEventListener('click', (event) => console.log(event.target));
});

// ++++++
// data.forEach((element) => {
// 	element.addEventListener('click', (event) => console.log(event.target));
// });
// нужно разобраться, какую переменную тут брать. Функция при клике выводит событие в консоль.
