(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleEditMsClear");
            this.set_titletext("Edi-ms-clear");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFindReplace", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">9999</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">계좌이체</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">sdfsdf</Col><Col id=\"test11\">tttttttttttttttttt</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">how</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">3333</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">개인계좌</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">gaewqr</Col><Col id=\"test11\">tttttttttttt</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">who</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">6666</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">라라라</Col><Col id=\"notest\">ghq2erwett</Col><Col id=\"test11\">eeeeeeeeeeeee</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">45464</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">asfdsf</Col><Col id=\"test11\">wwwwwwww</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">11</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">tqrewrwe</Col><Col id=\"test11\">1111111111</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">8798</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">gafsfsd</Col><Col id=\"test11\">tttttttttttttttt</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST44</Col><Col id=\"nocharge\">5464</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">agsdfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">0</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">gafsdfewrwe</Col><Col id=\"test11\">ssssssssssssssss</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">how</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">4564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">gadfsdfccc</Col><Col id=\"test11\">sfffffff</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">who</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제4</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">564</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsdfsdg</Col><Col id=\"test11\">zzzzzzzzzzzzzz</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">45688</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">asfdsghweee</Col><Col id=\"test11\">zasaaaaaaaaaa</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">99</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">afdsfqfdsfds</Col><Col id=\"test11\">eeeeeeeeeeeee</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">77</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">sdfsdfcccc</Col><Col id=\"test11\">sssssssssssss</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">1111</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">yyerjfgdfdsa</Col><Col id=\"test11\">rrrrrrrrrrrrrrrrrrr</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">100</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfhyeertwq</Col><Col id=\"test11\">eeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">212</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsdsfsd</Col><Col id=\"test11\">wwwwwwwwwww</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">1546</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">무통장입금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">gsdfsdf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckbox", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col></Row><Row><Col id=\"Column0\">떵이</Col></Row><Row><Col id=\"Column0\">호치</Col></Row><Row><Col id=\"Column0\">새초미</Col></Row><Row><Col id=\"Column0\">드라곤</Col></Row><Row><Col id=\"Column0\">요롱이</Col></Row><Row><Col id=\"Column0\">마초</Col></Row><Row><Col id=\"Column0\">미미</Col></Row><Row><Col id=\"Column0\">몽키</Col></Row><Row><Col id=\"Column0\">키키</Col></Row><Row><Col id=\"Column0\">강다리</Col></Row><Row><Col id=\"Column0\">찡찡이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col></Row><Row><Col id=\"Column0\">떵이</Col></Row><Row><Col id=\"Column0\">호치</Col></Row><Row><Col id=\"Column0\">새초미</Col></Row><Row><Col id=\"Column0\">드라곤</Col></Row><Row><Col id=\"Column0\">요롱이</Col></Row><Row><Col id=\"Column0\">마초</Col></Row><Row><Col id=\"Column0\">미미</Col></Row><Row><Col id=\"Column0\">몽키</Col></Row><Row><Col id=\"Column0\">키키</Col></Row><Row><Col id=\"Column0\">강다리</Col></Row><Row><Col id=\"Column0\">찡찡이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col></Row><Row><Col id=\"Column0\">떵이</Col></Row><Row><Col id=\"Column0\">호치</Col></Row><Row><Col id=\"Column0\">새초미</Col></Row><Row><Col id=\"Column0\">드라곤</Col></Row><Row><Col id=\"Column0\">요롱이</Col></Row><Row><Col id=\"Column0\">마초</Col></Row><Row><Col id=\"Column0\">미미</Col></Row><Row><Col id=\"Column0\">몽키</Col></Row><Row><Col id=\"Column0\">키키</Col></Row><Row><Col id=\"Column0\">강다리</Col></Row><Row><Col id=\"Column0\">찡찡이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSort", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSortMultiheader", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col><Col id=\"Column4\">가나다라</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col><Col id=\"Column4\">가다라마</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col><Col id=\"Column4\">가라마바</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col><Col id=\"Column4\">나다라마</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col><Col id=\"Column4\">나라마하</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col><Col id=\"Column4\">다라마바</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col><Col id=\"Column4\">아자차카</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col><Col id=\"Column4\">다마바아</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col><Col id=\"Column4\">다바아자</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col><Col id=\"Column4\">차카타파</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col><Col id=\"Column4\">카타파하</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col><Col id=\"Column4\">차타파하</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRowfix", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"normal\" type=\"STRING\" size=\"256\"/><Column id=\"button\" type=\"STRING\" size=\"256\"/><Column id=\"calendar\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"comboText\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"editControl\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">9999999999999</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">7777777777</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test1</Col><Col id=\"button\">test1</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">test1</Col><Col id=\"number\">88888888888</Col><Col id=\"text\">test1</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">9999999999</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">4444444444</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">5555555555</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">11111111111</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">2</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">222222222</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890826</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890826</Col><Col id=\"editControl\">test</Col><Col id=\"number\">2</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">555555555</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">233</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19880810</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880810</Col><Col id=\"editControl\">test</Col><Col id=\"number\">555555</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171019</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">20171019</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">4444444</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171018</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">20171018</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">1111111</Col><Col id=\"text\">TEST</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColhide", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">9999</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">계좌이체</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">sdfsdf</Col><Col id=\"test11\">tttttttttttttttttt</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">how</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">3333</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">개인계좌</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">gaewqr</Col><Col id=\"test11\">tttttttttttt</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">who</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">6666</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">라라라</Col><Col id=\"notest\">ghq2erwett</Col><Col id=\"test11\">eeeeeeeeeeeee</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">45464</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">asfdsf</Col><Col id=\"test11\">wwwwwwww</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">11</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">tqrewrwe</Col><Col id=\"test11\">1111111111</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">8798</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">gafsfsd</Col><Col id=\"test11\">tttttttttttttttt</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST44</Col><Col id=\"nocharge\">5464</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">agsdfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">0</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">gafsdfewrwe</Col><Col id=\"test11\">ssssssssssssssss</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">how</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">4564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">gadfsdfccc</Col><Col id=\"test11\">sfffffff</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">who</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제4</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">564</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsdfsdg</Col><Col id=\"test11\">zzzzzzzzzzzzzz</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">45688</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">asfdsghweee</Col><Col id=\"test11\">zasaaaaaaaaaa</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">99</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">afdsfqfdsfds</Col><Col id=\"test11\">eeeeeeeeeeeee</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">77</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">sdfsdfcccc</Col><Col id=\"test11\">sssssssssssss</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">1111</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">yyerjfgdfdsa</Col><Col id=\"test11\">rrrrrrrrrrrrrrrrrrr</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">100</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfhyeertwq</Col><Col id=\"test11\">eeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">212</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsdsfsd</Col><Col id=\"test11\">wwwwwwwwwww</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">1546</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">무통장입금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">gsdfsdf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserheader", this);
            obj._setContents("<ColumnInfo><Column id=\"normal\" type=\"STRING\" size=\"256\"/><Column id=\"button\" type=\"STRING\" size=\"256\"/><Column id=\"calendar\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"comboText\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"decoText\" type=\"STRING\" size=\"256\"/><Column id=\"editControl\" type=\"STRING\" size=\"256\"/><Column id=\"mask\" type=\"STRING\" size=\"256\"/><Column id=\"maskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"textArea\" type=\"STRING\" size=\"256\"/><Column id=\"headTest1\" type=\"STRING\" size=\"256\"/><Column id=\"headTest12\" type=\"STRING\" size=\"256\"/><Column id=\"headTest13\" type=\"STRING\" size=\"256\"/><Column id=\"headTest14\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;fs v=&apos;16&apos;&gt;TEST&lt;/fs&gt;</Col><Col id=\"editControl\">test</Col><Col id=\"mask\">8508301</Col><Col id=\"maskEdit\">8508301</Col><Col id=\"number\">9999999999999</Col><Col id=\"text\">test</Col><Col id=\"textArea\">test</Col><Col id=\"headTest1\">aa</Col><Col id=\"headTest12\">aa</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">aa</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;fc v=&apos;red&apos;&gt;T&lt;/fc&gt;&lt;fc v=&apos;orange&apos;&gt;E&lt;/fc&gt;&lt;fc v=&apos;purple&apos;&gt;S&lt;/fc&gt;&lt;fc v=&apos;green&apos;&gt;E&lt;/fc&gt;</Col><Col id=\"editControl\">TEST</Col><Col id=\"mask\">8303301</Col><Col id=\"maskEdit\">8303301</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">TEST</Col><Col id=\"textArea\">TEST</Col><Col id=\"headTest1\">bb</Col><Col id=\"headTest12\">aa</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">aa</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;ff v=&apos;굴림&apos;&gt;TEST&lt;/ff&gt;</Col><Col id=\"editControl\">Test</Col><Col id=\"mask\">8902022</Col><Col id=\"maskEdit\">8902022</Col><Col id=\"number\">7777777777</Col><Col id=\"text\">Test</Col><Col id=\"textArea\">Test</Col><Col id=\"headTest1\">cc</Col><Col id=\"headTest12\">aa</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">bb</Col></Row><Row><Col id=\"normal\">test1</Col><Col id=\"button\">test1</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;b v=&apos;true&apos;&gt;TE&lt;/b&gt;&lt;b v=&apos;false&apos;&gt;ST&lt;/b&gt;</Col><Col id=\"editControl\">test1</Col><Col id=\"mask\">9201012</Col><Col id=\"maskEdit\">9201012</Col><Col id=\"number\">88888888888</Col><Col id=\"text\">test1</Col><Col id=\"textArea\">test1</Col><Col id=\"headTest1\">dd</Col><Col id=\"headTest12\">bb</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">bb</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;i v=&apos;true&apos;&gt;TE&lt;/i&gt;&lt;i v=&apos;false&apos;&gt;ST&lt;/i&gt;</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"mask\">8702022</Col><Col id=\"maskEdit\">8702022</Col><Col id=\"number\">9999999999</Col><Col id=\"text\">서울특별시</Col><Col id=\"textArea\">서울특별시gsdfdsfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Col><Col id=\"headTest1\">ee</Col><Col id=\"headTest12\">bbb</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">bb</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;u v=&apos;true&apos;&gt;TE&lt;/u&gt;&lt;u v=&apos;false&apos;&gt;ST&lt;/u&gt;</Col><Col id=\"editControl\">경기도</Col><Col id=\"mask\">8801012</Col><Col id=\"maskEdit\">8801012</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">경기도</Col><Col id=\"textArea\">경기도</Col><Col id=\"headTest1\">ff</Col><Col id=\"headTest12\">bb</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">bb</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;s v=&apos;true&apos;&gt;TE&lt;/s&gt;&lt;s v=&apos;false&apos;&gt;ST&lt;/s&gt;</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"mask\">9008301</Col><Col id=\"maskEdit\">9008301</Col><Col id=\"number\">4444444444</Col><Col id=\"text\">서울특별시</Col><Col id=\"textArea\">서울특별시</Col><Col id=\"headTest1\">gg</Col><Col id=\"headTest12\">cc</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">cc</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;fs v=&apos;16&apos;&gt;TEST&lt;/fs&gt;</Col><Col id=\"editControl\">경기도</Col><Col id=\"mask\">9103301</Col><Col id=\"maskEdit\">9103301</Col><Col id=\"number\">5555555555</Col><Col id=\"text\">경기도</Col><Col id=\"textArea\">경기도</Col><Col id=\"headTest1\">hh</Col><Col id=\"headTest12\">ccc</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">cc</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880826</Col><Col id=\"decoText\">&lt;fc v=&apos;red&apos;&gt;T&lt;/fc&gt;&lt;fc v=&apos;orange&apos;&gt;E&lt;/fc&gt;&lt;fc v=&apos;purple&apos;&gt;S&lt;/fc&gt;&lt;fc v=&apos;green&apos;&gt;E&lt;/fc&gt;</Col><Col id=\"editControl\">경기도</Col><Col id=\"mask\">9205052</Col><Col id=\"maskEdit\">9205052</Col><Col id=\"number\">11111111111</Col><Col id=\"text\">경기도</Col><Col id=\"textArea\">경기도</Col><Col id=\"headTest1\">ii</Col><Col id=\"headTest12\">ccc</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">cc</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;ff v=&apos;굴림&apos;&gt;TEST&lt;/ff&gt;</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"mask\">9208302</Col><Col id=\"maskEdit\">9208302</Col><Col id=\"number\">2</Col><Col id=\"text\">서울특별시</Col><Col id=\"textArea\">서울특별시</Col><Col id=\"headTest1\">jj</Col><Col id=\"headTest12\">ddd</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">dd</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;b v=&apos;true&apos;&gt;TE&lt;/b&gt;&lt;b v=&apos;false&apos;&gt;ST&lt;/b&gt;</Col><Col id=\"editControl\">TEST</Col><Col id=\"mask\">8508301</Col><Col id=\"maskEdit\">8508301</Col><Col id=\"number\">222222222</Col><Col id=\"text\">TEST</Col><Col id=\"textArea\">TEST</Col><Col id=\"headTest1\">kk</Col><Col id=\"headTest12\">ddd</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">dd</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890826</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890826</Col><Col id=\"decoText\">&lt;i v=&apos;true&apos;&gt;TE&lt;/i&gt;&lt;i v=&apos;false&apos;&gt;ST&lt;/i&gt;</Col><Col id=\"editControl\">test</Col><Col id=\"mask\">8303301</Col><Col id=\"maskEdit\">8303301</Col><Col id=\"number\">2</Col><Col id=\"text\">test</Col><Col id=\"textArea\">test</Col><Col id=\"headTest1\">ll</Col><Col id=\"headTest12\">ddd</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">dd</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19880826</Col><Col id=\"decoText\">&lt;u v=&apos;true&apos;&gt;TE&lt;/u&gt;&lt;u v=&apos;false&apos;&gt;ST&lt;/u&gt;</Col><Col id=\"editControl\">Test</Col><Col id=\"mask\">8902022</Col><Col id=\"maskEdit\">8902022</Col><Col id=\"number\">555555555</Col><Col id=\"text\">Test</Col><Col id=\"textArea\">Test</Col><Col id=\"headTest1\">nn</Col><Col id=\"headTest12\">eee</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">ee</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;fs v=&apos;16&apos;&gt;TEST&lt;/fs&gt;</Col><Col id=\"editControl\">test</Col><Col id=\"mask\">9201012</Col><Col id=\"maskEdit\">9201012</Col><Col id=\"number\">233</Col><Col id=\"text\">test</Col><Col id=\"textArea\">test</Col><Col id=\"headTest1\">mm</Col><Col id=\"headTest12\">eee</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">ee</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19880810</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880810</Col><Col id=\"decoText\">&lt;fc v=&apos;red&apos;&gt;T&lt;/fc&gt;&lt;fc v=&apos;orange&apos;&gt;E&lt;/fc&gt;&lt;fc v=&apos;purple&apos;&gt;S&lt;/fc&gt;&lt;fc v=&apos;green&apos;&gt;E&lt;/fc&gt;</Col><Col id=\"editControl\">test</Col><Col id=\"mask\">8702022</Col><Col id=\"maskEdit\">8702022</Col><Col id=\"number\">555555</Col><Col id=\"text\">test</Col><Col id=\"textArea\">test</Col><Col id=\"headTest1\">oo</Col><Col id=\"headTest12\">eee</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">ee</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171019</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">20171019</Col><Col id=\"decoText\">&lt;ff v=&apos;굴림&apos;&gt;TEST&lt;/ff&gt;</Col><Col id=\"editControl\">TEST</Col><Col id=\"mask\">8801012</Col><Col id=\"maskEdit\">8801012</Col><Col id=\"number\">4444444</Col><Col id=\"text\">TEST</Col><Col id=\"textArea\">TEST</Col><Col id=\"headTest1\">pp</Col><Col id=\"headTest12\">eee</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">ee</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171018</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">20171018</Col><Col id=\"decoText\">&lt;b v=&apos;true&apos;&gt;TE&lt;/b&gt;&lt;b v=&apos;false&apos;&gt;ST&lt;/b&gt;</Col><Col id=\"editControl\">TEST</Col><Col id=\"mask\">9008301</Col><Col id=\"maskEdit\">9008301</Col><Col id=\"number\">1111111</Col><Col id=\"text\">TEST</Col><Col id=\"textArea\">TEST</Col><Col id=\"headTest1\">qq</Col><Col id=\"headTest12\">ee</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">ee</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColfix", this);
            obj._setContents("<ColumnInfo><Column id=\"normal\" type=\"STRING\" size=\"256\"/><Column id=\"button\" type=\"STRING\" size=\"256\"/><Column id=\"calendar\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"comboText\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"editControl\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">9999999999999</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">7777777777</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test1</Col><Col id=\"button\">test1</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">test1</Col><Col id=\"number\">88888888888</Col><Col id=\"text\">test1</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">9999999999</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">4444444444</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">5555555555</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">11111111111</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">2</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">222222222</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890826</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890826</Col><Col id=\"editControl\">test</Col><Col id=\"number\">2</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">555555555</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">233</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19880810</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880810</Col><Col id=\"editControl\">test</Col><Col id=\"number\">555555</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171019</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">20171019</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">4444444</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171018</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">20171018</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">1111111</Col><Col id=\"text\">TEST</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">user1</Col><Col id=\"NAME\">사용자1</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user2</Col><Col id=\"NAME\">사용자2</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user3</Col><Col id=\"NAME\">사용자3</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user4</Col><Col id=\"NAME\">사용자4</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user5</Col><Col id=\"NAME\">사용자5</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user6</Col><Col id=\"NAME\">사용자6</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user7</Col><Col id=\"NAME\">사용자7</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user8</Col><Col id=\"NAME\">사용자8</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user9</Col><Col id=\"NAME\">사용자9</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user10</Col><Col id=\"NAME\">사용자10</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user11</Col><Col id=\"NAME\">사용자11</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user12</Col><Col id=\"NAME\">사용자12</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user13</Col><Col id=\"NAME\">사용자13</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user14</Col><Col id=\"NAME\">사용자14</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user15</Col><Col id=\"NAME\">사용자15</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user16</Col><Col id=\"NAME\">사용자16</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user17</Col><Col id=\"NAME\">사용자17</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user18</Col><Col id=\"NAME\">사용자18</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user19</Col><Col id=\"NAME\">사용자19</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user20</Col><Col id=\"NAME\">사용자20</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPaste", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","10","0","311","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Edi-ms-clear");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div01","10","487","340","177",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","10","10","220","28",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.getSetter("_ms_clear").set("true");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00","10","43","220","28",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.getSetter("_ms_clear").set("true");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div00","34","76","295","85",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02","10","10","200","28",null,null,null,null,null,null,this.div01.form.div00.form);
            obj.set_taborder("0");
            obj.getSetter("_ms_clear").set("true");
            this.div01.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","10","43","200","28",null,null,null,null,null,null,this.div01.form.div00.form);
            obj.set_taborder("1");
            obj.getSetter("_ms_clear").set("true");
            this.div01.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","10","388","210","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.getSetter("_ms_clear").set("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","10","421","210","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("_ms_clear").set("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","10","454","210","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("_ms_clear").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","50",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("* IE 기본 Edit 컴포넌트에서 제공되는 기능으로 Edit 컴포넌트에 포커스가 들어왔을때 입력된 값이 존재하면 \r\n   X 버튼이 활성화되고 클릭 시 해당 Edit 컴포넌트의 내용을 초기화 해주는 기능이다.\r\n\r\n1. UserProperty 에 -ms-clear 을 true 로 셋팅하여 초기 Form onload 시에  자동설정 제어\r\n2. UserProperty 에 -ms-clear 값을 사용하지 않고 함수로 제어\r\n    // 특정 Edit 컴포넌트 설정\r\n    this.gfnSetEditMsClear(this.edt03);          \r\n    // 특정 Edit 컴포넌트 설정해제 \r\n    this.gfnSetEditMsClear(this.edt03, false);\r\n    // Form에 존재하는 모든 Edit 컴포넌트 설정\r\n   this.gfnSetEditMsClearAll(this);\r\n    // Form에 존재하는 모든 Edit 컴포넌트 설정해제\r\n   this.gfnSetEditMsClearAll(this);");
            obj.set_cssclass("sta_WF_Description");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","355","188","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1) UserProperty 설정");
            obj.set_cssclass("sta_WF_Title13");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","400","355","248","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2) Function 설정");
            obj.set_cssclass("sta_WF_Title13");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","400","390","220","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("gfnSetEditMsClear 대상 설정");
            this.addChild(obj.name, obj);

            obj = new Div("div00","663","489","340","177",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","10","10","220","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","10","43","220","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00","20","76","295","85",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt02","10","10","200","28",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","10","43","200","28",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("1");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt03","663","390","210","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edt04","663","423","210","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edt05","663","456","210","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","400","425","220","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("gfnSetEditMsClear 대상 해제");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","400","460","220","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("gfnSetEditMsClear 전체 설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","400","495","220","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("gfnSetEditMsClear 전체 해제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div01.form.div00.form
            obj = new Layout("default","",0,0,this.div01.form.div00.form,function(p){});
            this.div01.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleEditMsClear.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > Edi-ms-clear
        *  @FileName 	SampleEditMsClear.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    에디트 컴포넌트 -ms-clear (X 버튼) 기능
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.01     	Education 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 지정한 컴포넌트 -ms-clear 옵션 적용
         */
        this.btn00_onclick = function(obj,e)
        {
        	this.gfnSetEditMsClear(this.edt03);
        	this.gfnSetEditMsClear(this.edt04);
        	this.gfnSetEditMsClear(this.edt05);

         	this.gfnSetEditMsClear(this.div00.form.edt00);
         	this.gfnSetEditMsClear(this.div00.form.edt02);

         	this.gfnSetEditMsClear(this.div00.form.div00.form.edt02);
         	this.gfnSetEditMsClear(this.div00.form.div00.form.edt00);
        };

        /**
         * @description 지정한 컴포넌트 -ms-clear 옵션 해제
         */
        this.btn01_onclick = function(obj,e)
        {
        	this.gfnSetEditMsClear(this.edt03, false);
        	this.gfnSetEditMsClear(this.edt04, false);
        	this.gfnSetEditMsClear(this.edt05, false);

        	this.gfnSetEditMsClear(this.div00.form.edt00, false);
        	this.gfnSetEditMsClear(this.div00.form.edt02, false);

        	this.gfnSetEditMsClear(this.div00.form.div00.form.edt02, false);
        	this.gfnSetEditMsClear(this.div00.form.div00.form.edt00, false);
        };

        /**
         * @description 지정한 컴포넌트 -ms-clear 옵션 전체 적용
         */
        this.btn02_onclick = function(obj,e)
        {
        	this.gfnSetEditMsClearAll(this, true);
        };

        /**
         * @description 지정한 컴포넌트 -ms-clear 옵션 전체 해제
         */
        this.btn03_onclick = function(obj,e)
        {
        	this.gfnSetEditMsClearAll(this, false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div01.form.edt02.addEventHandler("onchanged",this.div01_edt02_onchanged,this);
            this.div01.form.div00.form.edt00.addEventHandler("onchanged",this.div01_div00_edt00_onchanged,this);
            this.edt00.addEventHandler("onchanged",this.edt00_onchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.div00.form.edt00.addEventHandler("onchanged",this.div00_edt00_onchanged,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.dsStatus.addEventHandler("oncolumnchanged",this.dsStatus_oncolumnchanged,this);
        };
        this.loadIncludeScript("SampleEditMsClear.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
