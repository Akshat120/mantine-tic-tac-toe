import { Group, Paper, Container, Grid, Button, Skeleton, DirectionContext, Flex, Text, Input } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import PlayerBox from '../PlayerBox/PlayerBox';
import GameBox from '../GameBox/GameBox';

export default function GameBoard() {
    const [ isPlayer1, setIsPlayer1 ] = useState(true)
    const [  isWinner, setIsWinner ] = useState('')
    return <>
    <Group justify='center'>
        <Paper
            display="flex" 
            shadow='sm' 
            style={{ 
            backgroundColor: isWinner ? 'rgba(201, 135, 67, 0.58)' : 'transparent',
            flexDirection:"column", 
            alignItems: "center"
            }} 
            withBorder 
            mt={10} 
            p={20} 
            h={600} 
            w={600}
        >
            {isWinner && 
                <Text 
                    size="xl" 
                    fw="bold"
                    variant='gradient'
                    fz={100} 
                    gradient={{ from: 'white', to: 'blue' }}
                    style={{ 
                    position: 'absolute',
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    zIndex: 1,
                    color: 'white'
                    }}
                >{isWinner}</Text>
            }
            <PlayerBox isWinner={isWinner} player1={isPlayer1}/>
            <GameBox 
            isWinner={isWinner} 
            setIsWinner={setIsWinner} 
            player1={isPlayer1} 
            setIsPlayer1={setIsPlayer1}
            />
        </Paper>
    </Group>
    </>
}
