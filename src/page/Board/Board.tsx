import GameTitle from '../../components/GameTitle/GameTitle'
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard'
import VictoryText from '../../components/VictoryText/VictoryText'
import ReplayButton from '../../components/ReplayButton/ReplayButton'
import Tile from '../../components/Tile/Tile'
import Checkbox from '../../components/Checkbox/Checkbox'

import { useScore } from './utils/useScore'
import { useCheckVictory } from './utils/useCheckVictory'

import { useStyles } from './styles/useStyles'

const Board = () => {
  const { score, addPoint } = useScore()
  const { board, onClick, winner, isFinished, resetBoard, player, isTie } =
    useCheckVictory(addPoint)

  const classes = useStyles()

  const handleClick = (i, j) => {
    if (isFinished) return
    if (board[i][j] !== null) return

    board[i][j] = player

    onClick()
  }

  return (
    <div className={classes.grid}>
      <GameTitle className={classes.gridTitle} />

      <main className={classes.root}>
        <ScoreBoard score={score} />

        <div
          className={classes.board}
          style={{ gridTemplateColumns: `repeat(${board.length}, auto)` }}
        >
          {board.map((row, i) =>
            row.map((_, j) => (
              <Tile
                key={`tile-${i}-${j}`}
                id={`tile-${i}-${j}`}
                position={board[i][j]}
                onClick={() => handleClick(i, j)}
                isFinished={isFinished}
                player={player}
              />
            ))
          )}
        </div>
      </main>

      <div className={classes.actions}>
        <VictoryText winner={winner} isVisible={isFinished} isTie={isTie} />
        <ReplayButton onClick={resetBoard} isVisible={isFinished} />
      </div>

      <div className={classes.boardOptionsContainer}>
        <div className={classes.boardOptions}>
          <Checkbox label='Singleplayer - Easy' />
          <Checkbox label='Singleplayer - Hard' />
          <Checkbox label='Multiplayer Local' />
          <Checkbox label='Multiplayer Online' />
        </div>
      </div>
    </div>
  )
}

export default Board
