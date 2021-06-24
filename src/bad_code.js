function deliveryMethod() {
    // TODO
    return 'overnight';
}
function shipWeight() {
    var el = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML);
}
function sendUpdates(emailAddr) {
    function sendEmail(addr) {
        return ("Shipping to " + addr + " via " + (deliveryMethod() || 'standard') + " delivery");
        if (shipWeight() > 100) {
            return ('WARNING: Oversize package');
        }
    }
    if (Array.isArray(emailAddr)) {
        console.log(emailAddr);
        emailAddr.map(function (item, key) {
            console.log(item);
            return sendEmail(item.trim());
        });
    }
    else {
        return sendEmail(emailAddr.trim());
    }
}
console.log(sendUpdates("123"));
console.log(sendUpdates(["233", "322"]));
