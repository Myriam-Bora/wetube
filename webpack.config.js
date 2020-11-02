// path는 노드에서 기본적으로 있는 패키지. 절대경로를 나타내어준다 users/nicolas/documents/wetube/asstes..

const path = require("path");

//entry : 파일이 어디서 왔는가
//__dirname : 현재의 프로젝트 디렉토리 이름. 어디서든 접근가능한 노트의 전역변수
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
//output : 그것을 어디에 넣을 것인가
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry : ENTRY_FILE,
    output : {
        path : OUTPUT_DIR,
        filename : "[name].[format]"
    }
};

module.exports = config;