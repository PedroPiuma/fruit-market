import { Stack, UnorderedList, ListItem, Flex, Text, Button, Image, useMediaQuery } from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import { Link as ReachLink, Outlet } from 'react-router-dom'
import fruitLogo from '../../img/fruit-logo.png'
import appleGif from '../../img/apple-gif.gif'
import carIcon from '../../img/car-icon.png'
import homeIcon from '../../img/home-icon.png'

function Layout() {
    const [easter, setEaster] = useState(fruitLogo)
    const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
    return (
        <Fragment>
            <Stack pt={'30px'} pb='8px' color={'white'} borderBottom={'3px solid green'} bgGradient="linear(gray.50, gray.200, green.100)">
                <Flex pb={2} borderBottom={'3px solid green'} textAlign={'center'} align={'center'} m={'0 auto'} gap='5px' >
                    <Image bg={'blackAlpha.400'} borderRadius='35px 5px 5px 8px' p={1} src={easter} alt='Foto da fruta' boxSize='100px' objectFit='cover' onClick={() => setEaster(appleGif)} />
                    <Text fontSize={'2xl'} p='8' color='green' w='220px' h='100px' bg={'blackAlpha.100'} borderRadius='5px 35px 35px 5px' textShadow='1px 1px 2px #000000'>Bem-vindo!</Text>
                    {isLargerThan1024 ? <Flex as={Flex} direction={'column'} alignSelf={'flex-end'} ml='150px'>
                        <Text color='black' textShadow='1px 1px 2px #000000'>Fruit Market Place, sempre com você!</Text>
                        <Text color='green' textShadow='1px 1px 5px #000000'>Orgânico e fresquinho como sempre</Text>
                    </Flex> : ''}
                </Flex>
                <Flex as={UnorderedList} justifyContent='space-around' bgColor={'blackAlpha.200'}>
                    <ListItem listStyleType={'none'}><Button as={ReachLink} to='/' colorScheme='green' variant='solid' height={'fit-content'} w={20} paddingTop={2} paddingBottom={2}><Image h={6} src={homeIcon} /></Button></ListItem>
                    <ListItem listStyleType={'none'}><Button as={ReachLink} to='/payment' colorScheme='green' variant='solid' height={'fit-content'} w={20} paddingTop={2} paddingBottom={2}><Image h={6} src={carIcon} /></Button></ListItem>
                </Flex>
            </Stack>
            <Outlet />
        </Fragment >
    )
}

export default Layout