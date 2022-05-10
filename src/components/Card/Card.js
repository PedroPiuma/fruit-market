import {
    Circle, Flex, Image, Badge, Stat, StatLabel, StatNumber, StatHelpText, Button,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
    ModalFooter, useDisclosure, Text, NumberInput, NumberInputField, NumberInputStepper,
    NumberIncrementStepper, NumberDecrementStepper, useToast
} from "@chakra-ui/react"
import { useRef, useState } from "react"

const Card = ({ name, price, url, type, setStorageNum }) => {
    const [priceFinal, setPriceFinal] = useState((0.5 * price).toFixed(2))
    const [quantity, setQuantity] = useState(type === 'kg' ? 0.5 : 1)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef()
    const toast = useToast()
    const saveOnLocalStorage = (fruitName, object) => {
        localStorage.setItem(fruitName, object)
        onClose()
        toast({
            title: `Adicionado a lista`,
            status: 'success',
            isClosable: true,
        })
    }

    return (
        <Flex bgGradient={'linear(to-tr, blackAlpha.100, green.50)'} alignItems={'center'}
            borderBottom='2px' borderTop='2px' borderStyle='solid' borderColor={'green'} borderRadius='8px' justifyContent={'space-around'}
            padding={'5px'} gap='5x' width='304px' height={190}>
            <Flex flexDirection={'column'} alignItems='center'>
                <Text>{name}</Text>
                <Circle as={Image} src={url} border='1px solid' borderColor='blackAlpha.600' alt='Foto da fruta' boxSize='150px' objectFit='cover' />
            </Flex>
            <Flex flexDirection={'column'}>
                <Stat display={'flex'} flexDirection='column' alignItems={'center'}>
                    <StatLabel><Badge variant='solid' colorScheme='green'>Disponível</Badge></StatLabel>
                    <StatNumber>R${price.toFixed(2)}</StatNumber>
                    <StatHelpText>Preço por {type === 'kg' ? type : 'unidade'} </StatHelpText>
                </Stat>
                <Button colorScheme='green' size='xs' onClick={onOpen}>Quero comprar</Button>
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
                            <NumberInput maxLength={2} defaultValue={type === 'kg' ? 0.5 : 1} precision={type === 'kg' ? 3 : 0} max={type === 'kg' ? 10 : 25} min={type === 'kg' ? 0.2 : 1} step={type === 'kg' ? 0.05 : 1} onChange={(e) => {
                                setQuantity(e)
                                setPriceFinal((e * price).toFixed(2))
                                return e > 10 ? alert(`Quantidade máxima permitidade é ${type === 'kg' ? 10 : 25}`) : ''
                            }}>
                                <NumberInputField maxLength={5} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Badge variant='solid' colorScheme='green' textAlign={'center'} borderRadius='0 0 15px 15px' >
                                <Text>Preço final</Text>
                                <Text fontSize={'sm'}>R$ {priceFinal}</Text>
                            </Badge>
                        </Flex>
                    </ModalBody>
                    <ModalFooter><Button colorScheme='green' size='xs' onClick={() => {
                        saveOnLocalStorage(name, JSON.stringify([{ priceFinal }, { quantity }, { type }, { price }]))
                        setStorageNum(Number(localStorage.length))
                    }}>Adicionar a lista</Button></ModalFooter>
                </ModalContent>
            </Modal>
        </Flex >
    )
}

export default Card