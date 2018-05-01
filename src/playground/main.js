function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const sentences = [
    "The man who passes the sentence should swing the sword",
    "The things I do for love",
    "Everyone is mine to torment",
    "The night is dark and full of terrors",
    "A Lannister always pays his debts",
    "Burn them all",
    "What do we say to the God of death",
    "Winter is coming",
    "A lion does not concern himself with the opinion of sheep",
    "Hold the door"
];

let sentFlag = Math.floor(Math.random() * 10);
let sentence = sentences[sentFlag];
let options = sentence.split(' ');
let leftOptions = shuffle(options);
let answer = [];
let finalAnswer = false;
let optionFlag = true;
let score = 0;


class Header extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-md-8 offset-md-2 border border-dark">
                    <h1 className="text-center">Pick the words in order: <span className="badge badge-info">{score}</span></h1>
                </div>
            </div>
        );
        
    }
}

class Sentence extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2 border border-dark part2">
                    <h3 className="text-center">{sentence}</h3>
                </div>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2 border border-dark part">
                    {
                        options.map((option, index) => <Option key={index} optionText={option} index={index} />)
                    }
                </div> 
            </div>
        );
    }
}

class Option extends React.Component {
    constructor(props){
        super(props);
        this.optionSelect = this.optionSelect.bind(this);
    }
    
    optionSelect(opt){
        answer.push(leftOptions[opt]);
        leftOptions.splice(opt, 1);
        if(leftOptions.length == 0)
        {
            optionFlag = false;
            if(answer.toString() == sentence.split(" ").toString()){
                finalAnswer = 1;
                score++;
            }
            else{
                finalAnswer = 2;
            }
        }
        renderWordGameApp();
    }

    render(){
        return (
            <span className="optionPills"  onClick={(e) => this.optionSelect(this.props.index, e)}>{this.props.optionText} </span>
        );
    }
}


class Answers extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2 border border-dark part">
                    {
                        answer.map((answer, index) => <Answer key={index} answerText={answer} index={index} />)
                    }
                </div> 
            </div>
        );
    }
}

class Answer extends React.Component {
    constructor(props){
        super(props);
        this.answerSelect = this.answerSelect.bind(this);
    }
    
    answerSelect(opt){
        leftOptions.push(answer[opt]);
        answer.splice(opt, 1);
        renderWordGameApp();
    }
    
    render(){
        return (
            <span className="answerPills" onClick={(e) => this.answerSelect(this.props.index, e)}>{this.props.answerText}</span>
        );
    }
}

class Result extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center border border-dark">
                    <h1 className={(finalAnswer == 1)? "correct": "incorrect" }>{(finalAnswer == 1)? "Correct": "Incorrect" }</h1>
                </div>
            </div>
        );
    }
}

class ReloadButton extends React.Component{
    constructor(props){
        super(props);
        this.handleReload = this.handleReload.bind(this);
    }
    
    handleReload(){
        sentFlag = Math.floor(Math.random() * 10);
        sentence = sentences[sentFlag];
        options = sentence.split(' ');
        leftOptions = shuffle(options);
        answer = [];
        finalAnswer = false;
        optionFlag = true;
        renderWordGameApp();
    }
    
    render(){
        return(
            <div className="row">
                <div className="col text-center">
                    <br />
                    <button className="btn btn-primary" onClick={this.handleReload}><i className="fas fa-redo"></i></button>
                </div>
            </div>
        );
    }
}

class WordGame extends React.Component {
    render(){
        return(
            <div className = "container">
                <Header />
                <Sentence />
                <Answers  />
                {optionFlag && <Options  />}
                {finalAnswer && <Result />}
                {finalAnswer && <ReloadButton />}
                
            </div>
        );
    }
}

const renderWordGameApp = () => {
    ReactDOM.render(<WordGame />, document.getElementById('app'));
};

renderWordGameApp();