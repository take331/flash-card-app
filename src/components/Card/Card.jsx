import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
        <div className={classes.cardcontainer}>
            <div className={classes.flashcard}>
                <div className={classes.thefront}>front side</div>
                <div className={classes.theback}>back side</div>
            </div>
        </div>
    </div>
  )
}

export default Card