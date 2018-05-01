"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var sentences = ["The man who passes the sentence should swing the sword", "The things I do for love", "Everyone is mine to torment", "The night is dark and full of terrors", "A Lannister always pays his debts", "Burn them all", "What do we say to the God of death", "Winter is coming", "A lion does not concern himself with the opinion of sheep", "Hold the door"];

var sentFlag = Math.floor(Math.random() * 10);
var sentence = sentences[sentFlag];
var options = sentence.split(' ');
var leftOptions = shuffle(options);
var answer = [];
var finalAnswer = false;
var optionFlag = true;
var score = 0;

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-8 offset-md-2 border border-dark" },
                    React.createElement(
                        "h1",
                        { className: "text-center" },
                        "Pick the words in order: ",
                        React.createElement(
                            "span",
                            { className: "badge badge-info" },
                            score
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Sentence = function (_React$Component2) {
    _inherits(Sentence, _React$Component2);

    function Sentence() {
        _classCallCheck(this, Sentence);

        return _possibleConstructorReturn(this, (Sentence.__proto__ || Object.getPrototypeOf(Sentence)).apply(this, arguments));
    }

    _createClass(Sentence, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-8 offset-md-2 border border-dark part2" },
                    React.createElement(
                        "h3",
                        { className: "text-center" },
                        sentence
                    )
                )
            );
        }
    }]);

    return Sentence;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-8 offset-md-2 border border-dark part" },
                    options.map(function (option, index) {
                        return React.createElement(Option, { key: index, optionText: option, index: index });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this4 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this4.optionSelect = _this4.optionSelect.bind(_this4);
        return _this4;
    }

    _createClass(Option, [{
        key: "optionSelect",
        value: function optionSelect(opt) {
            answer.push(leftOptions[opt]);
            leftOptions.splice(opt, 1);
            if (leftOptions.length == 0) {
                optionFlag = false;
                if (answer.toString() == sentence.split(" ").toString()) {
                    finalAnswer = 1;
                    score++;
                } else {
                    finalAnswer = 2;
                }
            }
            renderWordGameApp();
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            return React.createElement(
                "span",
                { className: "optionPills", onClick: function onClick(e) {
                        return _this5.optionSelect(_this5.props.index, e);
                    } },
                this.props.optionText,
                " "
            );
        }
    }]);

    return Option;
}(React.Component);

var Answers = function (_React$Component5) {
    _inherits(Answers, _React$Component5);

    function Answers() {
        _classCallCheck(this, Answers);

        return _possibleConstructorReturn(this, (Answers.__proto__ || Object.getPrototypeOf(Answers)).apply(this, arguments));
    }

    _createClass(Answers, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-8 offset-md-2 border border-dark part" },
                    answer.map(function (answer, index) {
                        return React.createElement(Answer, { key: index, answerText: answer, index: index });
                    })
                )
            );
        }
    }]);

    return Answers;
}(React.Component);

var Answer = function (_React$Component6) {
    _inherits(Answer, _React$Component6);

    function Answer(props) {
        _classCallCheck(this, Answer);

        var _this7 = _possibleConstructorReturn(this, (Answer.__proto__ || Object.getPrototypeOf(Answer)).call(this, props));

        _this7.answerSelect = _this7.answerSelect.bind(_this7);
        return _this7;
    }

    _createClass(Answer, [{
        key: "answerSelect",
        value: function answerSelect(opt) {
            leftOptions.push(answer[opt]);
            answer.splice(opt, 1);
            renderWordGameApp();
        }
    }, {
        key: "render",
        value: function render() {
            var _this8 = this;

            return React.createElement(
                "span",
                { className: "answerPills", onClick: function onClick(e) {
                        return _this8.answerSelect(_this8.props.index, e);
                    } },
                this.props.answerText
            );
        }
    }]);

    return Answer;
}(React.Component);

var Result = function (_React$Component7) {
    _inherits(Result, _React$Component7);

    function Result() {
        _classCallCheck(this, Result);

        return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
    }

    _createClass(Result, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-8 offset-md-2 text-center border border-dark" },
                    React.createElement(
                        "h1",
                        { className: finalAnswer == 1 ? "correct" : "incorrect" },
                        finalAnswer == 1 ? "Correct" : "Incorrect"
                    )
                )
            );
        }
    }]);

    return Result;
}(React.Component);

var ReloadButton = function (_React$Component8) {
    _inherits(ReloadButton, _React$Component8);

    function ReloadButton(props) {
        _classCallCheck(this, ReloadButton);

        var _this10 = _possibleConstructorReturn(this, (ReloadButton.__proto__ || Object.getPrototypeOf(ReloadButton)).call(this, props));

        _this10.handleReload = _this10.handleReload.bind(_this10);
        return _this10;
    }

    _createClass(ReloadButton, [{
        key: "handleReload",
        value: function handleReload() {
            sentFlag = Math.floor(Math.random() * 10);
            sentence = sentences[sentFlag];
            options = sentence.split(' ');
            leftOptions = shuffle(options);
            answer = [];
            finalAnswer = false;
            optionFlag = true;
            renderWordGameApp();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col text-center" },
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { className: "btn btn-primary", onClick: this.handleReload },
                        React.createElement("i", { className: "fas fa-redo" })
                    )
                )
            );
        }
    }]);

    return ReloadButton;
}(React.Component);

var WordGame = function (_React$Component9) {
    _inherits(WordGame, _React$Component9);

    function WordGame() {
        _classCallCheck(this, WordGame);

        return _possibleConstructorReturn(this, (WordGame.__proto__ || Object.getPrototypeOf(WordGame)).apply(this, arguments));
    }

    _createClass(WordGame, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(Header, null),
                React.createElement(Sentence, null),
                React.createElement(Answers, null),
                optionFlag && React.createElement(Options, null),
                finalAnswer && React.createElement(Result, null),
                finalAnswer && React.createElement(ReloadButton, null)
            );
        }
    }]);

    return WordGame;
}(React.Component);

var renderWordGameApp = function renderWordGameApp() {
    ReactDOM.render(React.createElement(WordGame, null), document.getElementById('app'));
};

renderWordGameApp();
