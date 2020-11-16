const goods = [
	{
		name: "car 1",
		price: 100
	},
	{
		name: "car 2",
		price: 200
	},
	{
		name: "car 3",
		price: 300
	}
]

const goodsInStorage = JSON.parse(localStorage.getItem("goods"))
const goodsInCart = goodsInStorage ? goodsInStorage : [];

const store = document.querySelector(".root")
const cart = document.querySelector(".cart")

const addItemFromStorage = () => {
	goodsInCart.forEach((item) => {
		const goodInCart = document.createElement("div")
		goodInCart.innerText = `Марка ${item.name}, цена ${item.price}`
		cart.append(goodInCart)

	})
}


const goodClicklHandler = (item) => {
	item.addEventListener("click", function () {
		cart.innerHTML = ""
		const itemIndex = this.getAttribute("data-good-id")
		if (!goodsInCart.some((good) => good.name == goods[itemIndex].name)) {
			goodsInCart.push(goods[itemIndex]);
		}
		else {
			alert('Данный товар уже пристуствует в вашей корзине')
		}
		localStorage.setItem("goods", JSON.stringify(goodsInCart))
		addItemFromStorage()
	})
}


goods.forEach((good, index) => {
	const item = document.createElement("div");
	item.dataset.goodId = index;
	item.innerText = `Марка ${good.name}, цена${good.price}`;
	store.append(item);


	goodClicklHandler(item);
});


addItemFromStorage()

const clearStorage = document.querySelector(".clear-storage");

clearStorage.addEventListener("click", () => {
	localStorage.clear();
	location.reload()
});


















