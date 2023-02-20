(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UI_Transfer_Transfer_Part");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_filelist", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputparam", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"key\">key01</Col><Col id=\"value\">aaa</Col></Row><Row><Col id=\"key\">key02</Col><Col id=\"value\">bbb</Col></Row><Row><Col id=\"key\">key03</Col><Col id=\"value\">ccc</Col></Row><Row><Col id=\"key\">key04</Col><Col id=\"value\">ddd</Col></Row><Row><Col id=\"key\">key05</Col><Col id=\"value\">eee</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog01", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","5","10","145","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일 리스트 불러오기");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","5","100","465","200",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_filelist");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"50\"><Cell id=\"Cell_Icon\" left=\"5\" top=\"5\" width=\"40\" height=\"40\" text=\"ICO\"/><Cell id=\"Cell_FileName\" left=\"50\" top=\"5\" width=\"400\" height=\"40\" text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","70","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다운로드 리스트");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","5","315","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택다운로드");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","5","375","285","180",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_inputparam");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"key\"/><Cell col=\"1\" text=\"value\"/></Band><Band id=\"body\"><Cell text=\"bind:key\"/><Cell col=\"1\" text=\"bind:value\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","301","379","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("postdatalist 포함여부");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","187","73","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","160","10","130","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("전체다운로드");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UI_Download_Transfer_Part_All.xfdl", function() {
        this.nRow = 0;
        this.nCnt = 1;
        this.isEnd = "N";

        this.callback_transaction = function()
        {
        	trace(1);
        };

        //this.strdownurl = "http://172.10.13.54:8080/V17_Showcase/Service/fileDownload_postdatatest.jsp?paramtest=gettype";
        this.strdownurl = "http://125.128.209.243:8080/V17_Showcase/Service/fileDownload_postdatatest.jsp?paramtest=gettype";
        this.getpostdatalist = function()
        {
        	this.FileDownTransfer00.clearPostDataList();
        	for (var i = 0; i < this.ds_inputparam.rowcount; i++)
        	{
        		this.FileDownTransfer00.setPostData(
        			this.ds_inputparam.getColumn(i,"key"),
        			this.ds_inputparam.getColumn(i,"value")
        		);
        		trace(
        			this.ds_inputparam.getColumn(i,"key") + " : " + this.FileDownTransfer00.getPostData(this.ds_inputparam.getColumn(i,"key"))
        		);
        	}
        };


        this.downloadfile = function(i, targetFilePath)
        {
        		if ( true == this.CheckBox00.value )
        		{
        			this.getpostdatalist();
        			trace("download----------------:"+this.ds_filelist.getColumn(i, "FILE_URL"));
        			this.FileDownTransfer00.setPostData(
        				"filepath",
        				this.ds_filelist.getColumn(i, "FILE_URL")
        			);
        			this.FileDownTransfer00.setPostData(
        				"filename",
        				this.ds_filelist.getColumn(i, "FILE_NAME")
        			);
        			trace("this.FileDownTransfer00.postdatalist:"+this.FileDownTransfer00.postdatalist.length);
        			// this.FileDownTransfer00.set_downloadfilename( this.ds_filelist.getColumn(i, "FILE_NAME") );

        			this.setWaitCursor(true);
        			//this.FileDownTransfer00.download(this.ds_filelist.getColumn(i, "FILE_URL"),"D:\\fileDownTest\\"+this.ds_filelist.getColumn(i, "FILE_NAME"));
        			var rtn1 = this.FileDownTransfer00.download(this.ds_filelist.getColumn(i, "FILE_URL"), targetFilePath);
        			trace("rtn1 >>> "+ rtn1)
        		}
        		else
        		{
        			this.FileDownTransfer00.clearPostDataList();
        			trace("download----------------:"+this.ds_filelist.getColumn(i, "FILE_URL"));
        			this.FileDownTransfer00.setPostData(
        				"filepath",
        				this.ds_filelist.getColumn(i, "FILE_URL")
        			);
        			this.FileDownTransfer00.setPostData(
        				"filename",
        				this.ds_filelist.getColumn(i, "FILE_NAME")
        			);
        			trace("this.FileDownTransfer00.postdatalist:"+this.FileDownTransfer00.postdatalist.length);
        			 //this.FileDownTransfer00.set_downloadfilename( this.ds_filelist.getColumn(i, "FILE_NAME") );

        			//this.FileDownTransfer00.download(this.ds_filelist.getColumn(i, "FILE_URL"))
        			var rtn2 = this.FileDownTransfer00.download(this.ds_filelist.getColumn(i, "FILE_URL"),
        										"D:\\temp\\"+this.ds_filelist.getColumn(i, "FILE_NAME"));
        			trace("rtn2 >>> "+ rtn2)
        		}
        }
        this.Button00_onclick = function(obj,e)
        {
        	this.transaction("list", "http://172.10.13.54:8080/V17_Showcase/Service/fileDownload_servlet_list_XML.jsp", "", "ds_filelist=dsList", "a=b", "callback_transaction", "false", "0")
        };


        this.Button02_onclick = function(obj,e)
        {

        	//this.downloadfile(this.ds_filelist.rowposition);

        	/* 매뉴얼 표기내용
        	표시되는 FileDialog 의 종류를 설정합니다.

        	"FileDialog.LOAD" 또는 1 설정 시 한 개 파일을 읽을 수 있는 FileDialog 가 표시됩니다.
        	"FileDialog.SAVE" 또는 2 설정 시 한 개 파일을 쓸 수 있는 FileDialog 가 표시됩니다.
        	"FileDialog.MULTILOAD" 또는 3 설정 시 여러개의 파일을 읽을 수 있는 FileDialog 가 표시됩니다.
        	"FileDialog.SELFOLDER" 또는 4 설정 시 폴더를 선택할 수 있는 FileDialog 가 표시됩니다.

        	잘못된 값 설정 시 "FileDialog.LOAD" 로 적용됩니다.
        	*/

        	// 먼저 파일다이얼로그를 오픈하여 파일을 선택후 성공하면 파일다운로드를 호출하도록 변경
        	this.FileDialog00.open( "파일선택", FileDialog.SAVE );
        };

        this.ListView00_oncelldblclick = function(obj,e)
        {
        	this.downloadfile(e.row);
        };

        this.FileDownTransfer00_onsuccess = function(obj,e)
        {
        	if(this.isEnd != "Y"){
        		this.FileDialog01.open( "파일선택", FileDialog.SAVE, "%MYDOCUMENT%", this.ds_filelist.getColumn(this.nRow, "FILE_NAME"));
        	}
        	this.setWaitCursor(false);
        	trace( "onsuccess >>> " + obj.name+"_"+e.eventid );
        };

        this.FileDownTransfer00_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	trace( obj.name+"_"+e.eventid );
        	trace(e.errormsg);
        };

        this.ds_filelist_onload = function(obj,e)
        {
        	this.Edit00.set_value("총 " + obj.rowcount + "건");
        };

        this.UI_Transfer_Transfer_Part_onload = function(obj,e)
        {

        	var objFileDownload = new FileDownTransfer("FileDownTransfer00", 30, 120, 196, 46, null, null);

        	this.addChild("FileDownTransfer00", objFileDownload);

        	this.FileDownTransfer00.addEventHandler( "onsuccess", this.FileDownTransfer00_onsuccess, this);
        	this.FileDownTransfer00.addEventHandler( "onerror", this.FileDownTransfer00_onerror, this);

        	//objFileDownload.show();

        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	trace("FileDialog00_onclose >> e.eventid =" + e.eventid+", e.reason = " + e.reason+ ", e.path = "+e.path +", e.virtualfiles = "+e.virtualfiles);
        	if (e.reason == 0) // 취소
        	{
        		// 파일을 선택하지 않거나 x 버튼으로 종료시 취소이벤트를 받아 wait 커서를 해제시킨다.
        		this.setWaitCursor(false);
        	}
        	else if (e.reason == 2) // SAVE
        	{
        		var file = e.virtualfiles[0];
        		trace("VirtualFile :: filename="+file.filename+", fullpath="+file.fullpath+", path="+file.path);

        		this.downloadfile(this.ds_filelist.rowposition, file.fullpath);
        	}
        };

        //전체다운로드
        this.Button01_onclick = function(obj,e)
        {
        	this.nCnt = this.ds_filelist.rowcount;
        	this.FileDialog01.open( "파일선택", FileDialog.SAVE, "%MYDOCUMENT%", this.ds_filelist.getColumn(this.nRow, "FILE_NAME"));
        };

        this.FileDialog01_onclose = function(obj,e)
        {
        	trace("FileDialog01_onclose >> e.eventid =" + e.eventid+", e.reason = " + e.reason+ ", e.path = "+e.path +", e.virtualfiles = "+e.virtualfiles);
        	if (e.reason == 0) // 취소
        	{
        		// 파일을 선택하지 않거나 x 버튼으로 종료시 취소이벤트를 받아 wait 커서를 해제시킨다.
        		this.setWaitCursor(false);
        	}
        	else if (e.reason == 2) // SAVE
        	{
        		var file = e.virtualfiles[0];
        		trace("VirtualFile :: filename="+file.filename+", fullpath="+file.fullpath+", path="+file.path);

        		this.downloadfile(this.nRow, file.fullpath);
        		if(this.nCnt > this.nRow){
        			this.nRow++;
        			if(this.nCnt == this.nRow){
        				this.isEnd = "Y";
        			}
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.UI_Transfer_Transfer_Part_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.ListView00.addEventHandler("oncelldblclick",this.ListView00_oncelldblclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.ds_filelist.addEventHandler("onload",this.ds_filelist_onload,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileDialog01.addEventHandler("onclose",this.FileDialog01_onclose,this);
        };
        this.loadIncludeScript("UI_Download_Transfer_Part_All.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
