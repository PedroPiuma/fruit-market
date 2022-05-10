import { Text, List, ListItem, Stack, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Flex } from "@chakra-ui/react"
import { useState } from "react"

const CardPayment = ({ list, id, setChanged }) => {
    const [fruit, data] = list
    const [{ priceFinal }, { quantity }, { type }] = JSON.parse(data)
    const [price, setPrice] = useState(priceFinal)
    const [removed, setRemoved] = useState(false)

    const inputChangeListener = (elem) => {
        const storage = JSON.parse(localStorage.getItem(fruit))
        storage[1].quantity = Number(elem)
        storage[0].priceFinal = (Number(elem) * storage[3].price).toFixed(2)
        setPrice(storage[0].priceFinal)
        localStorage.setItem(fruit, JSON.stringify(storage))
        setChanged(true)
        return elem > (type === 'kg' ? 10 : 25) ? alert(`Quantidade máxima permitidade é ${type === 'kg' ? 10 : 25}`) : ''
    }

    return (
        <Stack p={5} boxShadow='dark-lg' borderRadius={15} bgGradient='linear(to-b, green.100, blackAlpha.200)'>
            <Text>Compra número: {id}</Text>
            {!removed ? <Flex gap={15}>
                <List spacing={1}>
                    <ListItem>Fruta: {fruit}</ListItem>
                    <ListItem>Preço: R${price.toString().replace('.', ',')}</ListItem>
                </List>
                <List spacing={1}>
                    <ListItem>Quantidade em {type}:
                        {<NumberInput width={100} maxLength={2} defaultValue={quantity}
                            precision={type === 'kg' ? 3 : 0} max={type === 'kg' ? 10 : 25} min={type === 'kg' ? 0.2 : 1} step={type === 'kg' ? 0.05 : 1}
                            onChange={(elem) => inputChangeListener(elem)}>
                            <NumberInputField maxLength={5} />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>}</ListItem>
                    <Button size={'xs'} colorScheme='blackAlpha' onClick={() => {
                        localStorage.removeItem(fruit)
                        setRemoved(!removed)
                    }}>Remover da lista</Button>
                </List>
            </Flex> :
                <Flex direction={'column'} align='center'>
                    <p>Compra removida</p>
                    <Button size={'xs'} colorScheme='blackAlpha' /*onClick={() => setRemoved(!removed)}*/>Desfazer</Button>
                </Flex>}
        </Stack >
    )
}

export default CardPayment
