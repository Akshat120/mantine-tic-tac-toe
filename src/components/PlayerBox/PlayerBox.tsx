import { Container } from '@mantine/core';
import PlayerName from '../PlayerName/PlayerName';

export default function PlayerBox({isWinner, player1}: {
    isWinner: string,
    player1: boolean
}) {
    return <>
        <Container w={"100%"} display="flex" style={{ zIndex: isWinner!='' ? -1: 0, flexDirection:"row", justifyContent: 'space-between'}}>
            <PlayerName playerIcon='X' isActive={player1}/>
            <PlayerName playerIcon='O' isActive={!player1}/>
        </Container>
    </>
}