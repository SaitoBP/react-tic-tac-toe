import VictoryText from '../../components/VictoryText/VictoryText'
import Row from '../../components/Row/Row'
import ReplayButton from '../../components/ReplayButton/ReplayButton'

import { useCheckVictory } from './utils/useCheckVictory'

import { useStyles } from './styles/useStyles'

const Board = () => {
  const { board, onClick, winner, isFinished, resetBoard, score, player, isTie } =
    useCheckVictory()

  const classes = useStyles()

  return (
    <>
      <h1 className={classes.title}>tic-tac-toe</h1>

      <main className={classes.root}>
        <h1 className={classes.scoreBoard}>
          X: {score.playerX} | O: {score.playerO}
        </h1>

        <div className={classes.board}>
          {board.map((_, i) => (
            <Row
              id={`row-${i}`}
              key={`row[${i}]`}
              row={i}
              board={board}
              player={player}
              onClick={onClick}
            />
          ))}
        </div>

        <VictoryText winner={winner} isVisible={isFinished} isTie={isTie} />

        <ReplayButton onClick={resetBoard} isVisible={isFinished} />
      </main>
    </>
  )
}

export default Board
