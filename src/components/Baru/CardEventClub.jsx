import React from 'react'

const Card = ({children, linkGambar}) => {
  return (
    <div>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='filled'
        backgroundColor={'white'}
        mt={'50px'}
        shadow='xl'
        _hover={{cursor: 'pointer'}}
        >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '300px' }}
          src={linkGambar}
          alt='Caffe Latte'
        />
        <Stack w={"100%"}>
          {children}
        </Stack>
      </Card>
    </div>
  )
}

export default Card