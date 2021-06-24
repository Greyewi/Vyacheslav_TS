function deliveryMethod(): string {
  // TODO
  return 'overnight'
}

function shipWeight(): number {
  const el: HTMLElement = document.getElementById('weight')
  if (!el) {
    return 0
  }
  return parseInt(el.innerHTML)
}


/*function sendUpdates(emailAddr: string[])
function sendUpdates(emailAddr: string)

function sendUpdates(emailAddr: (string[] | string)):void {
  function sendEmail(addr): void{
    console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`)
    if (shipWeight() > 100) {
      console.log('WARNING: Oversize package')
    }
  }
  if (Array.isArray(emailAddr)) {
    emailAddr.map((item, key) => {
      sendEmail(item.trim())
    })
  } else {
    sendEmail(emailAddr.trim())
  }
}*/
function sendUpdates(emailAddr: string[]):string
function sendUpdates<T>(emailAddr: T):T


function sendUpdates(emailAddr) {
  function sendEmail(addr): string{
    return (`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`)
    if (shipWeight() > 100) {
      return ('WARNING: Oversize package')
    }

  }
  if (Array.isArray(emailAddr)) {
    console.log(emailAddr)
    emailAddr.map((item, key) => {
      console.log(item)
      return sendEmail(item.trim())
    })
  } else {
    return sendEmail(emailAddr.trim())
  }
}

console.log(sendUpdates("123"))
console.log(sendUpdates(["233", "322"]))