import { Circle, Flex, Image, Badge, Stat, StatLabel, StatNumber, StatHelpText, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { Container } from './styled'

const Card = ({ name, price, url, type }) => {
    const [zoom, setZoom] = useState(false)
    // const [display, setDisplay] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef()

    return (
        <Container>
            <Flex flexDirection={'column'} alignItems='center'>
                <p>{name}</p>
                <Circle as={Image} src={url} alt='Foto da fruta' boxSize='150px' objectFit='cover' />
            </Flex>
            <Flex flexDirection={'column'}>
                <Stat display={'flex'} flexDirection='column' alignItems={'center'}>
                    <StatLabel><Badge variant='outline' colorScheme='green'>Disponível</Badge></StatLabel>
                    <StatNumber>R${price.toFixed(2)}</StatNumber>
                    <StatHelpText>Preço por {type === 'kg' ? type : 'unidade'} </StatHelpText>
                </Stat>
                <Button colorScheme='teal' size='xs' onClick={() => {
                    onOpen()
                    setZoom(!zoom)
                }}>Adicionar a lista</Button>
            </Flex>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDirection={'column'} alignItems='center'>
                            <p>{name}</p>
                            <Circle as={Image} src={url} alt='Foto da fruta' boxSize='150px' objectFit='cover' />
                        </Flex>
                        <Flex flexDirection={'column'}>
                            <Stat display={'flex'} flexDirection='column' alignItems={'center'}>
                                <StatLabel><Badge variant='outline' colorScheme='green'>Disponível</Badge></StatLabel>
                                <StatNumber>R${price.toFixed(2)}</StatNumber>
                                <StatHelpText>Preço por {type === 'kg' ? type : 'unidade'} </StatHelpText>
                            </Stat>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='teal' size='xs' onClick={() => {
                            onOpen()
                            setZoom(!zoom)
                        }}>Adicionar a lista</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container >
    )
}

export default Card