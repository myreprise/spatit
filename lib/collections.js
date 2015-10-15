//Categories
Categories = new Mongo.Collection("categories");

//Products
Products = new Mongo.Collection("products");

//Product Image Collection
ProductsImages = new FS.Collection("ProductImages", {
	stores: [new FS.Store.GridFS("ProductImages")]
});

ProductsImages.allow({
	insert: function(fileId, doc){
		return true;
	},
	download: function(fileId, doc){
		return true;
	}
});