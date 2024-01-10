import { HStack, VStack, Heading, Text, Image, Box, Wrap } from '@chakra-ui/react';
import React, { Component } from 'react';
import pic1 from '../icon_assets/Mario and Adrian A.jpg'
import pic2 from '../icon_assets/Mario and Adrian b.jpg'
//import pic1 from '../icon_assests/Mario and Adrian A.jpg'
//import pic2 from '../icon_assests/Mario and Adrian b.jpg'

export default class Bio extends Component {
    render() {
        return (
            <div>
                <HStack>
                    <Wrap spacing='30px' justify='left'>
                    <Box mr='5rem' ml='10rem' boxSize='md' justify='left'>
                    <VStack>
                        <Heading size='2xl' justify='left' color='black'>Little Lemon</Heading>
                        <Text color='black'>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </Text>
                    </VStack>
                    </Box>
                    </Wrap>
                    <Box boxSize='md'> <Image src={pic1}/></Box>
                    <Box boxSize='md'> <Image src={pic2}/></Box>
                </HStack>
            </div>
        )
    }
}