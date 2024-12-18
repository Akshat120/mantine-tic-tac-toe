import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" >
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'yellow' }}>
          Tic-Tac-Toe
        </Text>
      </Title>
    </>
  );
}
