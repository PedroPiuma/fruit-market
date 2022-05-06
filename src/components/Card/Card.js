import { Circle, Flex, Image, Badge, Stat, StatLabel, StatNumber, StatHelpText, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, useToast } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { Container } from './styled'

const Card = ({ name, price, url, type }) => {
    const [priceFinal, setPriceFinal] = useState(`R$ ${(0.5 * price).toFixed(2)}`)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef()
    const toast = useToast()

    const saveOnLocalStore = (fruitName, priceFinal) => localStorage.setItem(fruitName, priceFinal)

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
                <Button colorScheme='teal' size='xs' onClick={onOpen}>Quero comprar</Button>
            </Flex>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} alignItems='center' justifyContent={'space-around'} gap={5}>
                        <Circle as={Image} src={url} alt='Foto da fruta' boxSize='150px' objectFit='cover' />
                        <Flex flexDirection={'column'}>
                            <Stat display={'flex'} flexDirection='column' alignItems={'center'}>
                                <StatLabel><Badge variant='outline' colorScheme='green'>Disponível</Badge></StatLabel>
                                <StatNumber>R${price.toFixed(2)}</StatNumber>
                                <StatHelpText>Preço por {type === 'kg' ? type : 'unidade'} </StatHelpText>
                            </Stat>
                            <NumberInput defaultValue={0.5} precision={3} max={10} min={0.2} step={0.05} onChange={(e) => setPriceFinal(`R$ ${(e * price).toFixed(2)}`)}>
                                <NumberInputField maxLength={5} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Text>Preço final: {priceFinal}</Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter><Button colorScheme='teal' size='xs' onClick={() => {
                        saveOnLocalStore(name, priceFinal)
                        onClose()
                        toast({
                            title: `Adicionado a lista`,
                            status: 'success',
                            isClosable: true,
                        })
                    }}>Adicionar a lista</Button></ModalFooter>
                </ModalContent>
            </Modal>
        </Container >
    )
}

export default Card