(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample");
            this.set_titletext("모임 검색조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"sumnail_img\" type=\"STRING\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"intro\" type=\"STRING\" size=\"256\"/><Column id=\"class_user_cnt\" type=\"INT\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"categ_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch00", this);
            obj._setContents("<ColumnInfo><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/><Column id=\"search\" type=\"STRING\" size=\"256\"/><Column id=\"searchCondition\" type=\"STRING\" size=\"256\"/><Column id=\"searchLocation\" type=\"STRING\" size=\"256\"/><Column id=\"locationNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dslist", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">a</Col><Col id=\"name\">인기순</Col></Row><Row><Col id=\"id\">b</Col><Col id=\"name\">찜이 많은 순 </Col></Row><Row><Col id=\"id\">c</Col><Col id=\"name\">신규순 </Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLocation", this);
            obj._setContents("<ColumnInfo><Column id=\"location_no\" type=\"STRING\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"location_no\">0</Col><Col id=\"location_name\">전체 </Col></Row><Row><Col id=\"location_no\">1</Col><Col id=\"location_name\">강남구</Col></Row><Row><Col id=\"location_no\">2</Col><Col id=\"location_name\">강동구</Col></Row><Row><Col id=\"location_no\">3</Col><Col id=\"location_name\">강북구</Col></Row><Row><Col id=\"location_no\">4</Col><Col id=\"location_name\">강서구</Col></Row><Row><Col id=\"location_no\">5</Col><Col id=\"location_name\">관악구</Col></Row><Row><Col id=\"location_no\">6</Col><Col id=\"location_name\">광진구</Col></Row><Row><Col id=\"location_no\">7</Col><Col id=\"location_name\">구로구</Col></Row><Row><Col id=\"location_no\">8</Col><Col id=\"location_name\">금천구</Col></Row><Row><Col id=\"location_no\">9</Col><Col id=\"location_name\">노원구</Col></Row><Row><Col id=\"location_no\">10</Col><Col id=\"location_name\">도봉구</Col></Row><Row><Col id=\"location_no\">11</Col><Col id=\"location_name\">동대문구</Col></Row><Row><Col id=\"location_no\">12</Col><Col id=\"location_name\">동작구</Col></Row><Row><Col id=\"location_no\">13</Col><Col id=\"location_name\">마포구</Col></Row><Row><Col id=\"location_no\">14</Col><Col id=\"location_name\">서대문구</Col></Row><Row><Col id=\"location_no\">15</Col><Col id=\"location_name\">서초구</Col></Row><Row><Col id=\"location_no\">16</Col><Col id=\"location_name\">성동구</Col></Row><Row><Col id=\"location_no\">17</Col><Col id=\"location_name\">성북구</Col></Row><Row><Col id=\"location_no\">18</Col><Col id=\"location_name\">송파구</Col></Row><Row><Col id=\"location_no\">19</Col><Col id=\"location_name\">양천구</Col></Row><Row><Col id=\"location_no\">20</Col><Col id=\"location_name\">영등포구</Col></Row><Row><Col id=\"location_no\">21</Col><Col id=\"location_name\">용산구</Col></Row><Row><Col id=\"location_no\">22</Col><Col id=\"location_name\">은평구</Col></Row><Row><Col id=\"location_no\">23</Col><Col id=\"location_name\">종로구</Col></Row><Row><Col id=\"location_no\">24</Col><Col id=\"location_name\">중구</Col></Row><Row><Col id=\"location_no\">25</Col><Col id=\"location_name\">중랑구</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","10","0","50.00%","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","Static01:-660","130","1280","870",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Div("divPage00","Static01:-600","divMain:37","1138","63",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("Cmm::CmmPaging.xfdl");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCondition",null,"50","134","40","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dslist");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLocation","cboCondition:-290","50",null,"40","176",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsLocation");
            obj.set_codecolumn("location_no");
            obj.set_datacolumn("location_name");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Static("staExist","41","140","602","117",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("* 해당 검색의 모임이 존재하지 않습니다. ");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divbottom","0","1150",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage00
            obj = new Layout("default","",0,0,this.divPage00.form,function(p){});
            this.divPage00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1210,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmPaging.xfdl");
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("listSearchClass.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName listSearchClass.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/25
        *	@Description 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/25		이수아		최초 생성
        *
        *
        */

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();
        this.fvRecords=8; 			//목록갯수
        this.fvPage=0;	 			//페이지번호
        this.fvRecordsOffset=0;		//시작rownum
        this.fvTotalCount=0;		//전체데이터갯수
        this.fvPageCount=0; 		//실제표출페이지갯수


        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */

        this.Sample_onload = function(obj,e)
        {
        	this.staExist.set_visible(false);

        	this.cboLocation.set_value("0");
        	this.cboCondition.set_value("a");

        	this.fnPageInit();

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback2 = function(trId)
        {
        	if(trId == "listSearchClass"){
        		if(this.dsClass.rowcount < 1){
        			this.staExist.set_visible(true);
        		}else{
        			this.staExist.set_visible(false);
        			this.fvInsert();
        			this.fnPagingSetting(); //make paging
        		}
        	}
        }

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 페이징 처리 기본 세팅 값
        */
        this.fnPageInit = function ()
        {
        	//삭제
        	this.fvRemove();

        	//실제표출페이지갯수
        	this.dsSearch00.clearData();
        	var nRow = this.dsSearch00.addRow();
        	this.dsSearch00.setColumn(nRow, "records", this.fvRecords);
        	this.dsSearch00.setColumn(nRow, "recordsOffset", this.fvRecordsOffset);
        	//this.dsSearch00.setColumn(nRow, "categNo", nexacro.getApplication().gvCategNo);
        	this.dsSearch00.setColumn(nRow, "search", nexacro.getApplication().gvSearch);
        	this.dsSearch00.setColumn(nRow, "locationNo", this.cboLocation.value);
        	this.dsSearch00.setColumn(nRow, "searchCondition", this.cboCondition.value);
        	this.dsSearch00.setColumn(nRow, "searchLocation", this.cboLocation.value);

        	//this.dsPagingInfo.setColumn(nRow, "userId", this.fvObjApp.gdsUser.getColumn(this.fvObjApp.gdsUser.rowposition,"userId"));
        	//trace(this.dsSearch00.saveXML());

        	this.ufnTransaction(
        		"listSearchClass"
        		,"listSearchClass.do"
        		,"dsSearch00=dsSearch00"
        		,"dsClass=dsClass dsPagingInfo=dsPagingInfo"
        		,""
        		,"fnCallback2");

        };

        /**
        * @description 페이징처리 기본 세팅 값
        */
        this.fnPagingSetting = function ()
        {
        	this.fvTotalCount = nexacro.toNumber(this.dsPagingInfo.getColumn("totalCount")); //전체로우갯수
        	//create page
        	this.divPage00.form.fnCreatePage("fnPagingCallback",
        		this.fvTotalCount,
        		this.fvRecords,
        		this.fvPage,
        		this.fvPageCount);
        };

        /**
        * @description 페이징처리 기본 세팅 값
        */
        this.fnPagingCallback = function(nPage, nRecordsOffset)
        {
        	this.fvPage = nPage;
        	this.fvRecordsOffset = nRecordsOffset;
        	this.fnPageInit();
        };

        /**
        * @description 모임 검색 리스트 동적 생성
        */
        this.fvInsert = function()
        {
        	var xPos = 0;  //left
        	var yPos = 0;  //top


        	for(var i=0; i<this.dsClass.getRowCount(); i++)
        	{


        		if(i==4)
        		{
        			yPos = yPos+470;
        			xPos = 0;
        		}

        		var objDiv = "objDiv" + i;
        		objDiv = new Div();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        		objDiv.init("div" + i, xPos, yPos, 320, 400); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        		this.divMain.form.addChild("div" + i, objDiv); // 생성했는데 화면에다가 붙여주는 것
        		//objDiv.set_border("1px solid red");  // 배경색깔
        		objDiv.show();  // 화면에보여줄려고 하는 메소드 show

        		xPos  = xPos+320;

        		var objDivTmp = "div"+i;
        		objDivTmp = this.divMain.form.components[objDivTmp];
        		trace("@@@@@@@@@@"+objDivTmp);

        		var objImageViewer0 = new ImageViewer();
        		objImageViewer0.init("ima0", 10, 0, 300, 270);
        		objDivTmp.form.addChild("ima0", objImageViewer0);
        		objImageViewer0.set_image(this.dsClass.getColumn(i, "fileimg"));
        		objImageViewer0.class_no = this.dsClass.getColumn(i, "class_no"); // 이미지뷰어에 class_no값 넣어주기
        		objImageViewer0.set_stretch("fit");
        		//objImageViewer0.set_text( this.dsClass.getColumn(i, "class_no"));
        		//objImageViewer0.set_border("1px solid gray");
        		objImageViewer0.show();

        		objDivTmp.form.ima0.addEventHandler("onclick", this.fnClassNo, this);


        		var objStatic0 = new Static();
        		objStatic0.init("sta0", 240, 268, 70, 33);
        		objDivTmp.form.addChild("sta0", objStatic0);
        		//objStatic0.set_border("1px solid gray");
        		objStatic0.set_textAlign("right");
        		objStatic0.set_text(this.dsClass.getColumn(i, "location_name"));
        		objStatic0.set_font("10pt/normal 맑은 고딕");
        		objStatic0.show();

        		var objStatic1 = new Static();
        		objStatic1.init("sta1", 10, 268, 112, 33);
        		objDivTmp.form.addChild("sta1", objStatic1);
        		//objStatic1.set_border("1px solid white");
        		objStatic1.set_text("회원수"+" : "+this.dsClass.getColumn(i, "class_user_cnt")+"명");
        		objStatic1.set_color("red");
        		objStatic1.set_font("10pt/normal 맑은 고딕");
        		objStatic1.show();

        		var objStatic2 = new Static();
        		objStatic2.init("sta2", 10, 295, 300, 40);
        		objDivTmp.form.addChild("sta2", objStatic2);
        		//objStatic2.set_border("1px solid gray");
        		objStatic2.set_text(this.dsClass.getColumn(i, "title"));
        		objStatic2.set_font("bold 14px/normal 맑은 고딕");
        		objStatic2.show();

        		var objStatic3 = new Static();
        		objStatic3.init("sta3", 10, 325, 300, 50);
        		objDivTmp.form.addChild("sta3", objStatic3);
        		objStatic3.set_border("1px solid gainsboro, 0px none, 0px none");
        		//objStatic3.set_border("1px solid red");
        		objStatic3.set_text(this.dsClass.getColumn(i, "intro"));
        		objStatic3.set_font("10pt/normal 맑은 고딕");
        		objStatic3.show();

        	}

        	trace("yPos" + yPos);
        }

        /**
        * @description 모임 리스트 삭제, 초기화
        */
        this.fvRemove = function()
        {
        	for(var i=0; i<this.dsClass.getRowCount(); i++)
        	{
        		trace("건수@@@@@@"+this.dsClass.getRowCount());
        		var objDivTmp = "div" + i;

        		//if(this.isValidObject(objDivTmp)){

        		var objBtn = this.divMain.form.removeChild(objDivTmp);

        		trace("@@@@"+objBtn);


        		// Form에 동적으로 추가된 컴포넌트를 제거하는 메소드
        		objBtn.destroy(); //destroy와 null까지해줘야 메모리까지 삭제, 한번더 초기화 (그래서 쌍으로 둘다 써주기)
        		objBtn = null;
        		//}

        	}

        }

        /**
        * @description 이미지 클릭 시, 해당 이미지의 모임 상세조회 페이지로 이동하는 함수
        */
        this.fnClassNo = function(obj)
        {
        	trace("@@@클래스넘버"+obj.class_no);
        	this.fvApp.gvClassNo = obj.class_no; // 넣어주는 것
        	this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");
        }


        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 콤보값이 변경됬을 때 발생하는 이벤트
        */
        this.cboCondition_onitemchanged = function(obj,e)
        {
        	this.fnPageInit();

        };


        /**
        * @description 콤보값이 변경되었을 떄 발생하는 이벤트
        */
        this.cboLocation_onitemchanged = function(obj,e)
        {
        	this.fnPageInit();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Sample_onload,this);
            this.cboCondition.addEventHandler("onitemchanged",this.cboCondition_onitemchanged,this);
            this.cboLocation.addEventHandler("onitemchanged",this.cboLocation_onitemchanged,this);
        };
        this.loadIncludeScript("listSearchClass.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
