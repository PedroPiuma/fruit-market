import { Stack, UnorderedList, ListItem, Flex } from '@chakra-ui/react'
import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <Fragment>
            <Stack backgroundColor='gray'>
                <Flex as={UnorderedList} justifyContent='space-around' padding={15}>
                    <ListItem><Link to='/'>Home</Link></ListItem>
                    <ListItem><Link to='/payment'>Carrinho</Link></ListItem>
                </Flex>
            </Stack>
            <Outlet />
        </Fragment>
    )
}

export default Layout