const CardPayment = ({ list }) => {
    const mobile = console.log(localStorage.mobile)
    const [fruit, data] = list
    const [{ priceFinal }, { quantity }] = JSON.parse(data) || JSON.parse(mobile)

    return (
        <div>
            <p>Fruta: {fruit}</p>
            <p>Preço: {priceFinal}</p>
            <p>Quantidade: {quantity}</p>
        </div>
    )
}

export default CardPayment
