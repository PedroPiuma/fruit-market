const CardPayment = ({ list: [fruit, price] }) => {
    return (
        <div>
            <p>{fruit}</p>
            <p>{price}</p>
        </div>
    )
}

export default CardPayment