import fruitList from "../constants/fruit-list"
import Card from '../components/Card/Card'
import { Button, Stack, useToast, Flex, Text, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useState } from "react"
import carIcon from '../img/car-icon.png'

const ListFruits = () => {
    const toast = useToast()
    const [storageNum, setStorageNum] = useState(Number(localStorage.length))

    return (
        <Stack pt='5' pb={10} px={2} bgGradient="radial(gray.100, green.50, green.100)" minHeight={'100vh'}>
            <Flex w='100%' justifyContent={'space-between'} maxWidth='620px' alignItems={'center'} mr='auto' ml='auto'>
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
            <Flex display='flex' flexWrap={'wrap'} flexDirection='row' gap={['15px', '20px', '25px']} justifyContent='center' alignItems={'center'}>
                {fruitList.map((elem, index) => <Card key={index} name={elem.name} price={elem.price} url={elem.url} type={elem.type} setStorageNum={setStorageNum} />)}
            </Flex>
            <Link to={'/payment'}><Image src={carIcon} p='5px 5px 5px 10px' h={50} w='60px' position={'fixed'} right={1} bottom={5} size='lg' bgColor={'blackAlpha.600'} borderRadius='15px 3px 3px 15px' /></Link>
        </Stack >
    )
}

export default ListFruits