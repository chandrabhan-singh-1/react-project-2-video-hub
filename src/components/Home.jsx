import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import png1 from '../assets/png1.png';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '90%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '3',
    size: 'xl',
    borderRadius: '10px',
};

const Home = () => {
    return (
        <>
            <Box>
                <MyCarousel />

                <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>

                    <Heading
                        textTransform={'uppercase'}
                        py={'2'}
                        w={'fit-content'}
                        borderBottom={'2px solid'}
                        m={'auto'}
                    >
                        Introduction
                    </Heading>

                    <Stack
                        p={'4'}
                        h={'full'}
                        alignItems={'center'}
                        direction={['column', 'column', 'row']}
                    >

                        <Image src={png1} h={['60', '60', '400']} filter={'hue-rotate(-10deg)'} />

                        <Text
                            letterSpacing={'widest'}
                            lineHeight={'190%'}
                            p={['4', '4', '12']}
                            textAlign={'center'}
                            fontSize={'lg'}
                        >
                            Music, like a celestial symphony, resonates through the cosmic tapestry, weaving melodies that caress the very fabric of our existence. It is the ethereal language of emotions, painting vivid landscapes of passion, sorrow, and joy upon the canvas of our souls. With every note, it unlocks the doors of our imagination, inviting us to soar to unfathomable heights, and immerse ourselves in a transcendent realm where time stands still and the beauty of the universe unfolds in harmonious grandeur. Within its resounding embrace, we discover a sanctuary where sorrows are soothed, joys are amplified, and the very essence of our being finds solace in the symphony of existence. Music, the celestial conductor orchestrating the harmonious dance of life, whispers secrets of the universe, echoing the echoes of eternity itself.
                        </Text>
                    </Stack>

                </Container>

            </Box>


        </>
    );
};

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1500}
        showStatus={false}
    >

        <Box w={'full'} h={'100vh'}>

            <Image src={img1} h={'full'} w={'full'} objectFit={'fill'} />

            <Heading bgColor={'blackAlpha.700'} color={'cyan'} {...headingOptions}>
                Music is Love!
            </Heading>

        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} h={'full'} w={'full'} objectFit={'fill'} />
            <Heading bgColor={'blackAlpha.700'} color={'cyan'} {...headingOptions}>
                Feel the Music!
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} h={'full'} w={'full'} objectFit={'fill'} />
            <Heading bgColor={'blackAlpha.700'} color={'cyan'} {...headingOptions}>
                Explore the Music!
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} h={'full'} w={'full'} objectFit={'fill'} />
            <Heading bgColor={'blackAlpha.700'} color={'cyan'} {...headingOptions}>
                Live the Music!
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img5} h={'full'} w={'full'} objectFit={'fill'} />
            <Heading bgColor={'blackAlpha.700'} color={'cyan'} {...headingOptions}>
                Music is Life!
            </Heading>
        </Box>

    </Carousel>
)

export default Home;