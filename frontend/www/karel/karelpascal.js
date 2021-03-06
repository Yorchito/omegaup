/* parser generated by jison 0.4.2 */
var karelpascal = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"BEGINPROG":4,"def_list":5,"BEGINEXEC":6,"expr_list":7,"ENDEXEC":8,"ENDPROG":9,"EOF":10,"def":11,";":12,"DEF":13,"line":14,"var":15,"AS":16,"expr":17,"(":18,")":19,"FORWARD":20,"LEFT":21,"PICKBUZZER":22,"LEAVEBUZZER":23,"HALT":24,"call":25,"cond":26,"loop":27,"repeat":28,"BEGIN":29,"END":30,"integer":31,"IF":32,"term":33,"THEN":34,"ELSE":35,"WHILE":36,"DO":37,"REPEAT":38,"TIMES":39,"OR":40,"and_term":41,"AND":42,"not_term":43,"NOT":44,"clause":45,"IFZ":46,"bool_fun":47,"IFNFWALL":48,"IFFWALL":49,"IFNLWALL":50,"IFLWALL":51,"IFNRWALL":52,"IFRWALL":53,"IFWBUZZER":54,"IFNWBUZZER":55,"IFBBUZZER":56,"IFNBBUZZER":57,"IFW":58,"IFN":59,"IFS":60,"IFE":61,"IFNW":62,"IFNN":63,"IFNS":64,"IFNE":65,"NUM":66,"INC":67,"DEC":68,"VAR":69,"$accept":0,"$end":1},
terminals_: {2:"error",4:"BEGINPROG",6:"BEGINEXEC",8:"ENDEXEC",9:"ENDPROG",10:"EOF",12:";",13:"DEF",16:"AS",18:"(",19:")",20:"FORWARD",21:"LEFT",22:"PICKBUZZER",23:"LEAVEBUZZER",24:"HALT",29:"BEGIN",30:"END",32:"IF",34:"THEN",35:"ELSE",36:"WHILE",37:"DO",38:"REPEAT",39:"TIMES",40:"OR",42:"AND",44:"NOT",46:"IFZ",48:"IFNFWALL",49:"IFFWALL",50:"IFNLWALL",51:"IFLWALL",52:"IFNRWALL",53:"IFRWALL",54:"IFWBUZZER",55:"IFNWBUZZER",56:"IFBBUZZER",57:"IFNBBUZZER",58:"IFW",59:"IFN",60:"IFS",61:"IFE",62:"IFNW",63:"IFNN",64:"IFNS",65:"IFNE",66:"NUM",67:"INC",68:"DEC",69:"VAR"},
productions_: [0,[3,7],[3,6],[5,3],[5,2],[11,5],[11,8],[7,3],[7,2],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,3],[25,1],[25,4],[26,5],[26,7],[27,5],[28,5],[33,3],[33,1],[41,3],[41,1],[43,2],[43,1],[45,4],[45,1],[45,3],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[31,1],[31,1],[31,4],[31,4],[15,1],[14,0]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    	var program = $$[$0-3].concat([['LINE', yylineno], ['HALT']]);
    	var functions = {};
    	
    	for (var i = 0; i < $$[$0-5].length; i++) {
    		if (functions[$$[$0-5][i][0]]) {
    			throw "Function redefinition: " + $$[$0-5][i][0];
    		}
    		
    		functions[$$[$0-5][i][0]] = program.length;
    		program = program.concat($$[$0-5][i][1]);
    	}
    	
    	for (var i = 0; i < program.length; i++) {
    		if (program[i][0] == 'CALL') {
    			if (!functions[program[i][1]]) {
    				throw "Unknown function: " + program[i][1];
    			}
    			
    			program[i].push(program[i][1]);
    			program[i][1] = functions[program[i][2]];
    		} else if (program[i][0] == 'PARAM' && program[i][1] != 0) {
			throw "Unknown variable: " + program[i][1];
    		}
    	}
    	
    	return program;
    
break;
case 2: return $$[$0-3].concat([['HALT']]); 
break;
case 3: this.$ = $$[$0-2].concat($$[$0-1]); 
break;
case 4: this.$ = $$[$0-1]; 
break;
case 5: this.$ = [[$$[$0-2], $$[$0-3].concat($$[$0]).concat([['RET']])]]; 
break;
case 6:
    	var result = $$[$0-6].concat($$[$0]).concat([['RET']]);
    	for (var i = 0; i < result.length; i++) {
    		if (result[i][0] == 'PARAM') {
    			if (result[i][1] == $$[$0-4]) {
    				result[i][1] = 0;
    			} else {
				throw "Unknown variable: " + $$[$0-4];
    			}
    		}
    	}
    	this.$ = [[$$[$0-5], result]];
    
