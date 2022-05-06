import { Button, Text, useToast } from "@chakra-ui/react"
import CardPayment from "../components/CardPayment/CardPayment"

function Payment() {
    const toast = useToast()
    if (localStorage.length < 1) return <p>Não há compras na lista</p>
    return (
        <div>
            <Text>Seu carrinho de compras</Text>
            {Object.entries(localStorage).map(elemStorage => <CardPayment list={elemStorage} />)}
            <Button size={'xs'} width='fit-content' onClick={() => {
                localStorage.clear()
                toast({
                    title: `Carrinho limpo com sucesso`,
                    status: 'success',
                    isClosable: true,
                })
            }
            }>Limpar Carrinho</Button>
            <Button>Finalizar Compra</Button>
        </div>
    )
}

export default Payment