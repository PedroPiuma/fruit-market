import { Stack, UnorderedList, ListItem, Flex, Text, Button } from '@chakra-ui/react'
import { Fragment } from 'react'
import { Link as ReachLink, Outlet } from 'react-router-dom'
import fruitBackground from '../../img/fruit-background.png'

function Layout() {
    return (
        <Fragment>
            <Stack pt={'30px'} pb='10px' color={'white'} bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${fruitBackground})`} bgRepeat='no-repeat' bgSize={'cover'} bgPosition={'center'} >
                <Text fontSize={'xl'} m='0 auto 15px auto'>Olá! Bem-vindo ao Fruit Market Place</Text>
                <Flex as={UnorderedList} justifyContent='space-around'>
                    <ListItem listStyleType={'none'}><Button as={ReachLink} to='/' colorScheme='teal' variant='solid' height={'fit-content'} paddingTop={1} paddingBottom={1}>Home</Button></ListItem>
                    <ListItem listStyleType={'none'}><Button as={ReachLink} to='/payment' colorScheme='teal' variant='solid' height={'fit-content'} paddingTop={1} paddingBottom={1}>Carrinho</Button></ListItem>
                </Flex>
            </Stack>
            <Outlet />
        </Fragment >
    )
}

export default Layout