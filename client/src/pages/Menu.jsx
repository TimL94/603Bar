import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';

import Drinks from '../components/menu components/Drinks';
import Pizzas from '../components/menu components/Pizzas';
import Appetizers from '../components/menu components/Appetizers';
import BurgerAndHotDog from '../components/menu components/BurgersAndHotDogs';
import TendersAndWings from '../components/menu components/TendersAndWings';
import Kids from '../components/menu components/Kids';
import Salads from '../components/menu components/Salads';
import Subs from '../components/menu components/Subs';
import Desserts from '../components/menu components/Desserts';


function linkItems() {
    const linkSx = { mx: 1, fontSize: '1.25rem', textTransform: 'none' }
                return (
                <>
                <Link variant='button' underline='none' color='inherit' href='#pizzas' sx={linkSx}>{'Pizzas'}</Link>
                |
                <Link variant='button' underline='none' color='inherit' href='#appetizers' sx={linkSx}>{'Appetizers'}</Link>
                |
                <Link variant='button' underline='none' color='inherit' href='#burgerAndHotDog' sx={linkSx}>{'Burgers and Dogs'}</Link>
                |
                <Link variant='button' underline='none' color='inherit' href='#tendersAndWings' sx={linkSx}>{'Tenders and Wings'}</Link>
                |
                <Link variant='button' underline='none' color='inherit' href='#salads' sx={linkSx}>{'Salads'}</Link>
                |
                <Link variant='button' underline='none' color='inherit' href='#subs' sx={linkSx}>{'Subs'}</Link>
                |
                <Link variant='button' underline='none' color='inherit' href='#kids' sx={linkSx}>{'Kids'}</Link>
                |
                <Link variant='button' underline='none' color='inherit' href='#desserts' sx={linkSx}>{'Desserts'}</Link>
                |
                <Link variant='button' underline='none' color='inherit' href='#drinks' sx={linkSx}>{'Drinks'}</Link>
                </>)
}

function Menu() {
    return (
        <Container>
            <Box
                sx={{
                    position: 'sticky',
                    top: '10px',
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    minHeight: '3rem',
                    border: 2,
                    borderRadius: 2.5,
                    mt:1,
                    mb:-2,
                    background: 'white',
                    opacity: '95%',
                }}
            >
                {linkItems()}
            </Box>
            <Box
                sx={{
                    position: 'sticky',
                    top: '10px',
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    minHeight: '2rem',
                    border: 2,
                    borderRadius: 2.5,
                    mt:1,
                    mb:-2,
                    background: 'white',
                    opacity: '90%',
                }}
            >
                {linkItems()}
            </Box>
            <Box id='pizzas'>
                <Pizzas />
            </Box>
            <Box id='appetizers'>
                <Appetizers />
            </Box>
            <Box id='burgerAndHotDog'>
                <BurgerAndHotDog />
            </Box>
            <Box id='tendersAndWings'>
                <TendersAndWings />
            </Box>
            <Box id='salads'>
                <Salads />
            </Box>
            <Box id='subs'>
                <Subs />
            </Box>
            <Box id='kids'>
                <Kids />
            </Box>
            <Box id='desserts'>
                <Desserts />
            </Box>
            <Box id='drinks'>
                <Drinks />
            </Box>
        </Container>
    );
}

export default Menu;
