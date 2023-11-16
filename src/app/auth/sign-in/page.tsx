'use client';

import React, { useEffect, useState } from 'react';
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
// Custom components
import { HSeparator } from '@components/separator/Separator';
import DefaultAuthLayout from '@layouts/auth/Default';
// Assets
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useRouter } from 'next/navigation';
import { useAuth } from '@contexts/AuthUserProvider';
import { Handler } from '@lib/types';

import dynamic from 'next/dynamic'
const Icon = dynamic(() => import('@chakra-ui/react').then((chakra) => chakra.Icon), {
  ssr: false,
});

export default function SignIn() {
  // Chakra color mode
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const textColor = useColorModeValue('brand.900', 'white');
  const textColorSecondary = 'gray.400';
  const router = useRouter();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { onSignInWithEmailAndPassword, onSignInWithGoogle} = useAuth();

  const SigningSchema = object().shape({
    email: string().email('Invalid email').required('Required'),
    password: string().min(8, 'Too Short!').required('Required'),
  });


  if (isClient) {
    return (
      <DefaultAuthLayout illustrationBackground={'/img/auth/auth.png'}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SigningSchema}
          onSubmit={async (values, actions) => {
            console.log(values);
            try {
              await onSignInWithEmailAndPassword(
                values.email,
                values.password,
              );
              actions.setSubmitting(false);
              router.push("/admin/default");
            } catch (error) {
              console.log(error);
              actions.setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, handleSubmit, handleChange, values, isSubmitting }) => (
            <Form>
              <Flex
                maxW={{ base: '100%', md: 'max-content' }}
                w="100%"
                mx={{ base: 'auto', lg: '0px' }}
                me="auto"
                h="100%"
                alignItems="start"
                justifyContent="center"
                mb={{ base: '30px', md: '60px' }}
                px={{ base: '25px', md: '0px' }}
                mt={{ base: '40px', md: '14vh' }}
                flexDirection="column"
              >
                <Box me="auto">
                  <Heading color={textColor} fontSize="36px" mb="10px">
                    Sign In
                  </Heading>
                  <Text
                    mb="36px"
                    ms="4px"
                    color={textColorSecondary}
                    fontWeight="400"
                    fontSize="md"
                  >
                    Enter your email and password to sign in!
                  </Text>
                </Box>
                <Flex
                  zIndex="2"
                  direction="column"
                  w={{ base: '100%', md: '420px' }}
                  maxW="100%"
                  background="transparent"
                  borderRadius="15px"
                  mx={{ base: 'auto', lg: 'unset' }}
                  me="auto"
                  mb={{ base: '20px', md: 'auto' }}
                >


                  <FormControl isRequired isInvalid={errors.email && touched.email}>
                    <FormLabel
                      display="flex"
                      ms="4px"
                      fontSize="sm"
                      fontWeight="500"
                      color={errors.email ? 'red' : textColor}
                      mb="8px"
                    >
                      Email
                    </FormLabel>

                    <Input
                      borderColor={errors.email ? 'red' : 'inherit'}
                      value={values.email}
                      onChange={handleChange('email')}
                      isRequired={true}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: '0px', md: '0px' }}
                      type="email"
                      placeholder="mail@simmmple.com"
                      fontWeight="500"
                      size="lg"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>



                  <FormControl mt="24px" isRequired isInvalid={errors.password && touched.password}>
                    <FormLabel
                      display="flex"
                      ms="4px"
                      fontSize="sm"
                      fontWeight="500"
                      color={errors.password ? 'red' : textColor}
                      mb="8px"
                    >
                      Password
                    </FormLabel>
                    <InputGroup size="md">
                      <Input
                        borderColor={errors.password ? 'red' : 'inherit'}
                        value={values.password}
                        onChange={handleChange('password')}
                        isRequired={true}
                        variant="auth"
                        fontSize="sm"
                        ms={{ base: '0px', md: '0px' }}
                        placeholder="Min. 8 characters"
                        size="lg"
                        type={show ? 'text' : 'password'}
                      />
                      <InputRightElement display="flex" alignItems="center" mt="4px">
                        <Icon
                          color={textColorSecondary}
                          _hover={{ cursor: 'pointer' }}
                          as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                          onClick={handleClick}
                        />
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Flex justifyContent="space-between" align="center" mt="24px" mb="24px">
                  <FormControl display="flex" alignItems="center">
                    <Checkbox
                      id="remember-login"
                      colorScheme="brandScheme"
                      me="10px"
                    />
                    <FormLabel
                      htmlFor="remember-login"
                      mb="0"
                      fontWeight="normal"
                      color={textColor}
                      fontSize="sm"
                    >
                      Keep me logged in
                    </FormLabel>
                  </FormControl>
                  
                </Flex>
                <Button
                  onClick={handleSubmit as Handler}
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  iconSpacing={4}
                  isLoading={isSubmitting}
                >
                  Sign In
                </Button>
                </Flex>
              </Flex>
            </Form>
          )}
        </Formik>
      </DefaultAuthLayout>
    );
}

}
