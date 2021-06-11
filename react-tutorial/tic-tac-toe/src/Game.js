import React from "react";
import "./Game.css";

class Square extends React.Component {
    // button
    constructor(props) {
        // JS 클래스에서 하위 클래스의 생성자를 정의할 때 항상 super 호출 필요
        // 모든 react component class 는 생성자를 가질 때 반드시 super(props)호출 필요
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({ value: "X" })}
            >
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    // 사각형 9개
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = "Next player: X";

        return (
            <div>
                <div className="status">{status}</div>
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
