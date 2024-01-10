import React from 'react';
import { VStack, Text, Heading } from '@chakra-ui/react';

const ConfirmedBooking = (props) => {
    const { formData } = props;

    return (
        <div>
            <VStack mb='2rem' w='100%' bg='brand.200' p={10}>
                <Heading color='white'>Booking Confirmed!!</Heading>
                <Text>Date: {formData && formData.date}</Text>
                <Text>Time: {formData && formData.time} </Text>
                <Text>Guests: {formData && formData.guests} </Text>
                <Text>Occasion: {formData && formData.occasion} </Text>
            </VStack>
        </div>
    );
};

export default ConfirmedBooking;
