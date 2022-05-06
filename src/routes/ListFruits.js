import fruitList from "../constants/fruit-list"
import Card from '../components/Card/Card'
import { Button, Stack, Text, useToast } from "@chakra-ui/react"

const ListFruits = () => {
    const toast = useToast()
    return (
        <Stack pt='5' px='10' mb={10}>
            <Text fontSize={'lg'} m='0 auto'>Bem-vindo a feira online</Text>
            <Button size={'xs'} width='fit-content' onClick={() => {
                localStorage.clear()
                toast({
                    title: `Carrinho limpo com sucesso`,
                    status: 'success',
                    isClosable: true,
                })
            }
            }>Limpar Carrinho</Button>
            <Stack spacing={2}>
                {fruitList.map(e => <Card key={e.name} name={e.name} price={e.price} url={e.url} type={e.type} />)}
            </Stack>
        </Stack >
    )
}

export default ListFruits