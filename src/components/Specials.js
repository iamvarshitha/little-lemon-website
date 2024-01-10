import { HStack, Card, Stack, Heading, Text, CardBody, Image, VStack, Button } from '@chakra-ui/react';
import React, { Component } from 'react';
import bruchetta from '../icon_assets/bruchetta.svg';
import salad from '../icon_assets/greek salad.jpg';
import dessert from '../icon_assets/lemon dessert.jpg'
import delivery from '../icon_assets/Dish icon.svg'
//import dessert from '../icon_assests/lemon dessert.jpg';

const textStyle = {
    textAlign: 'right'
};

export default class Specials extends Component {

    render() {
        return (
            <div className='specials'>
                <VStack>
                    <HStack display='flex' justifyContent='space-between'>
                        <Heading ml='-5rem' size='2xl'>Specials</Heading>
                        <Button mr='-30rem' bg="brand.100">Online Menu</Button>
                    </HStack>
                    <HStack spacing='50px' className='cards'>
                        <Card maxW='sm' h='30rem'>
                            <CardBody>
                                <Image
                                src={bruchetta}
                                alt='bruchetta'
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='lg'>Bruschetta</Heading>
                                <div style={textStyle}>
                                    <h1>$4.99</h1>
                                </div>
                                <Text color='black'>
                                Toasted bread that is topped with tomatoes, cheese, garlic, and fresh basil.
                                </Text>
                                <Text color='black' fontSize='xl'>
                                    Order Delivery  <img src={delivery} alt='delivery' />
                                </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card maxW='sm' h='30rem'>
                            <CardBody>
                                <Image
                                src={salad}
                                alt='salad'
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='lg'>Greek Salad</Heading>
                                <div style={textStyle}>
                                    <h1>$5</h1>
                                </div>
                                <Text color='black'>
                                A traditional Greek salad consists of sliced cucumbers, tomatoes,bell pepper, onion, olives, and cheese.
                                </Text>
                                <Text color='black' fontSize='xl'>
                                    Order Delivery <img src={delivery} alt='delivery' />
                                </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card maxW='sm' h='30rem'>
                            <CardBody>
                                <Image
                                src={dessert}
                                alt='dessert'
                                borderRadius='lg'
                                w='100%'
                                h='50%'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='lg'>Lemon Dessert</Heading>
                                <div style={textStyle}>
                                    <h1>$4.50</h1>
                                </div>
                                <Text color='black'>
                                Two layers of moist lemon-flavored cake coated in a rich lemon-flavored cream cheese frosting.
                                </Text>
                                <Text color='black' fontSize='xl'>
                                    Order Delivery  <img src={delivery} alt='delivery' />
                                </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </HStack>
                </VStack>
            </div>
        )
    }
}