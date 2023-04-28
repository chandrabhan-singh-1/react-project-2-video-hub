import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
    const videosArr = [
        `https://www.youtube.com/embed/CeFQO9MQNqs`,
        `https://www.youtube.com/embed/xZQ_Qw2IJOQ`,
        `https://www.youtube.com/embed/P-DhwN87JDY`,
        `https://www.youtube.com/embed/V5cV30yFXLA`,
        `https://www.youtube.com/embed/RiJymsaacAA`,
        `https://www.youtube.com/embed/bbOalPurETg`,
        `https://www.youtube.com/embed/s69TD86kH5E`,
        `https://www.youtube.com/embed/PO6nynliE0Q`,
        `https://www.youtube.com/embed/aOlQhmyog7k`,
        `https://www.youtube.com/embed/eizIc5eQiEM`,
        `https://www.youtube.com/embed/4DfVxVeqk2o`,
        `https://www.youtube.com/embed/CQ9F6Ocr3t8`,
        `https://www.youtube.com/embed/NbWKYgaWzbI`,
        `https://www.youtube.com/embed/_0Wf4nPdmvo`,
        `https://www.youtube.com/embed/O2WsSIk3ORQ`,
        `https://www.youtube.com/embed/XJITnLv4F-o`,
        `https://www.youtube.com/embed/X7L4wvljHhM`,
        `https://www.youtube.com/embed/fBWUSK-AedE`,
        `https://www.youtube.com/embed/HqtQ4_pYU68`,
        `https://www.youtube.com/embed/PqFMFVcCZgI`,
        `https://www.youtube.com/embed/KUN5Uf9mObQ`,
        `https://www.youtube.com/embed/HZsRjrYW-lk`,
        `https://www.youtube.com/embed/NwdQx2P_ytk`,
        `https://www.youtube.com/embed/EbyAoYaUcVo`,
        `https://www.youtube.com/embed/joI4Dp7XWnM`,
    ];

    const [videoSrc, setVideoSrc] = useState(videosArr[0]);

    return (
        <Stack direction={['column', 'column', 'row']} p={'12px'}>
            <VStack w={'full'} h={['80vh', '90vh', '100vh']} p={['1', '1', '2']} mb={'8'} spacing={'12'}>
                <iframe src={videoSrc} title="YouTube video player" style={{
                    border: '3px solid cyan',
                    borderRadius: '10px',
                    height: '75vh',
                    width: '90%',
                }} allow="accelerometer; autoplay; clipboard-write; fullscreen; captions; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <VStack alignItems={'flex-start'} w={'full'} h={['40vh', '40vh', '25vh']} overflowY={'auto'}>
                    <Heading>Sample Video</Heading>
                    <Text>
                        Throughout history, songs have been an integral part of human culture, forming the backbone of musical traditions across different regions and eras. Whether in popular music, folk traditions, classical compositions, or religious hymns, songs have a profound impact on individuals and societies, transcending language barriers and leaving a lasting imprint on our collective consciousness.
                    </Text>
                </VStack>
            </VStack>
            <VStack
                w={['full', 'md']}
                height={['60vh', '60vh', '100vh']}
                alignItems={'stretch'}
                color={'red'}
                py={['1', '1', '10']}
                spacing={'8'}
                overflowY={'auto'}
            >
                {videosArr.map((item, index) => (
                    <Button
                        variant={'ghost'}
                        colorScheme={'cyan'}
                        onClick={() => setVideoSrc(item)}
                    >
                        Music Video {index + 1}
                    </Button>
                ))}
            </VStack>
        </Stack>
    );
};

export default Videos;
