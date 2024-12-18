import { Group, Paper, Container, Grid, Button, Skeleton, DirectionContext, Flex, Text, Input } from '@mantine/core';
import { func } from 'prop-types';
import { useEffect, useState } from 'react';


type MatrixElement = React.ReactNode;
type Matrix = MatrixElement[][];

function findWinner(matrix: any, ele: any) {
    let rowArr = [0,0,0], colArr = [0,0,0], pD=0, sD=0;
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if(matrix[i][j]===ele) rowArr[i]++;
            if(matrix[j][i]===ele) colArr[i]++;
            if(i==j && matrix[i][j]===ele) pD++;
            if((i+j)==2 && matrix[i][j]===ele) sD++;
        }        
    }
    for(let i=0; i<3; i++) {
        if(rowArr[i]==3 || colArr[i]==3) return true;
    }
    return (pD==3 || sD==3);
}

function findTie(matrix:any) {

    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if(matrix[i][j]==='') return false;
        }        
    }

    return true;
}

export default function({ isWinner, setIsWinner, player1, setIsPlayer1}:{
    isWinner: any,
    setIsWinner: any,
    player1: any,
    setIsPlayer1: any
}) {
    const [matrix, setMatrix] = useState<Matrix>([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    function handleClick(x: number, y: number) {
        if(matrix[x][y] === '') {
            const newMatrix = matrix.map(row => [...row]); // Deep copy
            newMatrix[x][y] = player1 ? 'X' : 'O';
            setMatrix(newMatrix);
            setIsPlayer1(!player1);
        }
    }

    useEffect(() => {
        let winnerX = findWinner(matrix, 'X');
        let winnerO = findWinner(matrix, 'O');
        let tie = findTie(matrix);

        if(winnerX || winnerO || tie) {
            if(winnerX) setIsWinner('X wins');
            if(winnerO) setIsWinner('O wins');
            if(tie) setIsWinner('Tie');
        }
    }, [matrix, setIsWinner]);

    return <>
        <Container my="md" mt={20} style={{zIndex: isWinner!=''? -1: 0}}>
        <Grid>
        {matrix.map((row, rowIndex) => (
                <div key={rowIndex}>
                {row.map((cell, cellIndex) => (
                    <Grid.Col key={rowIndex+" "+cellIndex} span={{ base: 1, xs: 4 }}>
                <Button onClick={()=>handleClick(rowIndex,cellIndex)} variant='light' w={150} h={150}> 
                    <Text 
                    inherit 
                    variant='gradient' 
                    fw={800} fz={82} 
                    component='span' 
                    gradient={{ from: 'blue', to: 'yellow' }}>{cell}</Text>
                    </Button>
                </Grid.Col>
                ))}
                </div>
            ))}
        </Grid>
    </Container>
    </>
}
