import fruitList from "../constants/fruit-list"
import Card from '../components/Card/Card'
import { Button, IconButton, Stack, useToast, Flex, Text } from "@chakra-ui/react"
import { ArrowRightIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"
import { useState } from "react"

const ListFruits = () => {
    const toast = useToast()
    const [storageNum, setStorageNum] = useState(Number(localStorage.length))

    return (
        <Stack pt='5' px='10' pb={10} bgGradient='linear(to-br, green.500, white)' minHeight={'100vh'}>
            <Flex justifyContent={'space-between'} >
                <Text>Carrinho com: {storageNum} itens</Text>
                <Button alignSelf='flex-end' colorScheme={'red'} size={'xs'} width='fit-content' onClick={() => {
                    localStorage.clear()
                    setStorageNum(Number(localStorage.length))
                    toast({
                        title: `Carrinho limpo com sucesso`,
                        status: 'success',
                        isClosable: true,
                    })
                }}>Limpar Carrinho</Button>
            </Flex>
            <Stack spacing={2} display='flex' flexWrap={'wrap'} flexDirection='row' gap={2} justifyContent='center' alignItems={'center'}>
                {fruitList.map((elem, index) => <Card key={index} name={elem.name} price={elem.price} url={elem.url} type={elem.type} setStorageNum={setStorageNum} />)}
            </Stack>
            <Link to={'/payment'}><IconButton position={'fixed'} right={4} bottom={5} size='lg' colorScheme='blackAlpha' aria-label='Search database' icon={<ArrowRightIcon />} /></Link>
        </Stack >
    )
}

export default ListFruits