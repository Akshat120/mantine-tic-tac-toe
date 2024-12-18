import { Paper, Container, Button, Text, Input } from '@mantine/core';
import { useState } from 'react';

export default function PlayerName({playerIcon, isActive}: {
    playerIcon: string,
    isActive: boolean
}) {
    const [isPlayerEdit, setIsPlayer1Edit] = useState(true);
    const [inputValuePlayer, setInputValuePlayer1] = useState('');
    const handleInputChange = (event: any) => {
        setInputValuePlayer1(event.target.value);
    }
    function onSave() {
        setIsPlayer1Edit(!isPlayerEdit)
    }

    return <>
    <Paper w={220} h={50} px={10} display="flex" style={{ 
        flexDirection:"row", 
        justifyContent: 'space-between', 
        alignItems: "center",
        border: isActive ? '1.5px solid #9a7531' : '1.5px solid #242424'
        }}>
            {
                isPlayerEdit ? (
                    <>
                        <Input
                        w={100} 
                        type='text' 
                        styles={(theme) => ({
                            input: {
                            textAlign: 'center',
                            fontSize: "16px"
                            },
                        })}
                        value={inputValuePlayer}
                        onChange={(event)=>handleInputChange(event)}
                        ></Input>
                        <Text inherit variant="gradient" fw={800} fz={20} component="span" gradient={{ from: 'blue', to: 'yellow' }}>{playerIcon}</Text>
                        <Button w={40} px={0} m={0} variant='transparent' onClick={onSave}> save </Button>
                </>
                ) : (
                <>
                        <Text w={100} style={{textAlign: 'center', fontSize: "16px"}}>{inputValuePlayer}</Text>
                        <Text inherit variant="gradient" fw={800} fz={20} component="span" gradient={{ from: 'blue', to: 'yellow' }}>{playerIcon}</Text>
                        <Button w={40} px={0} m={0} variant='transparent' onClick={onSave}> edit </Button>
                </>

                )

            }           
    </Paper>

    </>
}