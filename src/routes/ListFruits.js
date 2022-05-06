import fruitList from "../constants/fruit-list"
import Card from '../components/Card/Card'
import { Button, Stack, useToast } from "@chakra-ui/react"

const ListFruits = () => {
    const toast = useToast()
    return (
        <Stack pt='5' px='10' mb={10}>
            <Button alignSelf={'flex-end'} size={'xs'} width='fit-content' onClick={() => {
                localStorage.clear()
                toast({
                    title: `Carrinho limpo com sucesso`,
                    status: 'success',
                    isClosable: true,
                })
            }}>Limpar Carrinho</Button>
            <Stack spacing={2} display='flex' flexWrap={'wrap'} flexDirection='row' gap={20} justifyContent='center' alignItems={'center'}>
                {fruitList.map(e => <Card key={e.name} name={e.name} price={e.price} url={e.url} type={e.type} />)}
            </Stack>
        </Stack >
    )
}

export default ListFruits