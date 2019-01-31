var products = [
	{ title: 'Camiseta de fútbol Adidas River Plate away', price: 849.00, category: 'Camisetas fútbol', image: './images/river-away.jpg', brand: 'adidas' },
	{ title: 'Ojotas Adidas Duramo Thong', price: 299.00, category: 'Ojotas - Chinelas', image: './images/ojotas.jpg', brand: 'adidas' },
	{ title: 'Zapatillas Nike Roubaix IIV', price: 450.00, category: 'Zapatillas', image: './images/zapatillas-nike.jpg', brand: 'nike' },
	{ title: 'Camiseta de fútbol Adidas River Plate home', price: 849.00, category: 'Camisetas fútbol', image: './images/river-home.jpg', brand: 'adidas' },
	{ title: 'Pantalon jockey dama', price: 150.00, category: 'Pantalones', image: './images/pantalones-jockey.jpg', brand: 'jockey' },
	{ title: 'Camiseta de fútbol Nike Boca home authentic', price: 399.00, category: 'Camisetas fútbol', image: './images/boca-home.jpg', brand: 'nike' },
	{ title: 'Short Nike squad strike', price: 399.00, category: 'Shorts', image: './images/shorts-nike.jpg', brand: 'nike' },
	{ title: 'Zapatillas Adidas Original Schoolstar', price: 370.00, category: 'Zapatillas', image: './images/zapatillas-adidas.jpg', brand: 'adidas' }
];

$(document).ready(function() {
	products.forEach(product => {
		var newProduct = $(".product-container.sample").clone().removeClass("sample hide").appendTo(".products");
		$(newProduct).find(".product-image").attr("src", product.image);
		$(newProduct).find(".product-description").text(product.title);
		$(newProduct).find(".product-price").text("$ "+product.price);
		$(newProduct).find(".product-brand").addClass("icon-"+product.brand);
		$(newProduct).find(".product-category").text(product.category);
		$(newProduct).appendTo(".products");

		var count = $(".product-container").length;
		if ((count % 2) == 0) {
			$(newProduct).find(".product-discount").removeClass("hide");
		};
	});

	$(".product-image").hover(function() {
		$(this).siblings(".product-price").toggleClass("product-price-hover");
		$(this).siblings(".product-description").toggleClass("product-title-hover");
	});
})