import { Container, Row, Col } from 'react-bootstrap';
import "./pagestyle.scss";
import "./AdvancedOptions.scss";
import React from "react";
const fs = require('fs')
var path = require('path')
var dirname = process.execPath
document.title = "Coopers Madden Draft Class Generator";
var filePath = dirname
filePath = path.join(filePath, '..');
filePath = filePath.concat("\\DONOTDELETE")
console.log(filePath)
var developmentsArray = [
    "Random", "Normal", "Star", "SuperStar", "X-Factor"
]

var positionsArray = [
    "Random",
    "QB",
    "HB",
    "FB",
    "WR",
    "TE",
    "LT",
    "LG",
    "C",
    "RG",
    "RT",
    "LE",
    "RE",
    "DT",
    "LOLB",
    "MLB",
    "ROLB",
    "CB",
    "FS",
    "SS",
    "K",
    "P"
]
var nameArray = [
    "MOR",
    "SPD",
    "ACC",
    "AGI",
    "STR",
    "AWR",
    "CAR",
    "BCV",
    "BTK",
    "TRK",
    "SFA",
    "ELU",
    "SPM",
    "JKM",
    "CTH",
    "CIT",
    "SPC",
    "SRR",
    "MRR",
    "DRR",
    "RLS",
    "JMP",
    "THP",
    "SAC",
    "MAC",
    "DAC",
    "RUN",
    "TUP",
    "BSK",
    "PAC",
    "PBK",
    "PBP",
    "PBF",
    "RBK",
    "RBP",
    "RBF",
    "LBK",
    "IBL",
    "PRC",
    "TAK",
    "POW",
    "BSH",
    "FMV",
    "PMV",
    "PUR",
    "MCV",
    "ZCV",
    "PRS",
    "RET",
    "KPW",
    "KAC",
    "STA",
    "TGH",
    "INJ",
    "PER"
];
class DefaultInfo {
    constructor(filename,version,headless,searchNum,fname,lname,age, feet, inches, weight,position,development,i) {
        this.filename = filename;
        this.version = version;
        this.headless = headless
        this.searchNum = searchNum
        this.fname = fname
        this.lname = lname
        this.age = age
        this.feet = feet
        this.inches = inches
        this.weight = weight
        this.position = position;
        this.development = development;
        this.OVR = i
        this.ACC = i
        this.AGI = i
        this.AWR = i
        this.BCV = i
        this.BSH = i
        this.BSK = i
        this.BTK = i
        this.CAR = i
        this.CTH = i
        this.CIT = i
        this.ELU = i
        this.FMV = i
        this.POW = i
        this.IBL = i
        this.INJ = i
        this.JKM = i
        this.JMP = i
        this.KAC = i 
        this.RET = i
        this.LBK = i
        this.MCV = i
        this.PBF = i
        this.PBP = i
        this.PBK = i
        this.PER = i
        this.PAC = i
        this.PRC = i
        this.PMV = i
        this.PRS = i
        this.PUR = i
        this.RLS = i
        this.DRR = i
        this.MRR = i
        this.SRR = i
        this.RBF = i
        this.RBP = i
        this.RBK = i
        this.SPC = i
        this.SPD = i
        this.SPM = i
        this.STA = i
        this.SFA = i
        this.STR = i
        this.TAK = i
        this.DAC = i
        this.MAC = i
        this.SAC = i
        this.RUN = i
        this.THP = i
        this.TUP = i
        this.TGH = i
        this.TRK = i
        this.ZCV = i
        this.MOR = i
        this.KPW = i
    }
}

class AdvancedInfo {
    constructor(filename,version,headless,searchNum,fname,lname,age,feet,inches,weight,position,development,OVR,MOR,
    SPD,
    ACC,
    AGI,
    STR,
    AWR,
    CAR,
    BCV,
    BTK,
    TRK,
    SFA,
    ELU,
    SPM,
    JKM,
    CTH,
    CIT,
    SPC,
    SRR,
    MRR,
    DRR,
    RLS,
    JMP,
    THP,
    SAC,
    MAC,
    DAC,
    RUN,
    TUP,
    BSK,
    PAC,
    PBK,
    PBP,
    PBF,
    RBK,
    RBP,
    RBF,
    LBK,
    IBL,
    PRC,
    TAK,
    POW,
    BSH,
    FMV,
    PMV,
    PUR,
    MCV,
    ZCV,
    PRS,
    RET,
    KPW,
    KAC,
    STA,
    TGH,
    INJ,
        PER) {
        this.filename = filename;
        this.version = version;
        this.headless = headless
        this.searchNum = searchNum
        this.fname = fname
        this.lname = lname
        this.age = age
        this.feet = feet
        this.inches = inches
        this.weight = weight
        this.development = development;
        this.position = position;
        this.OVR = OVR
        this.ACC = ACC
        this.AGI = AGI
        this.AWR = AWR
        this.BCV = BCV
        this.BSH = BSH
        this.BSK = BTK
        this.BTK = BTK
        this.CAR = CAR
        this.CTH = CTH
        this.CIT = CIT
        this.ELU = ELU
        this.FMV = FMV
        this.POW = POW
        this.IBL = IBL
        this.INJ = INJ
        this.JKM = JKM
        this.JMP = JMP
        this.KAC = KAC
        this.RET = RET
        this.LBK = LBK
        this.MCV = MCV
        this.PBF = PBF
        this.PBP = PBP
        this.PBK = PBK
        this.PER = PER
        this.PAC = PAC
        this.PRC = PRC
        this.PMV = PMV
        this.PRS = PRS
        this.PUR = PUR
        this.RLS = RLS
        this.DRR = DRR
        this.MRR = MRR
        this.SRR = SRR
        this.RBF = RBF
        this.RBP = RBP
        this.RBK = RBK
        this.SPC = SPC
        this.SPD = SPD
        this.SPM = SPM
        this.STA = STA
        this.SFA = SFA
        this.STR = STR
        this.TAK = TAK
        this.DAC = DAC
        this.MAC = MAC
        this.SAC = SAC
        this.RUN = RUN
        this.THP = THP
        this.TUP = TUP
        this.TGH = TGH
        this.TRK = TRK
        this.ZCV = ZCV
        this.MOR = MOR
        this.KPW = KPW;
    }
}
//search a string for 3rd '\' and return length.
function findFileExtension(stringSearch) {
    var y = 0 //return length
    var z = 0 // '\' increment
    var maxLength = stringSearch.length
    var myChar
    while (z < 3 && y < maxLength) {
        myChar = stringSearch.charAt(y)
        if (myChar === "\\") {
            z++
        }
        y++
    }
    if (z === 3) {
        return y
    }
    else {
        return -1
    }
}
//global vars to keep track of check box values.
var advance1 = 0;
var advance2 = 0;
var advance3 = 0;
var advance4 = 0;
var advance5 = 0;
var attributes1 = 0;
var attributes2 = 0;
var attributes3 = 0;
var attributes4 = 0;
var attributes5 = 0;
var numProfiles = 0;
class PlayerAttributes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: false
        };
        this.handleChange = this.handleChange.bind(this)
    }
    displayOptions(props) {
        const display = props.display;
        var id = props.id;
        
        if (id == "1") {
            attributes1 = display;
        }
        else if (id == "2") {
            attributes2 = display;
        }
        else if (id == "3") {
            attributes3 = display;
        }
        else if (id == "4") {
            attributes4 = display;
        }
        else if (id == "5") {
            attributes5 = display;
        }
        if (display) {
            var fname = "fname".concat(props.id)
            var lname = "lname".concat(props.id)
            var Age = "Age".concat(props.id)
            var Feet = "Feet".concat(props.id)
            var Inches = "Inches".concat(props.id)
            var Weight = "Weight".concat(props.id)
            var headless = "headless".concat(props.id)
            var headlessno = "headlessno".concat(props.id)
            return (
                [<div>
                    <label for={fname} >First name:</label>
                    <input type="text" id={fname} name={fname} maxLength="16" /><br></br>
                    <label for={lname} >Last name:</label>
                    <input type="text" id={lname} name={lname} maxLength="20" />
                </div>,
                    <div>
                        <label for={Age}>Age: </label>
                        <input type="number" name={Age} id={Age} min="0" max="63" />
                    </div>,
                    <div>
                        <label for={Feet}>Feet: </label>
                        <input type="number" name={Feet} id={Feet} min="0" max="10" /><br></br>
                        <label for={Inches}>Inches</label>
                        <input type="number" name={Inches} id={Inches} min="0" max="11" />
                    </div>,
                    <div>
                        <label for={Weight}>Weight: </label>
                        <input type="number" name={Weight} id={Weight} min="160" max="415" />
                    </div>,
                    <div>
                        <div>
                            Headless?
                        <input type="radio" id={headless} name={headless} value="on" />
                            <label for={headless}>On</label>
                            <input type="radio" id={headlessno} name={headless} value="" />
                            <label for={headlessno}>Off</label>
                        </div>
                    </div>]
                );
        }
        else {
            return null;
        };
    }
    handleChange(event) {
        if (event.target.name === "Advanced") {
            var isChecked = event.target.checked;
            this.setState({ value: isChecked });
            console.log("AdvancedChecked")
            console.log(isChecked)
        }
    }
    render() {
        var id = this.props.id.toString()
        return (
            <div className="playerAttributes">
                <label for="Attributes">Player Attributes</label>
                <input
                    type="checkbox"
                    value={this.state.value}
                    onChange={this.handleChange}
                    name="Advanced"
                    id="Advanced"
                />
                <this.displayOptions display={this.state.value} id={id} />
            </div>
        );
             }

                }
class AdvancedOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    displayOptions(props) {
          console.log(props);
        const display = props.display;
        
        var id = props.id
        if (id == "1") {
            advance1 = display;
        }
        else if (id == "2") {
            advance2 = display;
        }
        else if (id == "3") {
            advance3 = display
        }
        else if (id == "4") {
            advance4 = display;
        }
        else if (id == "5") {
            advance5 = display;
        }
        var test = nameArray.map((name) => (
            <div key={name} className= "advancedOptions">
                <label for={name + id}>{name}: (0-99)</label>
                <input type="number" name={name + id} id={name + id} min="0" max="99" />
            </div>
        ));

        if (display) {
            return <div>{test}</div>;
        } else {
            return null;
        }
    }

    handleChange(event) {
        var isChecked = event.target.checked;
        this.setState({ value: isChecked });
    }

    render() {
        return (
            <div className="advancedOptions">
                <label for="Advanced">Individual Stats </label>
                <input
                    type="checkbox"
                    value={this.state.value}
                    onChange={this.handleChange}
                    name="Advanced"
                    id="Advanced"
                />
                <this.displayOptions display={this.state.value} id={this.props.id.toString()} />
            </div>
        );
    }
}
class NumPlayers extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: 1
        };

        this.handleNumPlayers = this.handleNumPlayers.bind(this);
    }

    handleNumPlayers(event) {
        this.setState({ value: event.target.value });
    }

    displayPlayers(props) {
        numProfiles = props.value;
        console.log(props.value);
        if (props.value == 1) {
            return (
                <div>
                    <PlayerProfile id = "1"/>
                </div>
            );
        } else if (props.value == 2) {
            return (
                <Row>
                    <Col>
                        <PlayerProfile id = "1"/>
                    </Col>
                    <Col>
                        <PlayerProfile id = "2"/>
                    </Col>
                </Row>
            );
        } else if (props.value == 3) {
            return (
                <Row>
                    <Col>
                        <PlayerProfile id = "1"/>
                    </Col>
                    <Col>
                        <PlayerProfile id="2"/>
                    </Col>
                    <Col>
                        <PlayerProfile id="3"/>
                    </Col>
                </Row>
            );
        } else if (props.value == 4) {
            return (
                <Row>
                    <Col>
                        <PlayerProfile id = "1"/>
                    </Col>
                    <Col>
                        <PlayerProfile id="2"/>
                    </Col>
                    <Col>
                        <PlayerProfile id="3"/>
                    </Col>
                    <Col>
                        <PlayerProfile id="4"/>
                    </Col>
                </Row>
            );
        }
        else if (props.value == 5) {
            return (
                <Row>
                    <Col>
                        <PlayerProfile id = "1"/>
                    </Col>
                    <Col>
                        <PlayerProfile id="2"/>
                    </Col>
                    <Col>
                        <PlayerProfile id="3"/>
                    </Col>
                    <Col>
                        <PlayerProfile id="4"/>
                    </Col>
                    <Col>
                        <PlayerProfile id="5"/>
                    </Col>
                </Row>
            );
        }        else {
            return (
                <div>
                    <PlayerProfile id="1"/>
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                <div>
                    <label for="num">Number of Player Configurations: (1-5)</label>
                    <select
                        name="num"
                        id="num"
                        onChange={this.handleNumPlayers}
                        value={this.state.value}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <this.displayPlayers const value={this.state.value} />
                </div>
            </div>
        );
    }
}
var positions = positionsArray.map((name) => (
    <option value={name} key={name}>{name}</option>
));
var developments = developmentsArray.map((name) => (
    <option value={name} key={name}>{name}</option>
));
class PlayerProfile extends React.Component {
    render() {
        var playerid = this.props.id.toString()
        var ovrName = "Overall".concat(playerid);
        var searchNum = "searchNum".concat(playerid);
        var playerType = "playerType".concat(playerid);
        var development = "development".concat(playerid)
        console.log(ovrName)
        return (
            <div>
             

                <div className="searchNum">
                    <label for={searchNum}>Number Of Players: (1-450)</label>
                    <input type="number" name={searchNum} id={searchNum} min="1" max="450" />
                </div>
                <div className="overall">
                    <label for={ovrName}>Overall: (0-99)</label>
                    <input type="number" name={ovrName} id={ovrName} min="0" max="99" />
                </div>
                <div>
                    <label for={playerType}>Position</label>
                    <select name={playerType} id={playerType}>
                        {positions}
                    </select>
                </div>

                <div>
                    <label for={development}>Development</label>
                    <select name={development} id={development}>
                        {developments}
                    </select>
                </div>

                <AdvancedOptions className="accessAdvanced" id={playerid}/>
                <PlayerAttributes className="accessAttributes" id={playerid}/>
                
            </div>
        );
    }
}

