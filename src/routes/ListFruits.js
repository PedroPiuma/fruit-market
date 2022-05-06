import fruitList from "../constants/fruit-list"
import Card from '../components/Card/Card'
import { Stack, Text } from "@chakra-ui/react"

const ListFruits = () => {
    return (
        <Stack pt='5' px='10'>
            <Text fontSize={'lg'} m='0 auto'>Bem-vindo a feira online</Text>
            <div>
                {fruitList.map(e => <Card name={e.name} price={e.price} url={e.url} type={e.type} />)}
            </div>
        </Stack>
    )
}

export default ListFruits