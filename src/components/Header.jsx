import React from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                pos={'fixed'}
                zIndex={'overlay'}
                top={'4'}
                left={'4'}
                colorScheme={'cyan'}
                px={'2'}
                borderRadius={'full'}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'22'} />
            </Button>

            <Drawer placement={'left'} isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay>

                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>VIDEO HUB</DrawerHeader>

                        <DrawerBody>
                            <VStack spacing={'8'}>
                                <Button onClick={onClose} variant={'ghost'} style={{ fontSize: 22, }} colorScheme={'cyan'}>
                                    <Link to={'/'} >Home</Link>
                                </Button>

                                <Button onClick={onClose} variant={'ghost'} style={{ fontSize: 22, }} colorScheme={'cyan'}>
                                    <Link to={'/videos'}>Videos</Link>
                                </Button>

                                <Button onClick={onClose} variant={'ghost'} style={{ fontSize: 22, }} colorScheme={'cyan'}>
                                    <Link to={'/videos?category=free'}>Free Videos</Link>
                                </Button>

                                <Button onClick={onClose} variant={'ghost'} style={{ fontSize: 22, }} colorScheme={'cyan'}>
                                    <Link to={'/upload'}>Upload</Link>
                                </Button>
                            </VStack>

                            <HStack position={'absolute'} bottom={'10'} w={'full'} justifyContent={'space-evenly'} paddingRight={'10'}>

                                <Button onClick={onClose} style={{ fontSize: 20, }} colorScheme={'cyan'}>
                                    <Link to={'/login'}>Log In</Link>
                                </Button>

                                <Button onClick={onClose} style={{ fontSize: 20, }} colorScheme={'cyan'} variant={'outline'}>
                                    <Link to={'/signup'}>Sign Up</Link>
                                </Button>

                            </HStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>

            </Drawer>
        </>
    );
}

export default Header;