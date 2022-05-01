import React, { useState } from 'react'
import { gridDefault } from './Words'
import Letter from './Letter';
import classes from './CSS/Grid.module.css'

function Grid() {

    return (
        <div className={classes.grid}>
            <div className={classes.row}>
                <Letter letterPos={0} attemptNo={0} />
                <Letter letterPos={1} attemptNo={0} />
                <Letter letterPos={2} attemptNo={0} />
                <Letter letterPos={3} attemptNo={0} />
                <Letter letterPos={4} attemptNo={0} />
            </div>
            <div className={classes.row}>
                <Letter letterPos={0} attemptNo={1} />
                <Letter letterPos={1} attemptNo={1} />
                <Letter letterPos={2} attemptNo={1} />
                <Letter letterPos={3} attemptNo={1} />
                <Letter letterPos={4} attemptNo={1} />
            </div>
            <div className={classes.row}>
                <Letter letterPos={0} attemptNo={2} />
                <Letter letterPos={1} attemptNo={2} />
                <Letter letterPos={2} attemptNo={2} />
                <Letter letterPos={3} attemptNo={2} />
                <Letter letterPos={4} attemptNo={2} />
            </div>
            <div className={classes.row}>
                <Letter letterPos={0} attemptNo={3} />
                <Letter letterPos={1} attemptNo={3} />
                <Letter letterPos={2} attemptNo={3} />
                <Letter letterPos={3} attemptNo={3} />
                <Letter letterPos={4} attemptNo={3} />
            </div>
            <div className={classes.row}>
                <Letter letterPos={0} attemptNo={4} />
                <Letter letterPos={1} attemptNo={4} />
                <Letter letterPos={2} attemptNo={4} />
                <Letter letterPos={3} attemptNo={4} />
                <Letter letterPos={4} attemptNo={4} />
            </div>
            <div className={classes.row}>
                <Letter letterPos={0} attemptNo={5} />
                <Letter letterPos={1} attemptNo={5} />
                <Letter letterPos={2} attemptNo={5} />
                <Letter letterPos={3} attemptNo={5} />
                <Letter letterPos={4} attemptNo={5} />
            </div>
        </div>
    )
}

export default Grid