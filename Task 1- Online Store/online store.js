// submit function
function calculateDiscount() {
    // var productName = document.getElementById("name").value;
    var productCategory = document.getElementById("ptype").value;
    var productPrice = document.getElementById("price").value;
    var quantity = document.getElementById("qty").value;
    var discountPercentage;
    var sellingPrice;

    // tPrice = multiply of productprice and quantity
    var totalPrice = productPrice * quantity;
    document.getElementById("tPrice").value = totalPrice;

    // Electronic Products
    if (productCategory == "Electronic Products") {
        if (totalPrice <= 10000) {
            discountPercentage = 5;
            document.getElementById("discount").innerHTML = "discount percentage:" + discountPercentage +"%";
            sellingPrice = totalPrice - (totalPrice * (5 / 100));
            document.getElementById("result").innerHTML = "Selling Price is RS: " + sellingPrice;
        } else if (totalPrice > 10000 && totalPrice <= 20000) {
            discountPercentage = 10;
            document.getElementById("discount").innerHTML = "discount percentage:" + discountPercentage +"%";
            sellingPrice = totalPrice - (totalPrice * (10 / 100));
            document.getElementById("result").innerHTML = "Selling Price is RS: " + sellingPrice;
        } else if (totalPrice > 20000) {
            discountPercentage = 20;
            document.getElementById("discount").innerHTML = "discount percentage:" + discountPercentage +"%";
            sellingPrice = totalPrice - (totalPrice * (20 / 100));
            document.getElementById("result").innerHTML = "Selling Price is RS: " + sellingPrice;
        }
    }

    // Clothing and Apparels
    if (productCategory == "Clothing and Apparels") {
        if (totalPrice <= 10000) {
            discountPercentage = 10;
            document.getElementById("discount").innerHTML = "discount percentage:" + discountPercentage +"%";
            sellingPrice = totalPrice - (totalPrice * (10 / 100));
            document.getElementById("result").innerHTML = "Selling Price is RS: " + sellingPrice;
        } else if (totalPrice > 10000 && totalPrice <= 20000) {
            discountPercentage = 20;
            document.getElementById("discount").innerHTML = "discount percentage:" + discountPercentage +"%";
            sellingPrice = totalPrice - (totalPrice * (20 / 100));
            document.getElementById("result").innerHTML = "Selling Price is RS: " + sellingPrice;
        } else if (totalPrice > 20000) {
            discountPercentage = 40;
            document.getElementById("discount").innerHTML = "discount percentage:" + discountPercentage +"%";
            sellingPrice = totalPrice - (totalPrice * (40 / 100));
            document.getElementById("result").innerHTML = "Selling Price is RS: " + sellingPrice;
        }
    }

    // Health Care Products
    if (productCategory == "Health Care Products") {
        if (totalPrice <= 10000) {
            discountPercentage = 10;
            document.getElementById("discount").innerHTML = "discount percentage:" + discountPercentage +"%";
            sellingPrice = totalPrice - (totalPrice * (10 / 100));
            document.getElementById("result").innerHTML = "Selling Price is RS: " + sellingPrice;
            return false
        } else if (totalPrice > 10000 && totalPrice <= 20000) {
            discountPercentage = 25;
            document.getElementById("discount").innerHTML = "discount percentage:" + discountPercentage +"%";
            sellingPrice = totalPrice - (totalPrice * (25 / 100));
            document.getElementById("result").innerHTML = "Selling Price is RS: " + sellingPrice;
            return false
        } else if (totalPrice > 20000) {
            discountPercentage = 50;
            document.getElementById("discount").innerHTML = "discount percentage:" + discountPercentage +"%";
            sellingPrice = totalPrice - (totalPrice * (50 / 100));
            document.getElementById("result").innerHTML = "Selling Price is RS: " + sellingPrice;
        }
    }
    return false;
}

// reset function
function reset() {
    document.getElementById("form").reset();
    document.getElementById("discount").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}