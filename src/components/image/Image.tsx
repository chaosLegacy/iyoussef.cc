import { Box, ChakraComponent } from '@chakra-ui/react'
import * as React from 'react'
import NextImage from 'next/image'
import { ComponentProps } from 'react'

interface ImageProps extends Omit<ComponentProps<ChakraComponent<'div', {}>>, 'children'> {
  src: string;
  alt: string;
}

export const Image = (props: ImageProps) => {
  const { src, alt, ...rest } = props
  return (
    <Box overflow={'hidden'} position='relative' {...rest}>
      <NextImage objectFit='cover' layout='fill' src={src} alt={alt} />
    </Box>
  )
}