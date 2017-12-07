function getActiveClass(itemState) {
	let active = "show";
	if (itemState === "false") {
		active = "hide";
	}
	return active;
}

const transitionDuration = 750;
const startDelay = 500;

class Message extends React.Component {
	render() {
		let active = getActiveClass(this.props.active);
		let activeAvatar = getActiveClass(this.props.avatar);
		let enabledAvatar = getActiveClass(this.props.avatar_active);		
		return (
			<div className={active + " row message"}>
				<div className={"col-12 " + this.props.side}>
					<div className={"avatar alisa "+ activeAvatar}>						
						<img src="images/avatar-inactive@2x.png" className={"inactiveAvatar "+ enabledAvatar} alt=""/>
						<img src="images/avatar-active@2x.png" 
							style={{"marginLeft": "-29px"}}
							className={"activeAvatar "+ enabledAvatar} alt=""/>
					</div>
					<div className="text">
						<img src={this.props.text} style={{"width": this.props.width+"px"}} alt=""/>
					</div>
				</div>
			</div>
		);
	}
}

class FooterButton extends React.Component {
	constructor() {
		super();
	}
	componentWillMount() {
        //this.setState({ previewItems: this._getItems(filter) });
	}
	_handleButton(item, e) {
		this.props.buttonClicked(this, item);
	}
	render() {
		let active = getActiveClass(this.props.active);
		return (
			<div className={active + " button"} 
				style={{"width": this.props.width+"px"}} 
				onClick={this._handleButton.bind(this, this.props.val)}>
				<img src={this.props.img} style={{"width": this.props.width+"px"}} alt=""/>
			</div>
		);
	}
}

class Footer extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = { 
        	"active": ["false", "false", "false"]
        }; 
	}
	componentDidMount() {   
        setTimeout(function() {
    		this.setState({"active": ["true", "false", "false"]});
    		setTimeout(function() {
	    		this.setState({"active": ["true", "true", "false"]});
	    	}.bind(this), transitionDuration/2);	
    	}.bind(this), (startDelay + transitionDuration));	
    }
	componentWillMount() {
        //this.setState({ previewItems: this._getItems(filter) });
	}
	_handleButton(item, buttonVal) {
		if ((buttonVal == 1) || (buttonVal == 2)) {
			this.setState({"active": ["false", "false", "true"]});
			this.props.buttonClicked(item, buttonVal);
		} else {
			//let parser = new UAParser();
		    // by default it takes ua string from current browser's window.navigator.userAgent
		    //let parserResult = parser.getResult();
		    //console.log(parserResult);
		    //if (parserResult.os.name==="iOS") {
		    //	window.top.postMessage({ command: 'probtn_performed_action', value: 'download_clicked_ios' }, '*');
			//	window.open("https://itunes.apple.com/us/app/yandex-browser/id483693909?mt=8", "_blank");
			//} else {
			//	window.top.postMessage({ command: 'probtn_performed_action', value: 'download_clicked_android' }, '*');
				window.top.postMessage({ command: 'probtn_performed_action', value: 'download_clicked' }, '*');
				window.open("https://redirect.appmetrica.yandex.com/serve/169488861431366701?c=CAMPAIGNID", "_blank");
			//}
		}
	}
	render() {
		return(
			<footer className="footer">
				<div className="container">
					
					<FooterButton width="112" val="1" img="images/answer-1@2x.png" active={this.state.active[0]} buttonClicked={this._handleButton.bind(this)}/>
					<FooterButton width="156" val="2" img="images/answer-2@2x.png" active={this.state.active[1]} buttonClicked={this._handleButton.bind(this)}/>
					<FooterButton width="138"  val="3" 
						url=""
						img="images/download-btn@2x.png" 
						active={this.state.active[2]} buttonClicked={this._handleButton.bind(this)}/>

				</div>
			</footer>
		);
	}
}

class MainApp extends React.Component {   
	constructor() {
        super();

        this.state = { 
        	"active": ["false", "false", "false"],
        	"activeMe": ["false", "false", "false"],
        	"avatar_active": ["true", "true", "true"]
        };              
    }
    _buttonClicked(item, buttonVal) {
    	console.log("item3", item, buttonVal);
    	let newActiveMe = this.state.activeMe;
    	newActiveMe[buttonVal] = true;
    	this.setState({"activeMe": newActiveMe});
		this.setState({"avatar_active": ["false", "true", "true"]});

    	setTimeout(function() {
    		let newActive = this.state.active;
    		newActive[buttonVal] = true;
    		this.setState({"active": newActive});
    	}.bind(this), transitionDuration);	
    }
    componentDidMount() {   
        setTimeout(function() {
    		this.setState({"active": ["true", "false", "false"]});
    	}.bind(this), 500);	
    }
	componentWillMount() {
	}
	render() {
		return (
	        <div className="container-fluid" id="mainContainer">

	                <Message width="223" text="images/message-alice-1@2x.png" side="left" avatar="true" 
	                	avatar_active={this.state.avatar_active[0]} active={this.state.active[0]}/>
	                
	                <Message width="155" text="images/message-my-1@2x.png" side="right" avatar="false" 
	                	avatar_active="false" active={this.state.activeMe[2]}/>
	                <Message width="109" text="images/message-my-2@2x.png" side="right" avatar="false" 
	                	avatar_active="false" active={this.state.activeMe[1]}/>

	                <Message width="216" text="images/message-alice-2@2x.png" side="left" avatar="true" 
	                	avatar_active={this.state.avatar_active[2]} active={this.state.active[2]}/>
	                <Message width="263" text="images/message-alice-3@2x.png" side="left" avatar="true" 
	                	avatar_active={this.state.avatar_active[1]} active={this.state.active[1]}/>
		
				<Footer buttonClicked={this._buttonClicked.bind(this)}/>
			</div>
	    );
	}
}

ReactDOM.render(
    <MainApp/>,
    document.getElementById('app')
);