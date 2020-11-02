// path는 노드에서 기본적으로 있는 패키지. 절대경로를 나타내어준다 users/nicolas/documents/wetube/asstes..

//웹팩은 모던 자바스크립트이기 때문에 import 사용이 불가! -> require 사용
const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;

//entry : 파일이 어디서 왔는가
//__dirname : 현재의 프로젝트 디렉토리 이름. 어디서든 접근가능한 노트의 전역변수
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
//output : 그것을 어디에 넣을 것인가
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    devtool:"cheap-module-source-map",     //브라우저창 콘솔에러 Uncaught EvalError 해결을 위한 코드.
    entry : ["@babel/polyfill",ENTRY_FILE],
    mode:MODE,
    module:{
        rules:[
            {
                test:/\.(js)$/,
                use:[
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(scss)$/,              //조건 : scss을 만나게 되면, 아래와 같은 플러그인을 사용한다
                use:ExtractCSS.extract([     //내부에 또 다른 플러그인을 사용하고 있다, 아래 단계가 끝나면 css를 텍스트로 추출
                    {
                        loader:"css-loader" //웹팩이 css를 이해하게 된다
                    },
                    {
                        loader:"postcss-loader", //아래에서 받은 것들을  css로 변환
                        options:{
                            postcssOptions:{
                                plugins(){
                                    return [autoprefixer({browsers:"cover 99.5%"})] 
                                     //옵션 설정 모든 브라우저에서 99.5% 호환되게 만들어준다
                                }
                            }
                        }
                    },
                    {
                        loader:"sass-loader"   //sass or scss를 받는다
                    }
                ])
            }
        ]

    },
    output : {
        path : OUTPUT_DIR,
        filename : "[name].js"
    },
    //플러그인 설치
    plugins:[new ExtractCSS("styles.css")]

};

module.exports = config;

//module:rules : 웹팩에게 규칙을 알려준다
// 1. scss를 찾아서 css로 바꿔준다
//2. css를 텍스트로 추출
//3. 분리된 하나의 파일로 만든다
//단, 웹팩은 순서진행이 아래에서 위로 진행되기 때문에 순서를 반대로 작성한다