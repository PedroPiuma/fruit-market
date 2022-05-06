import {
    Circle, Flex, Image, Badge, Stat, StatLabel, StatNumber, StatHelpText, Button,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
    ModalFooter, useDisclosure, Text, NumberInput, NumberInputField, NumberInputStepper,
    NumberIncrementStepper, NumberDecrementStepper, useToast
} from "@chakra-ui/react"
import { useRef, useState } from "react"

// webSettings.setDomStorageEnabled(true)

const Card = ({ name, price, url, type }) => {
    const [priceFinal, setPriceFinal] = useState(`R$ ${(0.5 * price).toFixed(2)}`)
    const [quantity, setQuantity] = useState(type === 'kg' ? 0.5 : 1)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef()
    const toast = useToast()
    const saveOnLocalStorage = (fruitName, object) => {
        localStorage.setItem(fruitName, object)
        // localStorage.mobile.setItem(fruitName, object)
    }

    return (
        <Flex alignItems={'center'} border={'1px solid blue'} borderRadius='15px' justifyContent={'space-around'}
            padding={'5px'} gap='5x' width={'100%'} height={'100%'} maxWidth={370} maxHeight={190}>
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

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={'xs'} >
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
                            <NumberInput defaultValue={type === 'kg' ? 0.5 : 1} precision={type === 'kg' ? 3 : 0} max={type === 'kg' ? 10 : 25} min={type === 'kg' ? 0.2 : 1} step={type === 'kg' ? 0.05 : 1} onChange={(e) => {
                                setQuantity(e)
                                setPriceFinal(`R$ ${(e * price).toFixed(2)} `)
                            }}>
                                <NumberInputField maxLength={5} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Badge variant='solid' colorScheme='green' textAlign={'center'} borderRadius='0 0 15px 15px' >
                                <Text>Preço final</Text>
                                <Text fontSize={'sm'}>{priceFinal}</Text>
                            </Badge>
                        </Flex>
                    </ModalBody>
                    <ModalFooter><Button colorScheme='teal' size='xs' onClick={() => {
                        saveOnLocalStorage(name, JSON.stringify([{ priceFinal }, { quantity }]))
                        onClose()
                        toast({
                            title: `Adicionado a lista`,
                            status: 'success',
                            isClosable: true,
                        })
                    }}>Adicionar a lista</Button></ModalFooter>
                </ModalContent>
            </Modal>
        </Flex >
    )
}

export default Card