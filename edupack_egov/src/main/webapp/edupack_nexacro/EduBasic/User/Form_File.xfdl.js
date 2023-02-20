(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp_Exe");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnUp","18","19","104","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일 선택");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","12","60","778","330",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsUp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"96\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"FILE_ID\"/><Cell col=\"2\" text=\"FILE_NAME\"/><Cell col=\"3\" text=\"FILE_TYPE\"/><Cell col=\"4\" text=\"FILE_SIZE\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"bind:FILE_ID\"/><Cell col=\"2\" text=\"bind:FILE_NAME\"/><Cell col=\"3\" text=\"bind:FILE_TYPE\"/><Cell col=\"4\" text=\"bind:FILE_SIZE\"/><Cell col=\"5\" text=\"삭제\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"6\" text=\"내려받기\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","130","19","104","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","250","19","104","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","369","20","121","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택 내려받기");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("Form_File.xfdl", function() {
        this.Form_Emp_Exe_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        this.btnUp_onclick = function(obj,e)
        {
        	this.FileDialog.open("FileSelect", 3, "%UserApp%"); // f1 open 확인
        };

        this.FileDialog_onclose = function(obj,e)
        {
        	var objFileList = e.virtualfiles;
         //virtualfiles> FileDialog 가 수행된 형태에 맞는 파일 정보를 갖는 속성입니다.


        	for(i=0; i<objFileList.length; i++) // 파일업로드에 넣어줄꺼임
        	{
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]); // 먼저 똑같은 파일이 있는지 확인
        		if(!bExist){
        			var sFileName = objFileList[i].filename;
        			var sFileType = sFileName.substr(sFileName.lastIndexOf(".")+1);
        			this.FileUpTransfer00.addFile(sFileName, objFileList[i]);

        			var nRow = this.dsUp.addRow();
        			this.dsUp.setColumn(nRow, "FILE_ID", sFileName); //이름바꾼게있으면이름
        			this.dsUp.setColumn(nRow, "FILE_NAME", sFileName); // 처음 넣는 이름?..
        			this.dsUp.setColumn(nRow, "FILE_TYPE", sFileType);
        			this.dsUp.setColumn(nRow, "CHECK", "0");
        		}

        	}
        };

        //파일 업로드
        this.btn00_onclick = function(obj,e)
        {
        	var sUploadUrl = "SvcUrl::fileUpload.do"
        	this.FileUpTransfer00.setPostData("userPath", "edupack"); //서버로 데이터전송
        	this.FileUpTransfer00.upload(sUploadUrl);

        };

        //파일업로드가 성공되면
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0]
        	trace(objDs.saveXML());

        	for(var i=0; i<objDs.rowcount; i++)
        	{
        		var nRow = this.dsUp.findRow("FILE_NAME", objDs.getColumn(i, "FILE_NAME"));
        		this.dsUp.setColumn(nRow, "FILE_ID", objDs.getColumn(i, "FILE_ID"));
        		this.dsUp.setColumn(nRow, "FILE_NAME", objDs.getColumn(i, "FILE_NAME"));
        		this.dsUp.setColumn(nRow, "FILE_SIZE", objDs.getColumn(i, "FILE_SIZE"));


        	}

        };

        //파일드래그하면 들어가지는 작업
        this.grd00_ondrop = function(obj,e)
        {
        	var objFileList = e.filelist;
        	for(var i=0; i<objFileList.length; i++)
        	{
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);
        		if(!bExist){ // 동일 파일 미존재시
        			var sFileName = objFileList[i].filename;
        			var sFileType = sFileName.substr(sFileName.lastIndexOf(".")+1);
        			this.FileUpTransfer00.addFile(sFileName, objFileList[i]);

        			var nRow = this.dsUp.addRow();
        			this.dsUp.setColumn(nRow, "FILE_ID", sFileName); //이름바꾼게있으면이름
        			this.dsUp.setColumn(nRow, "FILE_NAME", sFileName); // 처음 넣는 이름?..
        			this.dsUp.setColumn(nRow, "FILE_TYPE", sFileType);


        		}
        	}

        };

        //파일 목록리스트 가져오기
        this.btn01_onclick = function(obj,e)
        {
        	this.gfnTransaction("svcFileList"
        						,"getFileList.do"
        						,""
        						,"dsUp=dsFile"
        						,"userPath='edupack'"
        						,"fnCallback");
        };

        //파일삭제 및 내려받기
        this.grd00_oncellclick = function(obj,e)
        {
        	if(e.col == 5)
        	{
        		var sFileName = this.dsUp.getColumn(e.row, "FILE_ID");
        		if(this.gfnIsNull(this.dsUp.getColumn(e.row, "FILE_SIZE")))
        		{
        			this.dsUp.deleteRow(e.row);
        			this.FileUpTransfer00.removeFile(sFileName);

        		}
        		else{ // 서버에서 파일이 업로드되어있는..

        			this.gfnTransaction("svcFileDelete"
        								,"deleteUploadFile.do"
        								,""
        								,""
        								,"fileId=" +nexacro.wrapQuote(sFileName)
        								,"fnCallback");
        	}
        		}
        		else if(e.col == 6) //내려받기
        		{
        			var sFileId = this.dsUp.getColumn(e.row, "FILE_ID");
        			var sUrl = "SvcUrl::fileDownload.do";
        			this.FileDownTransfer00.setPostData("downFileId", sFileId);
        		    this.FileDownTransfer00.setPostData("downFileDs", encodeURIComponent(encodeURIComponent(this.dsUp.saveXML()))); // 전체내려받기는 데이터셋자체를 보내기
        			this.FileDownTransfer00.download(sUrl);
        		}
        };


        this.rmFileId = ""; //화면에서 똑같은 이름으로 파일을 받고
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	if(svcId == "svcFileDelete")
        	{
        		var nRow = this.dsUp.findRow("FILE_ID", this.rmFileId);
        		this.dsUp.deleteRow(nRow);

        	}
        }

        //선택파일 다운로드(dsUp 데이터에서 체크된거 다시 dsTemp로 카피해서 아이디값 가져와서하는 구조...)
        this.btn02_onclick = function(obj,e)
        {
        			var nCnt = this.dsUp.getCaseCount("CHECK =='1'"); // row의 전체개수 반환
        			if(nCnt == 0){ // 체크된게 없을때
        			alert("파일을 선택하세요");
        			}
        			else if(nCnt ==1){ // 체크된게 하나일때(단건)
        				var r = this.dsUp.findRow("CHECK", "1");
        				this.fnFileDown("single", this.dsUp.getColumn(r, "FILE_ID")); // 1인 체크로우의 아이디값 전달
        			}
        			else{ // 다건 다운로드(체크된게 두개 이상일때)

        			for(var i=0; i<this.dsUp.rowcount; i++)
        			{
        				if(this.dsUp.getColumn(i, "CHECK") == "1")
        				{
        					var nRow = this.dsTemp.addRow();
        					this.dsTemp.copyRow(nRow, this.dsUp, i);
        				}
        			}

        			//이름설정
        				this.fnFileDown("multi", "첨부파일.zip");
        			}
        };

        this.fnFileDown = function(pFlag, pFileName)
        {
        	if(pFlag == "single") // 체크하나
        	{
        		this.FileDownTransfer00.setPostData("downFileId", encodeURIComponent(encodeURIComponent(pFileName)));
        		//파일 다운로드 요청 시 서버로 전송할 데이터를 postdatalist 속성에 추가하는 메소드입니다.
        	}
        	else if(pFlag == "multi") // 체크여러개 (압축해서)?
        	{
        		this.FileDownTransfer00.setPostData("downFileId", ""); // 기존의 단건처리된 데이터를 다시 ""으로 넘겨줘서 서버에서 압축으로 서비스를 탈 수 있도록 처리
        		this.FileDownTransfer00.setPostData("downFileDs", encodeURIComponent(encodeURIComponent(this.dsTemp.saveXML())));
        	}

        	var sUrl = "SvcUrl::fileDownload.do"
        	this.FileDownTransfer00.set_downloadfilename(pFileName)//다운로드할때 다이얼로그창에 기본으로 띄울 이름, nre에서만 동작함
        	this.FileDownTransfer00.download(sUrl);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Emp_Exe_onload,this);
            this.addEventHandler("onkillfocus",this.Form_Emp_Exe_onkillfocus,this);
            this.addEventHandler("ondrop",this.Form_Emp_Exe_ondrop,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.grd00.addEventHandler("ondrop",this.grd00_ondrop,this);
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
        };
        this.loadIncludeScript("Form_File.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
