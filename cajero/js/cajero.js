class Bill {
    constructor(value, quantity, image) {
        this.value = value;
        this.quantity = quantity;
        this.image = new Image();
    }

    seeBill(){
        document.body.appendChild(this.image)
    }


}