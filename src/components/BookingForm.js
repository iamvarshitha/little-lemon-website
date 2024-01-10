import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading
} from "@chakra-ui/react";
import * as Yup from 'yup';

const BookingForm = (props) => {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occasion: ''
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      guests: Yup.number()
        .min(1, 'Must have at least 1 person')
        .max(10, 'Can\'t reserve for parties more than 10')
        .required('Required'),
      occasion: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      props.submitForm(values);
    }
  });

  const handleChange = (date) => {
    props.dispatch(date);
  }

  return (
    <VStack mb='2rem' bg='brand.200'>
      <VStack w="1024px" mb='5rem' p={10}>
        <Heading mt='2rem' color='white' size='xl'>Book your reservation now!</Heading>
        <Box rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                <FormLabel color='black' htmlFor="date">Choose Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  color='black'
                  onChange={() => handleChange(formik.values.date)}
                  {...formik.getFieldProps("date")}
                />
                {formik.errors.date && formik.touched.date ? <FormErrorMessage>{formik.errors.date}</FormErrorMessage> : null}
              </FormControl>

              <FormControl>
                <FormLabel color='black' htmlFor="time">Choose Time</FormLabel>
                <Select
                  color='black'
                  id="time"
                  name="time"
                  onChange={formik.handleChange}
                  value={formik.values.time}
                  onBlur={formik.handleBlur}
                >
                  {props.availableTimes.availableTimes.map(availableTimes => (
                    <option key={availableTimes}>{availableTimes}</option>
                  ))}
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                <FormLabel color='black' htmlFor="guests">Number of Guests</FormLabel>
                <Input
                  id="guests"
                  name="guests"
                  type='number'
                  color='black'
                  {...formik.getFieldProps("guests")}
                />
                {formik.errors.guests && formik.touched.guests ? <FormErrorMessage>{formik.errors.guests}</FormErrorMessage> : null}
              </FormControl>

              <FormControl>
                <FormLabel color='black' htmlFor="occasion">Occasion</FormLabel>
                <Select
                  color='black'
                  id="occasion"
                  name="occasion"
                  onChange={formik.handleChange}
                  value={formik.values.occasion}
                  onBlur={formik.handleBlur}
                >
                  <option>Select an Option</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Party</option>
                </Select>
              </FormControl>

              <Button color='black' type="submit" bg="white" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </VStack>
  );
};

export default BookingForm;
