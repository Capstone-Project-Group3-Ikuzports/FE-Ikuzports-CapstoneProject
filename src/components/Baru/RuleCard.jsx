import React from 'react'
import { Box, Card, CardHeader, Text, Stack, StackDivider, } from '@chakra-ui/react'

const RuleCard = ({rule}) => {
  return (
    <div>
            <Box ml='auto'>
            <Card w={'20vw'} h={'100vh'} bg='white' mt={10}>
              <CardHeader>
                <Text fontSize={'4xl'}>Rules</Text>
              </CardHeader>
              <Stack divider={<StackDivider />} spacing='4' w={'90%'} mx='auto'>
                <Box ml={6}>
                  <Text pt='2' as='b' fontSize='md'>
                    {rule}
                  </Text>
                </Box>
                <Box ml={6}>
                  <Text pt='2' as='b' fontSize='md'>
                    {rule}
                  </Text>
                </Box>
              </Stack>
            </Card>
            </Box>
    </div>
  )
}

export default RuleCard