export default function App() {
    


    function handleClick(e) {
        e.preventDefault()
        async function readFile(player1, player2, player3, player4, player5) {
            var trimSize = findFileExtension(dirname)
            var path = dirname.slice(0, trimSize)
            var height1;
            var height2;
            var height3;
            var height4;
            var height5;
            var weight1;
            var weight2;
            var weight3;
            var weight4;
            var weight5;
            var numPlayers1;
            var numPlayers2;
            var numPlayers3;
            var numPlayers4;
            var numPlayers5;

            console.log(e.target["filename"].value)
            var filePathNew = filePath;
            if (player1.version == "") {filePathNew = filePathNew.concat("2")}
            if (player1.feet !== "" && player1.inches !== "") {
                height1 = player1.feet * 12
                height1 += player1.inches
                if (height1 > 126) { height1 = 126 }
            }
            if (player1.weight !== "") {
                weight1 = player1.weight - 160;
            }
            if (player1.searchNum === "") { numPlayers1 = 450; }
            else {
                numPlayers1 = parseInt(player1.searchNum);
            }
            if (numProfiles > 1) {
                if (player2.searchNum === "") { numPlayers2 = 450; }
                else {
                    numPlayers2 = parseInt(player2.searchNum);
                }

                if (player2.feet !== "" && player2.inches !== "") {
                    height2 = player2.feet * 12
                    height2 += player2.inches
                    if (height2 > 126) { height2 = 126 }
                }
                if (player2.weight !== "") {
                    weight2 = player2.weight - 160;
                }
            }
            if (numProfiles > 2) {
                if (player3.searchNum === "") { numPlayers3 = 450; }
                else {
                    numPlayers3 = parseInt(player3.searchNum);
                }
                if (player3.feet !== "" && player3.inches !== "") {
                    height3 = player3.feet * 12
                    height3 += player3.inches
                    if (height3 > 126) { height3 = 126 }
                }
                if (player3.weight !== "") {
                    weight3 = player3.weight - 160;
                }
            }
            if (numProfiles > 3) {
                if (player4.searchNum === "") { numPlayers4 = 450; }
                else {
                    numPlayers4 = parseInt(player4.searchNum);
                }
                if (player4.feet !== "" && player4.inches !== "") {
                    height4 = player4.feet * 12
                    height4 += player4.inches
                    if (height4 > 126) { height4 = 126 }
                }
                if (player4.weight !== "") {
                    weight4 = player4.weight - 160;
                }
            }
            if (numProfiles > 4) {
                if (player5.searchNum === "") { numPlayers5 = 450; }
                else {
                    numPlayers5 = parseInt(player5.searchNum);
                }
                if (player5.feet !== "" && player5.inches !== "") {
                    height5 = player5.feet * 12
                    height5 += player5.inches
                    if (height5 > 126) { height5 = 126 }
                }
                if (player5.weight !== "") {
                    weight5 = player5.weight - 160;
                }
            }
            var pathNew = path;
            pathNew = pathNew.concat("Desktop\\CAREERDRAFT-")
            pathNew = pathNew.concat(e.target["filename"].value);
			try {
                const data = await fs.promises.readFile(filePathNew)
                var i = 0
                //create player
                var playerPos1 = positionsArray.indexOf(player1.position) - 1; //position is the string of the position.
                var playerPos2 = positionsArray.indexOf(player2.position) - 1;
                var playerPos3 = positionsArray.indexOf(player3.position) - 1;
                var playerPos4 = positionsArray.indexOf(player4.position) - 1;
                var playerPos5 = positionsArray.indexOf(player5.position) - 1;
                var playerDev1 = developmentsArray.indexOf(player1.development) - 1;
                var playerDev2 = developmentsArray.indexOf(player2.development) - 1;
                var playerDev3 = developmentsArray.indexOf(player3.development) - 1;
                var playerDev4 = developmentsArray.indexOf(player4.development) - 1;
                var playerDev5 = developmentsArray.indexOf(player5.development) - 1;
                var firstNameBlank;
                var lastNameBlank;
                var numSpaces = 0;

                while ((i < numPlayers1)&&(i<450)) {
                    //136 college
                    if (player1.fname !== "") {
                        firstNameBlank = data.slice((70 + (336 * i)), (70 + (336 * i)+player1.fname.length))
                        firstNameBlank.write(player1.fname);
                        numSpaces = 17 - player1.fname.length;
                        while (numSpaces > 0) {
                            data[87 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    if (player1.lname !== "") {
                        lastNameBlank = data.slice((87 + (336 * i)), (87 + (336 * i))+player1.lname.length)
                        lastNameBlank.write(player1.lname);
                        numSpaces = 21 - player1.lname.length;
                        while (numSpaces > 0) {
                            data[108 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    //data[136 + (336 * i)] = i; //college
                    if (player1.age !== "") { data[140 + (336 * i)] = player1.age }
                    if (player1.feet !== "" && player1.inches !== "") { data[141 + (336 * i)] = height1 }
                    if (player1.weight !== "") { data[142 + (336 * i)] = weight1 }
                    if (playerPos1 !== -1) { data[143 + (336 * i)] = playerPos1 }
                    if (player1.OVR !== "") { data[150 + (336 * i)] = player1.OVR }
                    if (player1.ACC !== "") { data[151 + (336 * i)] = player1.ACC }
                    if (player1.AGI !== "") { data[152 + (336 * i)] = player1.AGI }
                    if (player1.AWR !== "") { data[153 + (336 * i)] = player1.AWR }
                    if (player1.BCV !== "") { data[154 + (336 * i)] = player1.BCV }
                    if (player1.BSH !== "") { data[155 + (336 * i)] = player1.BSH }
                    if (player1.BSK !== "") { data[156 + (336 * i)] = player1.BSK }
                    if (player1.BTK !== "") { data[157 + (336 * i)] = player1.BTK }
                    if (player1.CAR !== "") { data[158 + (336 * i)] = player1.CAR }
                    if (player1.CTH !== "") { data[159 + (336 * i)] = player1.CTH }
                    if (player1.CIT !== "") { data[160 + (336 * i)] = player1.CIT }
                    if (player1.ELU !== "") { data[161 + (336 * i)] = player1.ELU }
                    if (player1.POW !== "") { data[162 + (336 * i)] = player1.POW }
                    if (player1.IBL !== "") { data[163 + (336 * i)] = player1.IBL }
                    if (player1.INJ !== "") { data[164 + (336 * i)] = player1.INJ }
                    if (player1.JKM !== "") { data[165 + (336 * i)] = player1.JKM }
                    if (player1.JMP !== "") { data[166 + (336 * i)] = player1.JMP }
                    if (player1.KAC !== "") { data[167 + (336 * i)] = player1.KAC }//167
                    if (player1.KPW !== "") { data[168 + (336 * i)] = player1.KPW }
                    if (player1.RET !== "") { data[169 + (336 * i)] = player1.RET }
                    if (player1.LBK !== "") { data[170 + (336 * i)] = player1.LBK }
                    if (player1.MCV !== "") { data[171 + (336 * i)] = player1.MCV }
                    if (player1.PBF !== "") { data[172 + (336 * i)] = player1.PBF }
                    if (player1.PBP !== "") { data[173 + (336 * i)] = player1.PBP }
                    if (player1.PBK !== "") { data[174 + (336 * i)] = player1.PBK }
                    if (player1.PER !== "") { data[175 + (336 * i)] = player1.PER }
                    if (player1.PAC !== "") { data[176 + (336 * i)] = player1.PAC }
                    if (player1.PRC !== "") { data[177 + (336 * i)] = player1.PRC }
                    if (player1.PMV !== "") { data[178 + (336 * i)] = player1.PMV }
                    if (player1.PRS !== "") { data[179 + (336 * i)] = player1.PRS }
                    if (player1.PUR !== "") { data[180 + (336 * i)] = player1.PUR }
                    if (player1.RLS !== "") { data[181 + (336 * i)] = player1.RLS }
                    if (player1.DRR !== "") { data[182 + (336 * i)] = player1.DRR }
                    if (player1.MRR !== "") { data[183 + (336 * i)] = player1.MRR }
                    if (player1.SRR !== "") { data[184 + (336 * i)] = player1.SRR }
                    if (player1.RBF !== "") { data[185 + (336 * i)] = player1.RBF }
                    if (player1.RBP !== "") { data[186 + (336 * i)] = player1.RBP }
                    if (player1.RBK !== "") { data[187 + (336 * i)] = player1.RBK }//187
                    if (player1.SPC !== "") { data[189 + (336 * i)] = player1.SPC }
                    if (player1.SPD !== "") { data[190 + (336 * i)] = player1.SPD }
                    if (player1.SPM !== "") { data[191 + (336 * i)] = player1.SPM }
                    if (player1.STA !== "") { data[192 + (336 * i)] = player1.STA }
                    if (player1.SFA !== "") { data[193 + (336 * i)] = player1.SFA }
                    if (player1.STR !== "") { data[194 + (336 * i)] = player1.STR }
                    if (player1.TAK !== "") { data[195 + (336 * i)] = player1.TAK }
                    if (player1.DAC !== "") { data[196 + (336 * i)] = player1.DAC }
                    if (player1.MAC !== "") { data[197 + (336 * i)] = player1.MAC }//197
                    if (player1.SAC !== "") { data[199 + (336 * i)] = player1.SAC }
                    if (player1.RUN !== "") { data[200 + (336 * i)] = player1.RUN }
                    if (player1.THP !== "") {data[201 + (336 * i)] = player1.THP}
                    if (player1.TUP !== "") { data[202 + (336 * i)] = player1.TUP }
                    if (player1.TGH !== "") { data[203 + (336 * i)] = player1.TGH }
                    if (player1.TRK !== "") { data[204 + (336 * i)] = player1.TRK }
                    if (player1.ZCV !== "") { data[205 + (336 * i)] = player1.ZCV }
                    if (player1.MOR !== "") { data[206 + (336 * i)] = player1.MOR }
                    if (playerDev1 !== -1) { data[233 + (336 * i)] = playerDev1 };
                    if (player1.headless !== "") {data[316 + (336 * i)] = 0};
                    i++;
                }
                while ((i < (numPlayers1+numPlayers2)) && (i < 450)&&numProfiles>1) {
                    //136 college
                    if (player2.fname !== "") {
                        firstNameBlank = data.slice((70 + (336 * i)), (70 + (336 * i) + player2.fname.length))
                        firstNameBlank.write(player2.fname);
                        numSpaces = 17 - player2.fname.length;
                        while (numSpaces > 0) {
                            data[87 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    if (player2.lname !== "") {
                        lastNameBlank = data.slice((87 + (336 * i)), (87 + (336 * i)) + player2.lname.length)
                        lastNameBlank.write(player2.lname);
                        numSpaces = 21 - player2.lname.length;
                        while (numSpaces > 0) {
                            data[108 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    //data[136 + (336 * i)] = i; //college
                    if (player2.age !== "") { data[140 + (336 * i)] = player2.age }
                    if (player2.feet !== "" && player2.inches !== "") { data[141 + (336 * i)] = height2 }
                    if (player2.weight !== "") { data[142 + (336 * i)] = weight2 }
                    if (playerPos2 !== -1) { data[143 + (336 * i)] = playerPos2 }
                    if (player2.OVR !== "") { data[150 + (336 * i)] = player2.OVR }
                    if (player2.ACC !== "") { data[151 + (336 * i)] = player2.ACC }
                    if (player2.AGI !== "") { data[152 + (336 * i)] = player2.AGI }
                    if (player2.AWR !== "") { data[153 + (336 * i)] = player2.AWR }
                    if (player2.BCV !== "") { data[154 + (336 * i)] = player2.BCV }
                    if (player2.BSH !== "") { data[155 + (336 * i)] = player2.BSH }
                    if (player2.BSK !== "") { data[156 + (336 * i)] = player2.BSK }
                    if (player2.BTK !== "") { data[157 + (336 * i)] = player2.BTK }
                    if (player2.CAR !== "") { data[158 + (336 * i)] = player2.CAR }
                    if (player2.CTH !== "") { data[159 + (336 * i)] = player2.CTH }
                    if (player2.CIT !== "") { data[160 + (336 * i)] = player2.CIT }
                    if (player2.ELU !== "") { data[161 + (336 * i)] = player2.ELU }
                    if (player2.POW !== "") { data[162 + (336 * i)] = player2.POW }
                    if (player2.IBL !== "") { data[163 + (336 * i)] = player2.IBL }
                    if (player2.INJ !== "") { data[164 + (336 * i)] = player2.INJ }
                    if (player2.JKM !== "") { data[165 + (336 * i)] = player2.JKM }
                    if (player2.JMP !== "") { data[166 + (336 * i)] = player2.JMP }
                    if (player2.KAC !== "") { data[167 + (336 * i)] = player2.KAC }//167
                    if (player2.KPW !== "") { data[168 + (336 * i)] = player2.KPW }
                    if (player2.RET !== "") { data[169 + (336 * i)] = player2.RET }
                    if (player2.LBK !== "") { data[170 + (336 * i)] = player2.LBK }
                    if (player2.MCV !== "") { data[171 + (336 * i)] = player2.MCV }
                    if (player2.PBF !== "") { data[172 + (336 * i)] = player2.PBF }
                    if (player2.PBP !== "") { data[173 + (336 * i)] = player2.PBP }
                    if (player2.PBK !== "") { data[174 + (336 * i)] = player2.PBK }
                    if (player2.PER !== "") { data[175 + (336 * i)] = player2.PER }
                    if (player2.PAC !== "") { data[176 + (336 * i)] = player2.PAC }
                    if (player2.PRC !== "") { data[177 + (336 * i)] = player2.PRC }
                    if (player2.PMV !== "") { data[178 + (336 * i)] = player2.PMV }
                    if (player2.PRS !== "") { data[179 + (336 * i)] = player2.PRS }
                    if (player2.PUR !== "") { data[180 + (336 * i)] = player2.PUR }
                    if (player2.RLS !== "") { data[181 + (336 * i)] = player2.RLS }
                    if (player2.DRR !== "") { data[182 + (336 * i)] = player2.DRR }
                    if (player2.MRR !== "") { data[183 + (336 * i)] = player2.MRR }
                    if (player2.SRR !== "") { data[184 + (336 * i)] = player2.SRR }
                    if (player2.RBF !== "") { data[185 + (336 * i)] = player2.RBF }
                    if (player2.RBP !== "") { data[186 + (336 * i)] = player2.RBP }
                    if (player2.RBK !== "") { data[187 + (336 * i)] = player2.RBK }//187
                    if (player2.SPC !== "") { data[189 + (336 * i)] = player2.SPC }
                    if (player2.SPD !== "") { data[190 + (336 * i)] = player2.SPD }
                    if (player2.SPM !== "") { data[191 + (336 * i)] = player2.SPM }
                    if (player2.STA !== "") { data[192 + (336 * i)] = player2.STA }
                    if (player2.SFA !== "") { data[193 + (336 * i)] = player2.SFA }
                    if (player2.STR !== "") { data[194 + (336 * i)] = player2.STR }
                    if (player2.TAK !== "") { data[195 + (336 * i)] = player2.TAK }
                    if (player2.DAC !== "") { data[196 + (336 * i)] = player2.DAC }
                    if (player2.MAC !== "") { data[197 + (336 * i)] = player2.MAC }//197
                    if (player2.SAC !== "") { data[199 + (336 * i)] = player2.SAC }
                    if (player2.RUN !== "") { data[200 + (336 * i)] = player2.RUN }
                    if (player2.THP !== "") { data[201 + (336 * i)] = player2.THP }
                    if (player2.TUP !== "") { data[202 + (336 * i)] = player2.TUP }
                    if (player2.TGH !== "") { data[203 + (336 * i)] = player2.TGH }
                    if (player2.TRK !== "") { data[204 + (336 * i)] = player2.TRK }
                    if (player2.ZCV !== "") { data[205 + (336 * i)] = player2.ZCV }
                    if (player2.MOR !== "") { data[206 + (336 * i)] = player2.MOR }
                    if (playerDev2 !== -1) { data[233 + (336 * i)] = playerDev2 };
                    if (player2.headless !== "") { data[316 + (336 * i)] = 0 };
                    i++;
                }
                while ((i < (numPlayers1+numPlayers2+numPlayers3)) && (i < 450) &&numProfiles>2) {
                    //136 college
                    if (player3.fname !== "") {
                        firstNameBlank = data.slice((70 + (336 * i)), (70 + (336 * i) + player3.fname.length))
                        firstNameBlank.write(player3.fname);
                        numSpaces = 17 - player3.fname.length;
                        while (numSpaces > 0) {
                            data[87 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    if (player3.lname !== "") {
                        lastNameBlank = data.slice((87 + (336 * i)), (87 + (336 * i)) + player3.lname.length)
                        lastNameBlank.write(player3.lname);
                        numSpaces = 21 - player3.lname.length;
                        while (numSpaces > 0) {
                            data[108 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    //data[136 + (336 * i)] = i; //college
                    if (player3.age !== "") { data[140 + (336 * i)] = player3.age }
                    if (player3.feet !== "" && player3.inches !== "") { data[141 + (336 * i)] = height3 }
                    if (player3.weight !== "") { data[142 + (336 * i)] = weight3 }
                    if (playerPos3 !== -1) { data[143 + (336 * i)] = playerPos3 }
                    if (player3.OVR !== "") { data[150 + (336 * i)] = player3.OVR }
                    if (player3.ACC !== "") { data[151 + (336 * i)] = player3.ACC }
                    if (player3.AGI !== "") { data[152 + (336 * i)] = player3.AGI }
                    if (player3.AWR !== "") { data[153 + (336 * i)] = player3.AWR }
                    if (player3.BCV !== "") { data[154 + (336 * i)] = player3.BCV }
                    if (player3.BSH !== "") { data[155 + (336 * i)] = player3.BSH }
                    if (player3.BSK !== "") { data[156 + (336 * i)] = player3.BSK }
                    if (player3.BTK !== "") { data[157 + (336 * i)] = player3.BTK }
                    if (player3.CAR !== "") { data[158 + (336 * i)] = player3.CAR }
                    if (player3.CTH !== "") { data[159 + (336 * i)] = player3.CTH }
                    if (player3.CIT !== "") { data[160 + (336 * i)] = player3.CIT }
                    if (player3.ELU !== "") { data[161 + (336 * i)] = player3.ELU }
                    if (player3.POW !== "") { data[162 + (336 * i)] = player3.POW }
                    if (player3.IBL !== "") { data[163 + (336 * i)] = player3.IBL }
                    if (player3.INJ !== "") { data[164 + (336 * i)] = player3.INJ }
                    if (player3.JKM !== "") { data[165 + (336 * i)] = player3.JKM }
                    if (player3.JMP !== "") { data[166 + (336 * i)] = player3.JMP }
                    if (player3.KAC !== "") { data[167 + (336 * i)] = player3.KAC }//167
                    if (player3.KPW !== "") { data[168 + (336 * i)] = player3.KPW }
                    if (player3.RET !== "") { data[169 + (336 * i)] = player3.RET }
                    if (player3.LBK !== "") { data[170 + (336 * i)] = player3.LBK }
                    if (player3.MCV !== "") { data[171 + (336 * i)] = player3.MCV }
                    if (player3.PBF !== "") { data[172 + (336 * i)] = player3.PBF }
                    if (player3.PBP !== "") { data[173 + (336 * i)] = player3.PBP }
                    if (player3.PBK !== "") { data[174 + (336 * i)] = player3.PBK }
                    if (player3.PER !== "") { data[175 + (336 * i)] = player3.PER }
                    if (player3.PAC !== "") { data[176 + (336 * i)] = player3.PAC }
                    if (player3.PRC !== "") { data[177 + (336 * i)] = player3.PRC }
                    if (player3.PMV !== "") { data[178 + (336 * i)] = player3.PMV }
                    if (player3.PRS !== "") { data[179 + (336 * i)] = player3.PRS }
                    if (player3.PUR !== "") { data[180 + (336 * i)] = player3.PUR }
                    if (player3.RLS !== "") { data[181 + (336 * i)] = player3.RLS }
                    if (player3.DRR !== "") { data[182 + (336 * i)] = player3.DRR }
                    if (player3.MRR !== "") { data[183 + (336 * i)] = player3.MRR }
                    if (player3.SRR !== "") { data[184 + (336 * i)] = player3.SRR }
                    if (player3.RBF !== "") { data[185 + (336 * i)] = player3.RBF }
                    if (player3.RBP !== "") { data[186 + (336 * i)] = player3.RBP }
                    if (player3.RBK !== "") { data[187 + (336 * i)] = player3.RBK }//187
                    if (player3.SPC !== "") { data[189 + (336 * i)] = player3.SPC }
                    if (player3.SPD !== "") { data[190 + (336 * i)] = player3.SPD }
                    if (player3.SPM !== "") { data[191 + (336 * i)] = player3.SPM }
                    if (player3.STA !== "") { data[192 + (336 * i)] = player3.STA }
                    if (player3.SFA !== "") { data[193 + (336 * i)] = player3.SFA }
                    if (player3.STR !== "") { data[194 + (336 * i)] = player3.STR }
                    if (player3.TAK !== "") { data[195 + (336 * i)] = player3.TAK }
                    if (player3.DAC !== "") { data[196 + (336 * i)] = player3.DAC }
                    if (player3.MAC !== "") { data[197 + (336 * i)] = player3.MAC }//197
                    if (player3.SAC !== "") { data[199 + (336 * i)] = player3.SAC }
                    if (player3.RUN !== "") { data[200 + (336 * i)] = player3.RUN }
                    if (player3.THP !== "") { data[201 + (336 * i)] = player3.THP }
                    if (player3.TUP !== "") { data[202 + (336 * i)] = player3.TUP }
                    if (player3.TGH !== "") { data[203 + (336 * i)] = player3.TGH }
                    if (player3.TRK !== "") { data[204 + (336 * i)] = player3.TRK }
                    if (player3.ZCV !== "") { data[205 + (336 * i)] = player3.ZCV }
                    if (player3.MOR !== "") { data[206 + (336 * i)] = player3.MOR }
                    if (playerDev3 !== -1) { data[233 + (336 * i)] = playerDev3 };
                    if (player3.headless !== "") { data[316 + (336 * i)] = 0 };
                    i++;
                }
                while ((i < (numPlayers1+numPlayers2+numPlayers3+numPlayers4)) && (i < 450)&&numProfiles>3) {
                    //136 college
                    if (player4.fname !== "") {
                        firstNameBlank = data.slice((70 + (336 * i)), (70 + (336 * i) + player4.fname.length))
                        firstNameBlank.write(player4.fname);
                        numSpaces = 17 - player4.fname.length;
                        while (numSpaces > 0) {
                            data[87 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    if (player4.lname !== "") {
                        lastNameBlank = data.slice((87 + (336 * i)), (87 + (336 * i)) + player4.lname.length)
                        lastNameBlank.write(player4.lname);
                        numSpaces = 21 - player4.lname.length;
                        while (numSpaces > 0) {
                            data[108 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    //data[136 + (336 * i)] = i; //college
                    if (player4.age !== "") { data[140 + (336 * i)] = player4.age }
                    if (player4.feet !== "" && player4.inches !== "") { data[141 + (336 * i)] = height4 }
                    if (player4.weight !== "") { data[142 + (336 * i)] = weight4 }
                    if (playerPos4 !== -1) { data[143 + (336 * i)] = playerPos4 }
                    if (player4.OVR !== "") { data[150 + (336 * i)] = player4.OVR }
                    if (player4.ACC !== "") { data[151 + (336 * i)] = player4.ACC }
                    if (player4.AGI !== "") { data[152 + (336 * i)] = player4.AGI }
                    if (player4.AWR !== "") { data[153 + (336 * i)] = player4.AWR }
                    if (player4.BCV !== "") { data[154 + (336 * i)] = player4.BCV }
                    if (player4.BSH !== "") { data[155 + (336 * i)] = player4.BSH }
                    if (player4.BSK !== "") { data[156 + (336 * i)] = player4.BSK }
                    if (player4.BTK !== "") { data[157 + (336 * i)] = player4.BTK }
                    if (player4.CAR !== "") { data[158 + (336 * i)] = player4.CAR }
                    if (player4.CTH !== "") { data[159 + (336 * i)] = player4.CTH }
                    if (player4.CIT !== "") { data[160 + (336 * i)] = player4.CIT }
                    if (player4.ELU !== "") { data[161 + (336 * i)] = player4.ELU }
                    if (player4.POW !== "") { data[162 + (336 * i)] = player4.POW }
                    if (player4.IBL !== "") { data[163 + (336 * i)] = player4.IBL }
                    if (player4.INJ !== "") { data[164 + (336 * i)] = player4.INJ }
                    if (player4.JKM !== "") { data[165 + (336 * i)] = player4.JKM }
                    if (player4.JMP !== "") { data[166 + (336 * i)] = player4.JMP }
                    if (player4.KAC !== "") { data[167 + (336 * i)] = player4.KAC }//167
                    if (player4.KPW !== "") { data[168 + (336 * i)] = player4.KPW }
                    if (player4.RET !== "") { data[169 + (336 * i)] = player4.RET }
                    if (player4.LBK !== "") { data[170 + (336 * i)] = player4.LBK }
                    if (player4.MCV !== "") { data[171 + (336 * i)] = player4.MCV }
                    if (player4.PBF !== "") { data[172 + (336 * i)] = player4.PBF }
                    if (player4.PBP !== "") { data[173 + (336 * i)] = player4.PBP }
                    if (player4.PBK !== "") { data[174 + (336 * i)] = player4.PBK }
                    if (player4.PER !== "") { data[175 + (336 * i)] = player4.PER }
                    if (player4.PAC !== "") { data[176 + (336 * i)] = player4.PAC }
                    if (player4.PRC !== "") { data[177 + (336 * i)] = player4.PRC }
                    if (player4.PMV !== "") { data[178 + (336 * i)] = player4.PMV }
                    if (player4.PRS !== "") { data[179 + (336 * i)] = player4.PRS }
                    if (player4.PUR !== "") { data[180 + (336 * i)] = player4.PUR }
                    if (player4.RLS !== "") { data[181 + (336 * i)] = player4.RLS }
                    if (player4.DRR !== "") { data[182 + (336 * i)] = player4.DRR }
                    if (player4.MRR !== "") { data[183 + (336 * i)] = player4.MRR }
                    if (player4.SRR !== "") { data[184 + (336 * i)] = player4.SRR }
                    if (player4.RBF !== "") { data[185 + (336 * i)] = player4.RBF }
                    if (player4.RBP !== "") { data[186 + (336 * i)] = player4.RBP }
                    if (player4.RBK !== "") { data[187 + (336 * i)] = player4.RBK }//187
                    if (player4.SPC !== "") { data[189 + (336 * i)] = player4.SPC }
                    if (player4.SPD !== "") { data[190 + (336 * i)] = player4.SPD }
                    if (player4.SPM !== "") { data[191 + (336 * i)] = player4.SPM }
                    if (player4.STA !== "") { data[192 + (336 * i)] = player4.STA }
                    if (player4.SFA !== "") { data[193 + (336 * i)] = player4.SFA }
                    if (player4.STR !== "") { data[194 + (336 * i)] = player4.STR }
                    if (player4.TAK !== "") { data[195 + (336 * i)] = player4.TAK }
                    if (player4.DAC !== "") { data[196 + (336 * i)] = player4.DAC }
                    if (player4.MAC !== "") { data[197 + (336 * i)] = player4.MAC }//197
                    if (player4.SAC !== "") { data[199 + (336 * i)] = player4.SAC }
                    if (player4.RUN !== "") { data[200 + (336 * i)] = player4.RUN }
                    if (player4.THP !== "") { data[201 + (336 * i)] = player4.THP }
                    if (player4.TUP !== "") { data[202 + (336 * i)] = player4.TUP }
                    if (player4.TGH !== "") { data[203 + (336 * i)] = player4.TGH }
                    if (player4.TRK !== "") { data[204 + (336 * i)] = player4.TRK }
                    if (player4.ZCV !== "") { data[205 + (336 * i)] = player4.ZCV }
                    if (player4.MOR !== "") { data[206 + (336 * i)] = player4.MOR }
                    if (playerDev4 !== -1) { data[233 + (336 * i)] = playerDev4 };
                    if (player1.headless !== "") { data[316 + (336 * i)] = 0 };
                    i++;
                }
                while ((i < (numPlayers1 + numPlayers2 + numPlayers3 + numPlayers4+numPlayers5)) && (i < 450)&&numProfiles>4) {
                    //136 college
                    if (player5.fname !== "") {
                        firstNameBlank = data.slice((70 + (336 * i)), (70 + (336 * i) + player5.fname.length))
                        firstNameBlank.write(player5.fname);
                        numSpaces = 17 - player5.fname.length;
                        while (numSpaces > 0) {
                            data[87 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    if (player5.lname !== "") {
                        lastNameBlank = data.slice((87 + (336 * i)), (87 + (336 * i)) + player5.lname.length)
                        lastNameBlank.write(player5.lname);
                        numSpaces = 21 - player5.lname.length;
                        while (numSpaces > 0) {
                            data[108 - numSpaces + (336 * i)] = 0;
                            numSpaces--;
                        }
                    }
                    //data[136 + (336 * i)] = i; //college
                    if (player5.age !== "") { data[140 + (336 * i)] = player5.age }
                    if (player5.feet !== "" && player4.inches !== "") { data[141 + (336 * i)] = height5 }
                    if (player5.weight !== "") { data[142 + (336 * i)] = weight5 }
                    if (playerPos5 !== -1) { data[143 + (336 * i)] = playerPos5 }
                    if (player5.OVR !== "") { data[150 + (336 * i)] = player5.OVR }
                    if (player5.ACC !== "") { data[151 + (336 * i)] = player5.ACC }
                    if (player5.AGI !== "") { data[152 + (336 * i)] = player5.AGI }
                    if (player5.AWR !== "") { data[153 + (336 * i)] = player5.AWR }
                    if (player5.BCV !== "") { data[154 + (336 * i)] = player5.BCV }
                    if (player5.BSH !== "") { data[155 + (336 * i)] = player5.BSH }
                    if (player5.BSK !== "") { data[156 + (336 * i)] = player5.BSK }
                    if (player5.BTK !== "") { data[157 + (336 * i)] = player5.BTK }
                    if (player5.CAR !== "") { data[158 + (336 * i)] = player5.CAR }
                    if (player5.CTH !== "") { data[159 + (336 * i)] = player5.CTH }
                    if (player5.CIT !== "") { data[160 + (336 * i)] = player5.CIT }
                    if (player5.ELU !== "") { data[161 + (336 * i)] = player5.ELU }
                    if (player5.POW !== "") { data[162 + (336 * i)] = player5.POW }
                    if (player5.IBL !== "") { data[163 + (336 * i)] = player5.IBL }
                    if (player5.INJ !== "") { data[164 + (336 * i)] = player5.INJ }
                    if (player5.JKM !== "") { data[165 + (336 * i)] = player5.JKM }
                    if (player5.JMP !== "") { data[166 + (336 * i)] = player5.JMP }
                    if (player5.KAC !== "") { data[167 + (336 * i)] = player5.KAC }//167
                    if (player5.KPW !== "") { data[168 + (336 * i)] = player5.KPW }
                    if (player5.RET !== "") { data[169 + (336 * i)] = player5.RET }
                    if (player5.LBK !== "") { data[170 + (336 * i)] = player5.LBK }
                    if (player5.MCV !== "") { data[171 + (336 * i)] = player5.MCV }
                    if (player5.PBF !== "") { data[172 + (336 * i)] = player5.PBF }
                    if (player5.PBP !== "") { data[173 + (336 * i)] = player5.PBP }
                    if (player5.PBK !== "") { data[174 + (336 * i)] = player5.PBK }
                    if (player5.PER !== "") { data[175 + (336 * i)] = player5.PER }
                    if (player5.PAC !== "") { data[176 + (336 * i)] = player5.PAC }
                    if (player5.PRC !== "") { data[177 + (336 * i)] = player5.PRC }
                    if (player5.PMV !== "") { data[178 + (336 * i)] = player5.PMV }
                    if (player5.PRS !== "") { data[179 + (336 * i)] = player5.PRS }
                    if (player5.PUR !== "") { data[180 + (336 * i)] = player5.PUR }
                    if (player5.RLS !== "") { data[181 + (336 * i)] = player5.RLS }
                    if (player5.DRR !== "") { data[182 + (336 * i)] = player5.DRR }
                    if (player5.MRR !== "") { data[183 + (336 * i)] = player5.MRR }
                    if (player5.SRR !== "") { data[184 + (336 * i)] = player5.SRR }
                    if (player5.RBF !== "") { data[185 + (336 * i)] = player5.RBF }
                    if (player5.RBP !== "") { data[186 + (336 * i)] = player5.RBP }
                    if (player5.RBK !== "") { data[187 + (336 * i)] = player5.RBK }//187
                    if (player5.SPC !== "") { data[189 + (336 * i)] = player5.SPC }
                    if (player5.SPD !== "") { data[190 + (336 * i)] = player5.SPD }
                    if (player5.SPM !== "") { data[191 + (336 * i)] = player5.SPM }
                    if (player5.STA !== "") { data[192 + (336 * i)] = player5.STA }
                    if (player5.SFA !== "") { data[193 + (336 * i)] = player5.SFA }
                    if (player5.STR !== "") { data[194 + (336 * i)] = player5.STR }
                    if (player5.TAK !== "") { data[195 + (336 * i)] = player5.TAK }
                    if (player5.DAC !== "") { data[196 + (336 * i)] = player5.DAC }
                    if (player5.MAC !== "") { data[197 + (336 * i)] = player5.MAC }//197
                    if (player5.SAC !== "") { data[199 + (336 * i)] = player5.SAC }
                    if (player5.RUN !== "") { data[200 + (336 * i)] = player5.RUN }
                    if (player5.THP !== "") { data[201 + (336 * i)] = player5.THP }
                    if (player5.TUP !== "") { data[202 + (336 * i)] = player5.TUP }
                    if (player5.TGH !== "") { data[203 + (336 * i)] = player5.TGH }
                    if (player5.TRK !== "") { data[204 + (336 * i)] = player5.TRK }
                    if (player5.ZCV !== "") { data[205 + (336 * i)] = player5.ZCV }
                    if (player5.MOR !== "") { data[206 + (336 * i)] = player5.MOR }
                    if (playerDev5 !== -1) { data[233 + (336 * i)] = playerDev5 };
                    if (player5.headless !== "") { data[316 + (336 * i)] = 0 };
                    i++;
                }
                fs.promises.writeFile(pathNew, data)
            } catch (error) {
                console.error(`Got an error trying to read the file: ${error.message}`);
            }

        }
        var player1 = ""
        var player2 = ""
        var player3 = ""
        var player4 = ""
        var player5 = ""
        if (!advance1) {
            if (attributes1 == 0) {
                player1 = new DefaultInfo(e.target["filename".value],e.target["version"].value,"",e.target["searchNum1"].value, "", "", "", "", "", "", e.target["playerType1"].value, e.target["development1"].value, e.target["Overall1"].value)
            } else {
                player1 = new DefaultInfo(e.target["filename".value],e.target["version"].value,e.target["headless1"].value,e.target["searchNum1"].value, e.target["fname1"].value, e.target["lname1"].value, e.target["Age1"].value, e.target["Feet1"].value, e.target["Inches1"].value, e.target["Weight1"].value, e.target["playerType1"].value, e.target["development1"].value, e.target["Overall1"].value)
            }
        } else {
            if (attributes1 == 0) {
                player1 = new AdvancedInfo(e.target["filename".value],e.target["version"].value,"",e.target["searchNum1"].value, "", "", "", "", "", "", e.target["playerType1"].value, e.target["development1"].value, e.target["Overall1"].value, e.target["MOR1"].value, e.target["SPD1"].value, e.target["ACC1"].value, e.target["AGI1"].value, e.target["STR1"].value, e.target["AWR1"].value, e.target["CAR1"].value, e.target["BCV1"].value, e.target["BTK1"].value, e.target["TRK1"].value, e.target["SFA1"].value, e.target["ELU1"].value, e.target["SPM1"].value, e.target["JKM1"].value, e.target["CTH1"].value, e.target["CIT1"].value, e.target["SPC1"].value, e.target["SRR1"].value, e.target["MRR1"].value, e.target["DRR1"].value, e.target["RLS1"].value, e.target["JMP1"].value, e.target["THP1"].value, e.target["SAC1"].value, e.target["MAC1"].value, e.target["DAC1"].value, e.target["RUN1"].value, e.target["TUP1"].value, e.target["BSK1"].value, e.target["PAC1"].value, e.target["PBK1"].value, e.target["PBP1"].value, e.target["PBF1"].value, e.target["RBK1"].value, e.target["RBP1"].value, e.target["RBF1"].value, e.target["LBK1"].value, e.target["IBL1"].value, e.target["PRC1"].value, e.target["TAK1"].value, e.target["POW1"].value, e.target["BSH1"].value, e.target["FMV1"].value, e.target["PMV1"].value, e.target["PUR1"].value, e.target["MCV1"].value, e.target["ZCV1"].value, e.target["PRS1"].value, e.target["RET1"].value, e.target["KPW1"].value, e.target["KAC1"].value, e.target["STA1"].value, e.target["TGH1"].value, e.target["INJ1"].value, e.target["PER1"].value);

            } else {
                player1 = new AdvancedInfo(e.target["filename".value],e.target["version"].value,e.target["headless1"].value, e.target["searchNum1"].value, e.target["fname1"].value, e.target["lname1"].value, e.target["Age1"].value, e.target["Feet1"].value, e.target["Inches1"].value, e.target["Weight1"].value, e.target["playerType1"].value, e.target["development1"].value, e.target["Overall1"].value, e.target["MOR1"].value, e.target["SPD1"].value, e.target["ACC1"].value, e.target["AGI1"].value, e.target["STR1"].value, e.target["AWR1"].value, e.target["CAR1"].value, e.target["BCV1"].value, e.target["BTK1"].value, e.target["TRK1"].value, e.target["SFA1"].value, e.target["ELU1"].value, e.target["SPM1"].value, e.target["JKM1"].value, e.target["CTH1"].value, e.target["CIT1"].value, e.target["SPC1"].value, e.target["SRR1"].value, e.target["MRR1"].value, e.target["DRR1"].value, e.target["RLS1"].value, e.target["JMP1"].value, e.target["THP1"].value, e.target["SAC1"].value, e.target["MAC1"].value, e.target["DAC1"].value, e.target["RUN1"].value, e.target["TUP1"].value, e.target["BSK1"].value, e.target["PAC1"].value, e.target["PBK1"].value, e.target["PBP1"].value, e.target["PBF1"].value, e.target["RBK1"].value, e.target["RBP1"].value, e.target["RBF1"].value, e.target["LBK1"].value, e.target["IBL1"].value, e.target["PRC1"].value, e.target["TAK1"].value, e.target["POW1"].value, e.target["BSH1"].value, e.target["FMV1"].value, e.target["PMV1"].value, e.target["PUR1"].value, e.target["MCV1"].value, e.target["ZCV1"].value, e.target["PRS1"].value, e.target["RET1"].value, e.target["KPW1"].value, e.target["KAC1"].value, e.target["STA1"].value, e.target["TGH1"].value, e.target["INJ1"].value, e.target["PER1"].value);
                
            }
        }
        if (numProfiles > 1) {
            if (!advance2) {
                if (attributes2 == 0) {
                    player2 = new DefaultInfo(e.target["filename".value], e.target["version"].value, "", e.target["searchNum2"].value, "", "", "", "", "", "", e.target["playerType2"].value, e.target["development2"].value, e.target["Overall2"].value)
                } else {
                    player2 = new DefaultInfo(e.target["filename".value], e.target["version"].value, e.target["headless2"].value, e.target["searchNum2"].value, e.target["fname2"].value, e.target["lname2"].value, e.target["Age2"].value, e.target["Feet2"].value, e.target["Inches2"].value, e.target["Weight2"].value, e.target["playerType2"].value, e.target["development2"].value, e.target["Overall2"].value)
                }
            } else {
                if (attributes2 == 0) {
                    player2 = new AdvancedInfo(e.target["filename".value], e.target["version"].value, "", e.target["searchNum2"].value, "", "", "", "", "", "", e.target["playerType2"].value, e.target["development2"].value, e.target["Overall2"].value, e.target["MOR2"].value, e.target["SPD2"].value, e.target["ACC2"].value, e.target["AGI2"].value, e.target["STR2"].value, e.target["AWR2"].value, e.target["CAR2"].value, e.target["BCV2"].value, e.target["BTK2"].value, e.target["TRK2"].value, e.target["SFA2"].value, e.target["ELU2"].value, e.target["SPM2"].value, e.target["JKM2"].value, e.target["CTH2"].value, e.target["CIT2"].value, e.target["SPC2"].value, e.target["SRR2"].value, e.target["MRR2"].value, e.target["DRR2"].value, e.target["RLS2"].value, e.target["JMP2"].value, e.target["THP2"].value, e.target["SAC2"].value, e.target["MAC2"].value, e.target["DAC2"].value, e.target["RUN2"].value, e.target["TUP2"].value, e.target["BSK2"].value, e.target["PAC2"].value, e.target["PBK2"].value, e.target["PBP2"].value, e.target["PBF2"].value, e.target["RBK2"].value, e.target["RBP2"].value, e.target["RBF2"].value, e.target["LBK2"].value, e.target["IBL2"].value, e.target["PRC2"].value, e.target["TAK2"].value, e.target["POW2"].value, e.target["BSH2"].value, e.target["FMV2"].value, e.target["PMV2"].value, e.target["PUR2"].value, e.target["MCV2"].value, e.target["ZCV2"].value, e.target["PRS2"].value, e.target["RET2"].value, e.target["KPW2"].value, e.target["KAC2"].value, e.target["STA2"].value, e.target["TGH2"].value, e.target["INJ2"].value, e.target["PER2"].value);

                } else {
                    player2 = new AdvancedInfo(e.target["filename".value], e.target["version"].value, e.target["headless2"].value, e.target["searchNum2"].value, e.target["fname2"].value, e.target["lname2"].value, e.target["Age2"].value, e.target["Feet2"].value, e.target["Inches2"].value, e.target["Weight2"].value, e.target["playerType2"].value, e.target["development2"].value, e.target["Overall2"].value, e.target["MOR2"].value, e.target["SPD2"].value, e.target["ACC2"].value, e.target["AGI2"].value, e.target["STR2"].value, e.target["AWR2"].value, e.target["CAR2"].value, e.target["BCV2"].value, e.target["BTK2"].value, e.target["TRK2"].value, e.target["SFA2"].value, e.target["ELU2"].value, e.target["SPM2"].value, e.target["JKM2"].value, e.target["CTH2"].value, e.target["CIT2"].value, e.target["SPC2"].value, e.target["SRR2"].value, e.target["MRR2"].value, e.target["DRR2"].value, e.target["RLS2"].value, e.target["JMP2"].value, e.target["THP2"].value, e.target["SAC2"].value, e.target["MAC2"].value, e.target["DAC2"].value, e.target["RUN2"].value, e.target["TUP2"].value, e.target["BSK2"].value, e.target["PAC2"].value, e.target["PBK2"].value, e.target["PBP2"].value, e.target["PBF2"].value, e.target["RBK2"].value, e.target["RBP2"].value, e.target["RBF2"].value, e.target["LBK2"].value, e.target["IBL2"].value, e.target["PRC2"].value, e.target["TAK2"].value, e.target["POW2"].value, e.target["BSH2"].value, e.target["FMV2"].value, e.target["PMV2"].value, e.target["PUR2"].value, e.target["MCV2"].value, e.target["ZCV2"].value, e.target["PRS2"].value, e.target["RET2"].value, e.target["KPW2"].value, e.target["KAC2"].value, e.target["STA2"].value, e.target["TGH2"].value, e.target["INJ2"].value, e.target["PER2"].value);
                }
            }


        }
        if (numProfiles > 2) {
            if (!advance3) {
                if (attributes3 == 0) {
                    player3 = new DefaultInfo(e.target["filename".value], e.target["version"].value, "", e.target["searchNum3"].value, "", "", "", "", "", "", e.target["playerType3"].value, e.target["development3"].value, e.target["Overall3"].value)
                } else {
                    player3 = new DefaultInfo(e.target["filename".value], e.target["version"].value, e.target["headless3"].value, e.target["searchNum3"].value, e.target["fname3"].value, e.target["lname3"].value, e.target["Age3"].value, e.target["Feet3"].value, e.target["Inches3"].value, e.target["Weight3"].value, e.target["playerType3"].value, e.target["development3"].value, e.target["Overall3"].value)
                }
            } else {
                if (attributes3 == 0) {
                    player3 = new AdvancedInfo(e.target["filename".value], e.target["version"].value, "", e.target["searchNum3"].value, "", "", "", "", "", "", e.target["playerType3"].value, e.target["development3"].value, e.target["Overall3"].value, e.target["MOR3"].value, e.target["SPD3"].value, e.target["ACC3"].value, e.target["AGI3"].value, e.target["STR3"].value, e.target["AWR3"].value, e.target["CAR3"].value, e.target["BCV3"].value, e.target["BTK3"].value, e.target["TRK3"].value, e.target["SFA3"].value, e.target["ELU3"].value, e.target["SPM3"].value, e.target["JKM3"].value, e.target["CTH3"].value, e.target["CIT3"].value, e.target["SPC3"].value, e.target["SRR3"].value, e.target["MRR3"].value, e.target["DRR3"].value, e.target["RLS3"].value, e.target["JMP3"].value, e.target["THP3"].value, e.target["SAC3"].value, e.target["MAC3"].value, e.target["DAC3"].value, e.target["RUN3"].value, e.target["TUP3"].value, e.target["BSK3"].value, e.target["PAC3"].value, e.target["PBK3"].value, e.target["PBP3"].value, e.target["PBF3"].value, e.target["RBK3"].value, e.target["RBP3"].value, e.target["RBF3"].value, e.target["LBK3"].value, e.target["IBL3"].value, e.target["PRC3"].value, e.target["TAK3"].value, e.target["POW3"].value, e.target["BSH3"].value, e.target["FMV3"].value, e.target["PMV3"].value, e.target["PUR3"].value, e.target["MCV3"].value, e.target["ZCV3"].value, e.target["PRS3"].value, e.target["RET3"].value, e.target["KPW3"].value, e.target["KAC3"].value, e.target["STA3"].value, e.target["TGH3"].value, e.target["INJ3"].value, e.target["PER3"].value);

                } else {
                    player3 = new AdvancedInfo(e.target["filename".value], e.target["version"].value, e.target["headless3"].value, e.target["searchNum3"].value, e.target["fname3"].value, e.target["lname3"].value, e.target["Age3"].value, e.target["Feet3"].value, e.target["Inches3"].value, e.target["Weight3"].value, e.target["playerType3"].value, e.target["development3"].value, e.target["Overall3"].value, e.target["MOR3"].value, e.target["SPD3"].value, e.target["ACC3"].value, e.target["AGI3"].value, e.target["STR3"].value, e.target["AWR3"].value, e.target["CAR3"].value, e.target["BCV3"].value, e.target["BTK3"].value, e.target["TRK3"].value, e.target["SFA3"].value, e.target["ELU3"].value, e.target["SPM3"].value, e.target["JKM3"].value, e.target["CTH3"].value, e.target["CIT3"].value, e.target["SPC3"].value, e.target["SRR3"].value, e.target["MRR3"].value, e.target["DRR3"].value, e.target["RLS3"].value, e.target["JMP3"].value, e.target["THP3"].value, e.target["SAC3"].value, e.target["MAC3"].value, e.target["DAC3"].value, e.target["RUN3"].value, e.target["TUP3"].value, e.target["BSK3"].value, e.target["PAC3"].value, e.target["PBK3"].value, e.target["PBP3"].value, e.target["PBF3"].value, e.target["RBK3"].value, e.target["RBP3"].value, e.target["RBF3"].value, e.target["LBK3"].value, e.target["IBL3"].value, e.target["PRC3"].value, e.target["TAK3"].value, e.target["POW3"].value, e.target["BSH3"].value, e.target["FMV3"].value, e.target["PMV3"].value, e.target["PUR3"].value, e.target["MCV3"].value, e.target["ZCV3"].value, e.target["PRS3"].value, e.target["RET3"].value, e.target["KPW3"].value, e.target["KAC3"].value, e.target["STA3"].value, e.target["TGH3"].value, e.target["INJ3"].value, e.target["PER3"].value);

                }
            }
        }
        if (numProfiles > 3) {
            if (!advance4) {
                if (attributes4 == 0) {
                    player4 = new DefaultInfo(e.target["filename".value], e.target["version"].value, "", e.target["searchNum4"].value, "", "", "", "", "", "", e.target["playerType4"].value, e.target["development4"].value, e.target["Overall4"].value)
                } else {
                    player4 = new DefaultInfo(e.target["filename".value], e.target["version"].value, e.target["headless4"].value, e.target["searchNum4"].value, e.target["fname4"].value, e.target["lname4"].value, e.target["Age4"].value, e.target["Feet4"].value, e.target["Inches4"].value, e.target["Weight4"].value, e.target["playerType4"].value, e.target["development4"].value, e.target["Overall4"].value)
                }
            } else {
                if (attributes4 == 0) {
                    player4 = new AdvancedInfo(e.target["filename".value], e.target["version"].value, "", e.target["searchNum4"].value, "", "", "", "", "", "", e.target["playerType4"].value, e.target["development4"].value, e.target["Overall4"].value, e.target["MOR4"].value, e.target["SPD4"].value, e.target["ACC4"].value, e.target["AGI4"].value, e.target["STR4"].value, e.target["AWR4"].value, e.target["CAR4"].value, e.target["BCV4"].value, e.target["BTK4"].value, e.target["TRK4"].value, e.target["SFA4"].value, e.target["ELU4"].value, e.target["SPM4"].value, e.target["JKM4"].value, e.target["CTH4"].value, e.target["CIT4"].value, e.target["SPC4"].value, e.target["SRR4"].value, e.target["MRR4"].value, e.target["DRR4"].value, e.target["RLS4"].value, e.target["JMP4"].value, e.target["THP4"].value, e.target["SAC4"].value, e.target["MAC4"].value, e.target["DAC4"].value, e.target["RUN4"].value, e.target["TUP4"].value, e.target["BSK4"].value, e.target["PAC4"].value, e.target["PBK4"].value, e.target["PBP4"].value, e.target["PBF4"].value, e.target["RBK4"].value, e.target["RBP4"].value, e.target["RBF4"].value, e.target["LBK4"].value, e.target["IBL4"].value, e.target["PRC4"].value, e.target["TAK4"].value, e.target["POW4"].value, e.target["BSH4"].value, e.target["FMV4"].value, e.target["PMV4"].value, e.target["PUR4"].value, e.target["MCV4"].value, e.target["ZCV4"].value, e.target["PRS4"].value, e.target["RET4"].value, e.target["KPW4"].value, e.target["KAC4"].value, e.target["STA4"].value, e.target["TGH4"].value, e.target["INJ4"].value, e.target["PER4"].value);

                } else {
                    player4 = new AdvancedInfo(e.target["filename".value], e.target["version"].value, e.target["headless4"].value, e.target["searchNum4"].value, e.target["fname4"].value, e.target["lname4"].value, e.target["Age4"].value, e.target["Feet4"].value, e.target["Inches4"].value, e.target["Weight4"].value, e.target["playerType4"].value, e.target["development4"].value, e.target["Overall4"].value, e.target["MOR4"].value, e.target["SPD4"].value, e.target["ACC4"].value, e.target["AGI4"].value, e.target["STR4"].value, e.target["AWR4"].value, e.target["CAR4"].value, e.target["BCV4"].value, e.target["BTK4"].value, e.target["TRK4"].value, e.target["SFA4"].value, e.target["ELU4"].value, e.target["SPM4"].value, e.target["JKM4"].value, e.target["CTH4"].value, e.target["CIT4"].value, e.target["SPC4"].value, e.target["SRR4"].value, e.target["MRR4"].value, e.target["DRR4"].value, e.target["RLS4"].value, e.target["JMP4"].value, e.target["THP4"].value, e.target["SAC4"].value, e.target["MAC4"].value, e.target["DAC4"].value, e.target["RUN4"].value, e.target["TUP4"].value, e.target["BSK4"].value, e.target["PAC4"].value, e.target["PBK4"].value, e.target["PBP4"].value, e.target["PBF4"].value, e.target["RBK4"].value, e.target["RBP4"].value, e.target["RBF4"].value, e.target["LBK4"].value, e.target["IBL4"].value, e.target["PRC4"].value, e.target["TAK4"].value, e.target["POW4"].value, e.target["BSH4"].value, e.target["FMV4"].value, e.target["PMV4"].value, e.target["PUR4"].value, e.target["MCV4"].value, e.target["ZCV4"].value, e.target["PRS4"].value, e.target["RET4"].value, e.target["KPW4"].value, e.target["KAC4"].value, e.target["STA4"].value, e.target["TGH4"].value, e.target["INJ4"].value, e.target["PER4"].value);
                }
            }
        }
        if (numProfiles > 4) {

            if (!advance5) {
                if (attributes5 == 0) {
                    player5 = new DefaultInfo(e.target["filename".value], e.target["version"].value, "", e.target["searchNum5"].value, "", "", "", "", "", "", e.target["playerType5"].value, e.target["development5"].value, e.target["Overall5"].value)
                } else {
                    player5 = new DefaultInfo(e.target["filename".value], e.target["version"].value, e.target["headless5"].value, e.target["searchNum5"].value, e.target["fname5"].value, e.target["lname5"].value, e.target["Age5"].value, e.target["Feet5"].value, e.target["Inches5"].value, e.target["Weight5"].value, e.target["playerType5"].value, e.target["development5"].value, e.target["Overall5"].value)
                }
            } else {
                if (attributes5 == 0) {
                    player5 = new AdvancedInfo(e.target["filename".value], e.target["version"].value, "", e.target["searchNum5"].value, "", "", "", "", "", "", e.target["playerType5"].value, e.target["development5"].value, e.target["Overall5"].value, e.target["MOR5"].value, e.target["SPD5"].value, e.target["ACC5"].value, e.target["AGI5"].value, e.target["STR5"].value, e.target["AWR5"].value, e.target["CAR5"].value, e.target["BCV5"].value, e.target["BTK5"].value, e.target["TRK5"].value, e.target["SFA5"].value, e.target["ELU5"].value, e.target["SPM5"].value, e.target["JKM5"].value, e.target["CTH5"].value, e.target["CIT5"].value, e.target["SPC5"].value, e.target["SRR5"].value, e.target["MRR5"].value, e.target["DRR5"].value, e.target["RLS5"].value, e.target["JMP5"].value, e.target["THP5"].value, e.target["SAC5"].value, e.target["MAC5"].value, e.target["DAC5"].value, e.target["RUN5"].value, e.target["TUP5"].value, e.target["BSK5"].value, e.target["PAC5"].value, e.target["PBK5"].value, e.target["PBP5"].value, e.target["PBF5"].value, e.target["RBK5"].value, e.target["RBP5"].value, e.target["RBF5"].value, e.target["LBK5"].value, e.target["IBL5"].value, e.target["PRC5"].value, e.target["TAK5"].value, e.target["POW5"].value, e.target["BSH5"].value, e.target["FMV5"].value, e.target["PMV5"].value, e.target["PUR5"].value, e.target["MCV5"].value, e.target["ZCV5"].value, e.target["PRS5"].value, e.target["RET5"].value, e.target["KPW5"].value, e.target["KAC5"].value, e.target["STA5"].value, e.target["TGH5"].value, e.target["INJ5"].value, e.target["PER5"].value);

                } else {
                    player5 = new AdvancedInfo(e.target["filename".value], e.target["version"].value, e.target["headless5"].value, e.target["searchNum5"].value, e.target["fname5"].value, e.target["lname5"].value, e.target["Age5"].value, e.target["Feet5"].value, e.target["Inches5"].value, e.target["Weight5"].value, e.target["playerType5"].value, e.target["development5"].value, e.target["Overall5"].value, e.target["MOR5"].value, e.target["SPD5"].value, e.target["ACC5"].value, e.target["AGI5"].value, e.target["STR5"].value, e.target["AWR5"].value, e.target["CAR5"].value, e.target["BCV5"].value, e.target["BTK5"].value, e.target["TRK5"].value, e.target["SFA5"].value, e.target["ELU5"].value, e.target["SPM5"].value, e.target["JKM5"].value, e.target["CTH5"].value, e.target["CIT5"].value, e.target["SPC5"].value, e.target["SRR5"].value, e.target["MRR5"].value, e.target["DRR5"].value, e.target["RLS5"].value, e.target["JMP5"].value, e.target["THP5"].value, e.target["SAC5"].value, e.target["MAC5"].value, e.target["DAC5"].value, e.target["RUN5"].value, e.target["TUP5"].value, e.target["BSK5"].value, e.target["PAC5"].value, e.target["PBK5"].value, e.target["PBP5"].value, e.target["PBF5"].value, e.target["RBK5"].value, e.target["RBP5"].value, e.target["RBF5"].value, e.target["LBK5"].value, e.target["IBL5"].value, e.target["PRC5"].value, e.target["TAK5"].value, e.target["POW5"].value, e.target["BSH5"].value, e.target["FMV5"].value, e.target["PMV5"].value, e.target["PUR5"].value, e.target["MCV5"].value, e.target["ZCV5"].value, e.target["PRS5"].value, e.target["RET5"].value, e.target["KPW5"].value, e.target["KAC5"].value, e.target["STA5"].value, e.target["TGH5"].value, e.target["INJ5"].value, e.target["PER5"].value)                }
            }
        }
        readFile(player1,player2,player3,player4,player5);

    }
    return (
        <Container className = "myContainer">
            <Row>
                <Col>
                    <div className="header">
                        <center>
                            <h1>
                                <b>Cooper's Madden Draft Class Generator V1.5.1</b>
                            </h1>
                        </center>
                    </div>
                    <center> Check for Updates on Website: <br></br>https://coopermyers00.wixsite.com/my-site </center>
                    <center><p><b> Leave stats blank to use roster defaults </b></p></center>
                    <form onSubmit={handleClick} className="testName">
                        <div>
                            <label for="filename" >File name:</label>
                            <input type="text" id="filename" name="filename" maxLength="10" required pattern="[A-Za-z0-9]+" title ="File name must be only letters and numbers"/><br></br>
                        </div>
                        <div>
                            Madden 20 or Madden21?<br></br>
                        <input type="radio" id="madden20" name="version" value="20" />
                            <label for="madden20">Madden20</label>
                            <input type="radio" id="madden21" name="version" value="" />
                            <label for="madden21">Madden21</label>
                        </div>
                        <NumPlayers />
                        <div className="submitButton">
                           <button htmlType="submit" className = "actualButton">Create Draft File On Desktop</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}