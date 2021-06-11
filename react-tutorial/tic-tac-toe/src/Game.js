import React from "react";
import "./Game.css";

function Square(props) {
    // button, 제어되는 component, Board component 가 제어중
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    // 사각형 9개
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNest: true,
        };
    }

    handleClick(i) {
        const squares =
            this.state.squares.slice();
        squares[i] = this.state.xIsNest
            ? "X"
            : "O";
        this.setState({
            squares: squares,
            xIsNest: !this.state.xIsNest,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() =>
                    this.handleClick(i)
                }
            />
        );
    }

    render() {
        const status =
            "Next player:" +
            (this.state.xIsNest ? "X" : "O");

        return (
            <div>
                <div className="status">
                    {status}
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    //나중에 수정할 자리 표시자 값을 지님
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
