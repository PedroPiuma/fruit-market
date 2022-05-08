import { Stack, UnorderedList, ListItem, Flex, Text, Button, Circle, Image } from '@chakra-ui/react'
import { Fragment } from 'react'
import { Link as ReachLink, Outlet } from 'react-router-dom'
import fruitLogo from '../../img/fruit-logo.png'

function Layout() {
    return (
        <Fragment>
            <Stack pt={'30px'} pb='5px' color={'white'} bgGradient={'linear(to-b, gray.100, green.400)'} borderBottom={'3px solid green'}>
                <Flex pb={2} borderBottom={'3px solid green'} textAlign={'center'} justify='space-around' align={'center'} m={'0 5px'} gap='5px'>
                    <Circle as={Image} src={fruitLogo} border='1px solid black' alt='Foto da fruta' boxSize='80px' objectFit='cover' />
                    <Text as={'ins'} fontSize={'xl'} p='5px' color='black' w='220px' bgColor='rgb(0 0 0 / 14%)' borderRadius='10px 10px 35px'>Bem-vindo! Fruit_Market_Place</Text>
                </Flex>
                <Flex as={UnorderedList} justifyContent='space-around' bgColor={'green'}>
                    <ListItem listStyleType={'none'}><Button as={ReachLink} to='/' colorScheme='teal' variant='solid' height={'fit-content'} paddingTop={1} paddingBottom={1}>Home</Button></ListItem>
                    <ListItem listStyleType={'none'}><Button as={ReachLink} to='/payment' colorScheme='teal' variant='solid' height={'fit-content'} paddingTop={1} paddingBottom={1}>Carrinho</Button></ListItem>
                </Flex>
            </Stack>
            <Outlet />
        </Fragment >
    )
}

export default Layout