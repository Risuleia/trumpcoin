const btn = document.querySelector('.copy-btn')
btn.addEventListener('click', copy)

function copy(e) {
    const walletElem = document.querySelector('.wallet-text')
    const walletAddress = walletElem.textContent.trim()
    navigator.clipboard.writeText(walletAddress)

    btn.textContent = 'Copied!'
    setTimeout(() => {
        btn.textContent = 'Copy Address'
    }, 2000);
}