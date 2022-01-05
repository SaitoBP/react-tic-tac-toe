import GameTitle from '../../components/GameTitle/GameTitle'
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard'
import VictoryText from '../../components/VictoryText/VictoryText'
import Row from '../../components/Row/Row'
import ReplayButton from '../../components/ReplayButton/ReplayButton'

import { useScore } from './utils/useScore'
import { useCheckVictory } from './utils/useCheckVictory'

import { useStyles } from './styles/useStyles'

const Board = () => {
  const { score, addPoint } = useScore()
  const { board, onClick, winner, isFinished, resetBoard, player, isTie } =
    useCheckVictory(addPoint)

  const classes = useStyles()

  return (
    <div className={classes.grid}>
      <GameTitle className={classes.gridTitle} />

      <main className={classes.root}>
        <ScoreBoard score={score} />

        <div className={classes.board}>
          {board.map((_, i) => (
            <Row
              id={`row-${i}`}
              key={`row[${i}]`}
              row={i}
              board={board}
              player={player}
              onClick={onClick}
              isFinished={isFinished}
            />
          ))}
        </div>

        <VictoryText winner={winner} isVisible={isFinished} isTie={isTie} />

        <ReplayButton onClick={resetBoard} isVisible={isFinished} />
      </main>

      <div className={classes.boardOptions}>
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Teste</label>
      </div>
    </div>
  )
}

export default Board
