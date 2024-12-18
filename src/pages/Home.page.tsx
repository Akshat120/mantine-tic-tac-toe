import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import GameBoard from '@/components/GameBoard/GameBoard';

export function HomePage() {
  return (
    <>
      <Welcome />
      <GameBoard />
    </>
  );
}
