import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stat, StatLabel, StatNumber, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { useRef, useState } from "react"
import CardPayment from "../components/CardPayment/CardPayment"

function Payment() {
    const [changed, setChanged] = useState(false)
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef()
    let totalValue = 0

    const finishPayment = () => {
        let toPay = []
        Object.entries(localStorage).forEach(([fruit, values]) => {
            const valuesParsed = JSON.parse(values)
            const [priceFinal, quantity, type, price] = valuesParsed
            toPay.push({ name: fruit, qtd: quantity.quantity, type: type.type, payment: priceFinal.priceFinal, price: price.price })
        })
        toPay.unshift({ paymentTotal: totalValue })
        console.log(toPay)
    }

    // if (localStorage.length < 1) return <p>Não há compras na lista</p>;
    return (
        <Flex direction='column' align='center' bgGradient="radial(gray.100, green.50, green.100)" minHeight={'100vh'}>
            <Text mb={3} mt={3} fontSize={'xl'}>Seu carrinho de compras</Text>
            <Flex direction={'column'} gap={2}>
                {localStorage.length < 1 ? <Text w={250} align='center'>Não há produtos na lista de compras.</Text> : ''}
                {Object.entries(localStorage).map((elemStorage, index) => {
                    totalValue += elemStorage[0] !== 'user' ? Number(JSON.parse(elemStorage[1])[0].priceFinal) : 0
                    return elemStorage[0] !== 'user' ? <CardPayment key={index} id={index + 1} list={elemStorage} setChanged={setChanged} /> : false
                })}
            </Flex>
            <Flex direction={'column'} align='center'>
                <Stat mt={5}>
                    <StatLabel>Valor Total</StatLabel>
                    <StatNumber>R$ {localStorage.length < 1 ? '---' : `${totalValue.toFixed(2)}`}</StatNumber>
                </Stat>
                <Flex gap={3} mt='15px'>
                    <Button size={'xs'} width='fit-content' colorScheme={'red'} onClick={() => {
                        localStorage.clear()
                        toast({
                            title: `Carrinho limpo com sucesso`,
                            status: 'success',
                            isClosable: true,
                        })
                    }
                    }>Limpar Carrinho</Button>
                    <Button size={'xs'} colorScheme='whatsapp' onClick={onOpen} >Finalizar Compra</Button>
                </Flex>
            </Flex>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={'xs'} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Finalização da Compra</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} alignItems='center' justifyContent={'space-around'} gap={5}>
                        {changed ? <Alert
                            status='warning'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='300px'
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Você modificou a quantidade de itens do carrinho!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                Verifique abaixo a lista
                                {Object.entries(localStorage).map(elemStorage => {
                                    // console.log(JSON.parse(elemStorage[1])[2].type)
                                    return <p>{elemStorage[0]}: {JSON.parse(elemStorage[1])[1].quantity.toFixed(3)}{JSON.parse(elemStorage[1])[2].type} por R${JSON.parse(elemStorage[1])[0].priceFinal}</p>
                                })}
                            </AlertDescription>
                        </Alert> :
                            <Alert
                                status='success'
                                variant='subtle'
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'
                                textAlign='center'
                                height='200px'
                            >
                                <AlertIcon boxSize='40px' mr={0} />
                                <AlertTitle mt={4} mb={1} fontSize='lg'>
                                    Compra finalizada!
                                </AlertTitle>
                                <AlertDescription maxWidth='sm'>
                                    Thanks for submitting your application. Our team will get back to you soon.
                                </AlertDescription>
                            </Alert>}
                    </ModalBody>
                    <ModalFooter><Button colorScheme='green' size='xs' onClick={() => {
                        onClose()
                        finishPayment()
                    }}>{changed ? 'Confirmar e Finalizar' : 'OK'}</Button></ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default Payment