break;
case 7: this.$ = $$[$0-2].concat($$[$0-1]); 
break;
case 8: this.$ = $$[$0-1]; 
break;
case 9: this.$ = [['LINE', yylineno], ['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT'], ['EZ', 'WALL'], ['FORWARD']]; 
break;
case 10: this.$ = [['LINE', yylineno], ['LEFT']]; 
break;
case 11: this.$ = [['LINE', yylineno], ['WORLDBUZZERS'], ['EZ', 'WORLDUNDERFLOW'], ['PICKBUZZER']]; 
break;
case 12: this.$ = [['LINE', yylineno], ['BAGBUZZERS'], ['EZ', 'BAGUNDERFLOW'], ['LEAVEBUZZER']]; 
break;
case 13: this.$ = [['LINE', yylineno], ['HALT']]; 
break;
case 14: this.$ = $$[$0]; 
break;
case 15: this.$ = $$[$0]; 
break;
case 16: this.$ = $$[$0]; 
break;
case 17: this.$ = $$[$0]; 
break;
case 18: this.$ = $$[$0-1]; 
break;
case 19: this.$ = [['LINE', yylineno], ['LOAD', 0], ['CALL', $$[$0]], ['LINE', yylineno]]; 
break;
case 20: this.$ = [['LINE', yylineno]].concat($$[$0-1]).concat([['CALL', $$[$0-3]], ['LINE', yylineno]]); 
break;
case 21: this.$ = $$[$0-2].concat($$[$0-3]).concat([['JZ', $$[$0].length]]).concat($$[$0]); 
break;
case 22: this.$ = $$[$0-4].concat($$[$0-5]).concat([['JZ', 1 + $$[$0-2].length]]).concat($$[$0-2]).concat([['JMP', $$[$0].length]]).concat($$[$0]); 
break;
case 23: this.$ = $$[$0-2].concat($$[$0-3]).concat([['JZ', 1 + $$[$0].length]]).concat($$[$0]).concat([['JMP', -1 -($$[$0-2].length + 1 + $$[$0].length + 1)]]); 
break;
case 24: this.$ = $$[$0-2].concat($$[$0-3]).concat([['DUP'], ['JLEZ', $$[$0].length + 2]]).concat($$[$0]).concat([['DEC'], ['JMP', -1 -($$[$0].length + 4)], ['POP']]); 
break;
case 25: this.$ = $$[$0-2].concat($$[$0]).concat([['OR']]); 
break;
case 26: this.$ = $$[$0]; 
break;
case 27: this.$ = $$[$0-2].concat($$[$0]).concat([['AND']]); 
break;
case 28: this.$ = $$[$0]; 
break;
case 29: this.$ = $$[$0].concat([['NOT']]); 
break;
case 30: this.$ = $$[$0]; 
break;
case 31: this.$ = $$[$0-1].concat([['NOT']]); 
break;
case 32: this.$ = $$[$0]; 
break;
case 33: this.$ = $$[$0-1]; 
break;
case 34: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 35: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND']]; 
break;
case 36: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 37: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND']]; 
break;
case 38: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 39: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND']]; 
break;
case 40: this.$ = [['WORLDBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 41: this.$ = [['WORLDBUZZERS'], ['NOT']]; 
break;
case 42: this.$ = [['BAGBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 43: this.$ = [['BAGBUFFERS'], ['NOT']]; 
break;
case 44: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ']]; 
break;
case 45: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ']]; 
break;
case 46: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ']]; 
break;
case 47: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ']]; 
break;
case 48: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 49: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ'], ['NOT']]; 
break;
case 50: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ'], ['NOT']]; 
break;
case 51: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ'], ['NOT']]; 
break;
case 52: this.$ = [['PARAM', $$[$0]]]; 
break;
case 53: this.$ = [['LOAD', parseInt(yytext)]]; 
break;
case 54: this.$ = $$[$0-1].concat([['INC']]); 
break;
case 55: this.$ = $$[$0-1].concat([['DEC']]); 
break;
case 56: this.$ = yytext; 
break;
case 57: this.$ = [['LINE', yylineno]]; 
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:3,6:[1,4],11:5,13:[1,6]},{6:[1,7],11:8,13:[1,6]},{7:9,15:21,17:10,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{12:[1,26]},{14:27,69:[2,57]},{7:28,15:21,17:10,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{12:[1,29]},{8:[1,30],15:21,17:31,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{12:[1,32]},{12:[2,9],35:[2,9]},{12:[2,10],35:[2,10]},{12:[2,11],35:[2,11]},{12:[2,12],35:[2,12]},{12:[2,13],35:[2,13]},{12:[2,14],35:[2,14]},{12:[2,15],35:[2,15]},{12:[2,16],35:[2,16]},{12:[2,17],35:[2,17]},{7:33,15:21,17:10,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{12:[2,19],18:[1,34],35:[2,19]},{14:35,18:[2,57],44:[2,57],46:[2,57],48:[2,57],49:[2,57],50:[2,57],51:[2,57],52:[2,57],53:[2,57],54:[2,57],55:[2,57],56:[2,57],57:[2,57],58:[2,57],59:[2,57],60:[2,57],61:[2,57],62:[2,57],63:[2,57],64:[2,57],65:[2,57]},{14:36,18:[2,57],44:[2,57],46:[2,57],48:[2,57],49:[2,57],50:[2,57],51:[2,57],52:[2,57],53:[2,57],54:[2,57],55:[2,57],56:[2,57],57:[2,57],58:[2,57],59:[2,57],60:[2,57],61:[2,57],62:[2,57],63:[2,57],64:[2,57],65:[2,57]},{14:37,66:[2,57],67:[2,57],68:[2,57],69:[2,57]},{12:[2,56],16:[2,56],18:[2,56],19:[2,56],35:[2,56],39:[2,56]},{6:[2,4],13:[2,4]},{15:38,69:[1,25]},{8:[1,39],15:21,17:31,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{6:[2,3],13:[2,3]},{9:[1,40]},{12:[1,41]},{8:[2,8],20:[2,8],21:[2,8],22:[2,8],23:[2,8],24:[2,8],29:[2,8],30:[2,8],32:[2,8],36:[2,8],38:[2,8],69:[2,8]},{15:21,17:31,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],30:[1,42],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{15:44,31:43,66:[1,45],67:[1,46],68:[1,47],69:[1,25]},{18:[1,55],33:48,41:49,43:50,44:[1,51],45:52,46:[1,53],47:54,48:[1,56],49:[1,57],50:[1,58],51:[1,59],52:[1,60],53:[1,61],54:[1,62],55:[1,63],56:[1,64],57:[1,65],58:[1,66],59:[1,67],60:[1,68],61:[1,69],62:[1,70],63:[1,71],64:[1,72],65:[1,73]},{18:[1,55],33:74,41:49,43:50,44:[1,51],45:52,46:[1,53],47:54,48:[1,56],49:[1,57],50:[1,58],51:[1,59],52:[1,60],53:[1,61],54:[1,62],55:[1,63],56:[1,64],57:[1,65],58:[1,66],59:[1,67],60:[1,68],61:[1,69],62:[1,70],63:[1,71],64:[1,72],65:[1,73]},{15:44,31:75,66:[1,45],67:[1,46],68:[1,47],69:[1,25]},{16:[1,76],18:[1,77]},{9:[1,78]},{10:[1,79]},{8:[2,7],20:[2,7],21:[2,7],22:[2,7],23:[2,7],24:[2,7],29:[2,7],30:[2,7],32:[2,7],36:[2,7],38:[2,7],69:[2,7]},{12:[2,18],35:[2,18]},{19:[1,80]},{19:[2,52],39:[2,52]},{19:[2,53],39:[2,53]},{18:[1,81]},{18:[1,82]},{34:[1,83],40:[1,84]},{19:[2,26],34:[2,26],37:[2,26],40:[2,26],42:[1,85]},{19:[2,28],34:[2,28],37:[2,28],40:[2,28],42:[2,28]},{18:[1,55],45:86,46:[1,53],47:54,48:[1,56],49:[1,57],50:[1,58],51:[1,59],52:[1,60],53:[1,61],54:[1,62],55:[1,63],56:[1,64],57:[1,65],58:[1,66],59:[1,67],60:[1,68],61:[1,69],62:[1,70],63:[1,71],64:[1,72],65:[1,73]},{19:[2,30],34:[2,30],37:[2,30],40:[2,30],42:[2,30]},{18:[1,87]},{19:[2,32],34:[2,32],37:[2,32],40:[2,32],42:[2,32]},{18:[1,55],33:88,41:49,43:50,44:[1,51],45:52,46:[1,53],47:54,48:[1,56],49:[1,57],50:[1,58],51:[1,59],52:[1,60],53:[1,61],54:[1,62],55:[1,63],56:[1,64],57:[1,65],58:[1,66],59:[1,67],60:[1,68],61:[1,69],62:[1,70],63:[1,71],64:[1,72],65:[1,73]},{19:[2,34],34:[2,34],37:[2,34],40:[2,34],42:[2,34]},{19:[2,35],34:[2,35],37:[2,35],40:[2,35],42:[2,35]},{19:[2,36],34:[2,36],37:[2,36],40:[2,36],42:[2,36]},{19:[2,37],34:[2,37],37:[2,37],40:[2,37],42:[2,37]},{19:[2,38],34:[2,38],37:[2,38],40:[2,38],42:[2,38]},{19:[2,39],34:[2,39],37:[2,39],40:[2,39],42:[2,39]},{19:[2,40],34:[2,40],37:[2,40],40:[2,40],42:[2,40]},{19:[2,41],34:[2,41],37:[2,41],40:[2,41],42:[2,41]},{19:[2,42],34:[2,42],37:[2,42],40:[2,42],42:[2,42]},{19:[2,43],34:[2,43],37:[2,43],40:[2,43],42:[2,43]},{19:[2,44],34:[2,44],37:[2,44],40:[2,44],42:[2,44]},{19:[2,45],34:[2,45],37:[2,45],40:[2,45],42:[2,45]},{19:[2,46],34:[2,46],37:[2,46],40:[2,46],42:[2,46]},{19:[2,47],34:[2,47],37:[2,47],40:[2,47],42:[2,47]},{19:[2,48],34:[2,48],37:[2,48],40:[2,48],42:[2,48]},{19:[2,49],34:[2,49],37:[2,49],40:[2,49],42:[2,49]},{19:[2,50],34:[2,50],37:[2,50],40:[2,50],42:[2,50]},{19:[2,51],34:[2,51],37:[2,51],40:[2,51],42:[2,51]},{37:[1,89],40:[1,84]},{39:[1,90]},{15:21,17:91,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{15:92,69:[1,25]},{10:[1,93]},{1:[2,2]},{12:[2,20],35:[2,20]},{15:44,31:94,66:[1,45],67:[1,46],68:[1,47],69:[1,25]},{15:44,31:95,66:[1,45],67:[1,46],68:[1,47],69:[1,25]},{15:21,17:96,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{18:[1,55],41:97,43:50,44:[1,51],45:52,46:[1,53],47:54,48:[1,56],49:[1,57],50:[1,58],51:[1,59],52:[1,60],53:[1,61],54:[1,62],55:[1,63],56:[1,64],57:[1,65],58:[1,66],59:[1,67],60:[1,68],61:[1,69],62:[1,70],63:[1,71],64:[1,72],65:[1,73]},{18:[1,55],43:98,44:[1,51],45:52,46:[1,53],47:54,48:[1,56],49:[1,57],50:[1,58],51:[1,59],52:[1,60],53:[1,61],54:[1,62],55:[1,63],56:[1,64],57:[1,65],58:[1,66],59:[1,67],60:[1,68],61:[1,69],62:[1,70],63:[1,71],64:[1,72],65:[1,73]},{19:[2,29],34:[2,29],37:[2,29],40:[2,29],42:[2,29]},{15:44,31:99,66:[1,45],67:[1,46],68:[1,47],69:[1,25]},{19:[1,100],40:[1,84]},{15:21,17:101,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{15:21,17:102,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{12:[2,5]},{19:[1,103]},{1:[2,1]},{19:[1,104]},{19:[1,105]},{12:[2,21],35:[1,106]},{19:[2,25],34:[2,25],37:[2,25],40:[2,25],42:[1,85]},{19:[2,27],34:[2,27],37:[2,27],40:[2,27],42:[2,27]},{19:[1,107]},{19:[2,33],34:[2,33],37:[2,33],40:[2,33],42:[2,33]},{12:[2,23],35:[2,23]},{12:[2,24],35:[2,24]},{16:[1,108]},{19:[2,54],39:[2,54]},{19:[2,55],39:[2,55]},{15:21,17:109,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{19:[2,31],34:[2,31],37:[2,31],40:[2,31],42:[2,31]},{15:21,17:110,20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:16,26:17,27:18,28:19,29:[1,20],32:[1,22],36:[1,23],38:[1,24],69:[1,25]},{12:[2,22],35:[2,22]},{12:[2,6]}],
defaultActions: {79:[2,2],91:[2,5],93:[2,1],110:[2,6]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* ignore */
break;
case 1:/* ignore */
break;
case 2:/* ignore */
break;
case 3: return 4; 
break;
case 4: return 6; 
break;
case 5: return 8; 
break;
case 6: return 9; 
break;
case 7: return 13; 
break;
case 8: return 16; 
break;
case 9: return 24; 
break;
case 10: return 21; 
break;
case 11: return 20; 
break;
case 12: return 22; 
break;
case 13: return 23; 
break;
case 14: return 29; 
break;
case 15: return 30; 
break;
case 16: return 34; 
break;
case 17: return 36; 
break;
case 18: return 37; 
break;
case 19: return 38; 
break;
case 20: return 39; 
break;
case 21: return 68; 
break;
case 22: return 67; 
break;
case 23: return 46; 
break;
case 24: return 48; 
break;
case 25: return 49; 
break;
case 26: return 50; 
break;
case 27: return 51; 
break;
case 28: return 52; 
break;
case 29: return 53; 
break;
case 30: return 54; 
break;
case 31: return 55; 
break;
case 32: return 56; 
break;
case 33: return 57; 
break;
case 34: return 59; 
break;
case 35: return 60; 
break;
case 36: return 61; 
break;
case 37: return 58; 
break;
case 38: return 63; 
break;
case 39: return 64; 
break;
case 40: return 65; 
break;
case 41: return 62; 
break;
case 42: return 35; 
break;
case 43: return 32; 
break;
case 44: return 44; 
break;
case 45: return 40; 
break;
case 46: return 42; 
break;
case 47: return 18; 
break;
case 48: return 19; 
break;
case 49: return 12; 
break;
case 50: return 66; 
break;
case 51: return 69; 
break;
case 52: return 10; 
break;
}
},
rules: [/^(?:\s+)/,/^(?:\{[^}]*\})/,/^(?:\(\*([^*]|\*[^)])*\*\))/,/^(?:iniciar-programa\b)/,/^(?:inicia-ejecucion\b)/,/^(?:termina-ejecucion\b)/,/^(?:finalizar-programa\b)/,/^(?:define-nueva-instruccion\b)/,/^(?:como\b)/,/^(?:apagate\b)/,/^(?:gira-izquierda\b)/,/^(?:avanza\b)/,/^(?:coge-zumbador\b)/,/^(?:deja-zumbador\b)/,/^(?:inicio\b)/,/^(?:fin\b)/,/^(?:entonces\b)/,/^(?:mientras\b)/,/^(?:hacer\b)/,/^(?:repetir\b)/,/^(?:veces\b)/,/^(?:precede\b)/,/^(?:sucede\b)/,/^(?:si-es-cero\b)/,/^(?:frente-libre\b)/,/^(?:frente-bloqueado\b)/,/^(?:izquierda-libre\b)/,/^(?:izquierda-bloqueada\b)/,/^(?:derecha-libre\b)/,/^(?:derecha-bloqueada\b)/,/^(?:junto-a-zumbador\b)/,/^(?:no-junto-a-zumbador\b)/,/^(?:algun-zumbador-en-la-mochila\b)/,/^(?:ningun-zumbador-en-la-mochila\b)/,/^(?:orientado-al-norte\b)/,/^(?:orientado-al-sur\b)/,/^(?:orientado-al-este\b)/,/^(?:orientado-al-oeste\b)/,/^(?:no-orientado-al-norte\b)/,/^(?:no-orientado-al-sur\b)/,/^(?:no-orientado-al-este\b)/,/^(?:no-orientado-al-oeste\b)/,/^(?:sino\b)/,/^(?:si\b)/,/^(?:no\b)/,/^(?:o\b)/,/^(?:y\b)/,/^(?:\()/,/^(?:\))/,/^(?:;)/,/^(?:[0-9]+)/,/^(?:[a-zA-Z][a-zA-Z0-9-]*)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = karelpascal;
exports.Parser = karelpascal.Parser;
exports.parse = function () { return karelpascal.parse.apply(karelpascal, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}