let menuActive = document.querySelector('.menu-active');
let menu = document.querySelector('.menu');

function toggleMenu() {
	menuActive.classList.toggle('hidden');
}

menu.addEventListener('click', toggleMenu);

const data = JSON.parse(card);
console.log(data);
const base = document.querySelector('.cards-list__wrapper');
data.reverse().forEach((element) => {
	base.insertAdjacentHTML(
		'afterbegin',
		`<div class="button_card container">
			<button class="addTobasket" data-id=${element.id}>
				<div class="card">
					<div class="card_link">
						<img src=${element.img} alt="pic" />
					</div>
					<div class="par_car">
					<h4>${element.h4}</h4>
					<p class="par">${element.p}
					</p>
					<p class="price">${element.price}</p>
					</div>
				</div>
			</button>
		</div>`
	);
});

// Функция, которая добавляет код HTML
{
}

function addSection() {
	const u = document.querySelector('.top_footer');
	u.insertAdjacentHTML(
		'afterend',
		`<div class="button_card container">
			<button class="addTobasket">
				<div class="card">
					<div class="card_link">
						<img src="./img/1row_man_left.jpg" alt="pic" />
					</div>
					<div class="par_car">
					<h4>TEST</h4>
					<p class="par">TEST1
					</p>
					<p class="price">$52</p>
					</div>
				</div>
			</button>
		</div>`
	);
}

function addSectionNEW() {
	const base2 = document.querySelector('.top_footer');
	data.reverse().forEach((element) => {
		base2.insertAdjacentHTML(
			'afterend',
			`<section class="container"><div class="first">
	<img class="first_img" src=${element.img} alt="photo1"/>
	<div class="first_text">
		<h4 class="h4_card">${element.h4}</h2>
		<div class="first_p">
			<p>
				Price: <span class="price_card">$${element.price}</span>
			</p>
			<p>Color: ${element.color}</p>
			<p>Size:${element.size}</p>
			<p>
				Quantity: <input type="number" value=${element.quantity}/>
			</p>
		</div>
	</div>
	<div class="first_close">
		<img src="./img/CLOSE.png" alt="close"/>
	</div>
</div></section>;`
		);
		const close = document.querySelector('.first_close');
		const card = document.querySelector('.first');
		close.addEventListener('click', () => {
			card.remove();
		});
	});
}
// // Так работает;
// const button1 = document.querySelector('.prodact');
// button1.addEventListener('click', addSectionNEW);

console.log(data);

const buttAdd = document.querySelectorAll('.addTobasket');

buttAdd[id].addEventListener('click', addSectionNEW);

// buttAdd[id].onclick = (event) => {
// 	if (event.target) {
// 		plusFunction(event.target.dataset.id);
// 	}
// };

// const plusFunction = (id) => {
// 	card[id]++;
// 	renderCard();
// };

// const renderCard = () => {
// 	console.log(card);
// };
