(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DataSet01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DataSet01", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">John@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DataSet04", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew</Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DataSet05", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("DataSet06", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew</Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","26","13","1000","333",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("DataSet01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"E_MAIL\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:BONUS\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:E_MAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","20","440","102","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","20","364","700","66",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","158","431","534","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1-1 데이터셋이 컬럼(Column) 개수와 레코드(Row)개수, 컬럼명(Column ID)를 구하기.\r");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","15","497","110","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1-2");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","158","490","498","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("컬럼을 추가 ID : COL_CHK");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","20","550","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","149","555","302","43",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" 단일조건 - 사원번호가 “KR120”인 사원의 성명 구하기. ");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","150","609","302","43",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("복합조건 - 부서코드가 \"K10\"이고 급여가 5,000이하인 사원 구하기 ");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","26","614","106","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("2-2");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","521","480","147","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2-3");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","672","485","498","33",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("부서가 “K10”인 사원 목록 구하기");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","532","548","152","33",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("3-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","700","544","498","33",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("평균을 구하는 방법 ");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","545","608","113","42",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("3-2");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","671","610","498","33",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("급여와 보너스를 합친 금액의 평균 금액 계산.\r");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","30","680","105","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("3-3");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","159","670","302","43",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("입사일을 기준으로 내림차순 정렬.\r");
            this.addChild(obj.name, obj);

            obj = new Button("btn08","552","680","112","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("3-4");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","678","684","498","33",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("남성이고 미혼인 데이터만 필터");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","30","732","114","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("3-5");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00","158","725","302","43",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("필터 전과 후의 건수 확인 ");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","551","743","117","27",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("3-6");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00","679","730","498","33",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("e가포함된 데이터 추출 ");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","824","731","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","15","17","1010","503",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_positionstep("1");
            obj.set_binddataset("DataSet04");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"SALARY\"/><Cell col=\"4\" text=\"GENDER\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:SALARY\"/><Cell col=\"4\" text=\"bind:GENDER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn11","37","217","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("4_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","211","219","252","56",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("최상위에 새로운 Row를 삽입하고 Row 상태값을 확인");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn12","42","285","128","36",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("4_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00","211","282","252","56",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("두번째 Row의 성명 컬럼을 “Nexacro”로 변경하고 레코드 상태값 확인.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn13","41","338","125","39",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("4_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00_00","204","336","252","56",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("변경되기 전과 후의 성명 데이터 확인.\r");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn14","43","397","123","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("4_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_00","200","390","252","56",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Row Index 가 3,4,5인 레코드를 멀티 삭제 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn15","44","457","125","33",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("4_5");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_00_00","194","442","252","56",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("삭제한 레코드 개수와 삭제한 성명데이터 구하기");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn16","490","217","132","47",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("변경여부");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd02","42","542","778","175",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_positionstep("1");
            obj.set_binddataset("DataSet05");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn17","45","721","119","53",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("5_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_00_00_00","174","718","252","56",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Dataset4를 Dataset5로 복사.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn18","367","727","108","39",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("5_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_00_00_00_00","480","721","252","56",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("4에서 입력, 수정한 정보 모두 복사.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn19","697","731","133","33",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("btn19");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn20","37","790","122","36",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("5_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_00_00_00_01","170","771","252","56",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("특정한 레코드 복사");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn21","366","795","109","27",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("5_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd03","20","13","833","351",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_positionstep("2");
            obj.set_binddataset("DataSet06");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"SALARY\"/><Cell col=\"4\" text=\"GENDER\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:SALARY\"/><Cell col=\"4\" text=\"bind:GENDER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn22","20","374","82","44",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("6_1");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","112","377","258","46",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("이벤트 발생");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn23","20","430","88","39",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("6_2");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","118","426","258","46",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("이벤트 중단");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_00_00_00_01_00","490","774","252","56",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("특정한 레코드의 특정 칼럼만 복사");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,850,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("3");
            obj.set_stepindex("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DataSet01.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var nColCount = this.DataSet01.getColCount(); // 데이터셋의 컬럼개수를 얻을 수 있다.
        	var nRowCount = this.DataSet01.getRowCount(); // 데이터셋의 데이터개수를 얻을 수 있다.
        	this.txt00.set_value(nColCount + ":" + nRowCount);
        	trace(nColCount);
        	trace(nRowCount);
        	for(var i=0; i<nColCount; i++){
        // 			var sColId = this.DataSet01.getColID(i); // 컬럼의 아이디를 구하는 것.
        // 			trace("ColID = " + sColId);

        			var objCol = this.DataSet01.getColumnInfo(i); // 컬럼의 아이디뿐 아니라 다른 것도 얻고싶을 떄
        			trace(objCol.id + ":" + objCol.size + ":" + objCol.type);

        	}

        };

        this.sta00_onclick = function(obj,e)
        {

        };

        //???????????
        this.btn01_onclick = function(obj,e)
        {
        	this.DataSet01.addColumn("COL_CHK", "STRING", 1); // 컬럼을 추가할때
        };


        this.btn02_onclick = function(obj,e)
        {
        	//var nRow = this.DataSet01.findRow("EMPL_ID", "KR120"); // 데이터셋에서 검색할때 로우의 인덱스정보를 넘김
        	// 여러건이있어도 findRow는 제일 첫번째 정보 하나만 가져온다.해결건 2-2버튼 참고
        	//var sVal = this.DataSet01.getColumn(nRow, "FULL_NAME"); // 해당 인덱스의 성명정보를 가져옴 E

        	sVal = this.DataSet01.lookup("EMPL_ID", "KR120", "FULL_NAME"); // 이렇게 한번에 해결가능함
        	trace("Name : " + sVal); // 디버깅
        	this.txt00.set_value(sVal); // 또는 텍스트로도 출력
        };


        this.btn03_onclick = function(obj,e)
        {
        	var nRow = this.DataSet01.findRowExpr("DEPT_CODE == 'K10' && SALARY <= 7000"); // AND 조건 OR 조건은 ||
        	trace("@@"+nRow);
        	var sVal = this.DataSet01.getColumn(nRow, "FULL_NAME");
        	trace(sVal);
        };

        this.btn04_onclick = function(obj,e)
        {
        	var arrRow = this.DataSet01.extractRows("DEPT_CODE == 'K10'"); // arrary로 넘어온다
        	for(var i=0; i<arrRow.length; i++){
        		var sVal = this.DataSet01.getColumn(arrRow[i], "FULL_NAME");
        		trace(sVal);
        	}

        };

        this.btn05_onclick = function(obj,e)
        {
        	var nAvgM = this.DataSet01.getCaseAvg("GENDER == 'M'", "SALARY");
        	var nAvgW1 = this.DataSet01.getCaseAvg("GENDER == 'W'", "SALARY");
        	var nAvgW2 = this.DataSet01.getCaseAvg("GENDER == 'W'", "SALARY", 0, -1, false); // 데이터가 없는것도 평균에 포함시킬꺼냐...
        	this.txt00.set_value("M:"+ nAvgM + "-W:" + nAvgW1 + "-W:" + nAvgW2);
        	trace("M:" + nAvgM + "-W:" + nAvgW1 + "-W:" + nAvgW2);
        };

        this.btn06_onclick = function(obj,e)
        {
        	var nAvg = this.DataSet01.getAvg("SALARY + BONUS");
        	trace("급여+보너스 평균"+ nAvg);
        };

        this.btn07_onclick = function(obj,e)
        {
        	this.DataSet01.set_keystring("S:-DEPT_CODE"); // keystring은 property이다. set_는 굳이 스크립트할필요없이 property에 하면됨
        	//- 내림차순, + 오름차순

        };

        this.btn08_onclick = function(obj,e)
        {
        	this.DataSet01.filter("GENDER == 'M' && MARRIED == '0'");
        	//this.DataSet01.filter("GENDER == 'W' && MARRIED == '0'");
        };



        this.btn09_onclick = function(obj,e)
        {
        	var nCnt = this.DataSet01.getRowCount(); // 필터된 데이터개수
        	var nCntNF = this.DataSet01.getRowCountNF(); //NF = NOT FILTER의 약자 필터안된 데이터개수(전체)
        	trace(nCnt + "===" + nCntNF)
        };

        ///???? 한번 더 보고 이해하기
        this.btn10_onclick = function(obj,e)
        {
        	var sText = this.edt00.value; // edt00은 옆에 만들어준 edit
        	if(sText == undefined){
        		sText = "";  // 값이 아무것도 입력되지않았으면 undefined
        	}


        	this.DataSet01.filter("String(FULL_NAME).toUpperCase().indexOf('" +
        							nexacro.replaceAll(sText,"'","\\'").toUpperCase() + "') >=0");
        							// 스트링자체가 문자열의 조합, 중간에 싱글이 하나들어와서 nexacro.replaceAll을 써야한다.

        };

        this.btn11_onclick = function(obj,e)
        {
        	var nRow = this.DataSet04.insertRow(0);
        	var nType = this.DataSet04.getRowType(nRow);
        	trace("type = " + nType);
        };

        this.btn12_onclick = function(obj,e)
        {
        	this.DataSet04.setColumn(1, "FULL_NAME", "Nexacro");
        	var a = this.DataSet04.getRowType(1); // f1눌러서 value값 확인가능
        	trace("type : "+ a);
        };


        this.btn13_onclick = function(obj,e)
        {
        	var sCurData = this.DataSet04.getColumn(1, "FULL_NAME");
        	var sOrgData = this.DataSet04.getOrgColumn(1, "FULL_NAME");
        	trace("sCurData =" + sCurData); // 바뀐값
        	trace("sOrgData = " + sOrgData); // 초기값
        };

        this.btn14_onclick = function(obj,e)
        {   // 3가지 기능
        	//var arrRow = [3,4,5];
        	arrRow = this.grd01.getSelectedDatasetRows(); // 멀티로삭제를하는데, 그리드 속성에서 selecttype에서 multirow로 바꿔주고, 선택된 인덱스 삭제
        	//this.DataSet04.deleteMultiRows(arrRow); // 멀티삭제
        	this.DataSet04.deleteRow(this.DataSet04.rowposition); // 한 라인당 삭제 현재위치 삭제

        };

        this.btn15_onclick = function(obj,e)
        {
        	var nDelCnt = this.DataSet04.getDeletedRowCount(); // 삭제된 Row 갯수를 확인
        	var sDelData = this.DataSet04.getDeletedColumn(0, "FULL_NAME"); // 삭제할떄는 인덱스 거꾸로 삭제된다.
        	trace(nDelCnt + "==" + sDelData);
        };

        this.btn16_onclick = function(obj,e)
        {
        	this.fn_dataCheck(this.DataSet04);
        	//this.fn_dataCheck(this.DataSet01);
        };

        this.fn_dataCheck = function(objDs)
        {

        	if(objDs.getDeletedRowCount() >0)
        	{
        		//alert("삭제");
        		return true;

        	}
        	for(var i =0; i<objDs.getRowCount(); i++)
        	{
        		var nRowType = objDs.getRowType(i);

        		if(nRowType == 2 || nRowType == 4)
        		{
        			//alert("신규 또는 수정");
        			return true;
        		}

        	}
        	return false;
        }

        this.DataSet01_onbeforeclose = function(obj,e)
        {
        	if(this.fn_dataCheck(this.DataSet04))
        	{
        		return "변경정보가 있습니다. 닫으시겠습니까?";
        	}
        };

        //데이터를 복사해주되, row type은 복사 x
        this.btn17_onclick = function(obj,e)
        {
        	this.DataSet05.copyData(this.DataSet04); // 데이터 4를 데이터5로 복사해라
        	this.grd02.createFormat();
        };
        // type 다르게 나옴
        this.btn18_onclick = function(obj,e)
        {
        	this.DataSet05.assign(this.DataSet04); //  Dataset의 변경 전 Origin Buffer 정보까지 복사 됨
        	this.grd02.createFormat();
        };

        this.btn19_onclick = function(obj,e)
        {
        	for(var i=0; i<this.DataSet05.getRowCount(); i++)
        	{

        		trace(i + "==" + this.DataSet05.getRowType(i));
        	}
        };

        // 사원번호가 “KR210”인 Row 중 성명과 사원번호 컬럼만 Dataset5에 복사.
        this.btn20_onclick = function(obj,e)
        {
        	var nFrow = this.DataSet04.findRow("EMPL_ID", "KR120");
        	var nTrow = this.DataSet04.addRow();
        	this.DataSet05.copyRow(nTrow, this.DataSet04, nFrow);

        };

        //????....  사원번호가 “KR210”인 Row 중 성명과 사원번호 컬럼만 Dataset5에 복사.
        this.btn21_onclick = function(obj,e)
        {
        	var nFrow = this.DataSet04.findRow("EMPL_ID", "KR120"); // 복사할 칼럼 찾고
        	var nTrow = this.DataSet05.addRow(); // 대상 데이터 추가
        	var sCol = "EMPL_ID=FULL_NAME, FULL_NAME=EMPL_ID"; // 특정칼럼만. 칼럼명 변경 가능
        	this.DataSet05.copyRow(nTrow, this.DataSet04, nFrow, sCol); //
        };


        //Dataset의 Column 값이 변경될 때 발생하는 이벤트 // 데이터변경할때 항상 can에서 잡음
        this.DataSet06_cancolumnchange = function(obj,e)
        {
            //중복처리 로직 (중복메세지 발생하면서 원복해줌, 바뀌지 않음)
        	var nCnt = obj.findRowExpr("FULL_NAME == '" + e.newvalue + "' && currow != " + e.row);
        		if(nCnt >=0)
        		{
        			alert("중복")
        			return false;
        		}
        	trace("DataSet06_cancolumnchange");

        }

        //Dataset 의 Column 값이 변경된 후 발생하는 이벤트
        this.DataSet06_oncolumnchanged = function(obj,e)
        {
        	trace("DataSet06_oncolumnchanged");

        };

        this.btn22_onclick = function(obj,e)
        {
        	this.DataSet06.setColumn(0, "FULL_NAME", "Nexacro");

        };


        this.btn23_onclick = function(obj,e)
        {
        	var iCnt = this.DataSet06.getRowCount();
        	this.DataSet06.set_enableevent(false); // 이벤트 중단 (반드시 밑에 true설정해줘야함)
        	for(var i=0; i<iCnt; i++)
        	{
        		this.DataSet06.setColumn(i, "FULL_NAME", "Nexacro" + i);
        	}
        	this.DataSet06.set_enableevent(true);
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.DataSet01_onbeforeclose,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn07_onclick,this);
            this.btn08.addEventHandler("onclick",this.btn08_onclick,this);
            this.btn09.addEventHandler("onclick",this.btn09_onclick,this);
            this.btn10.addEventHandler("onclick",this.btn10_onclick,this);
            this.edt00.addEventHandler("onchanged",this.edt00_onchanged,this);
            this.btn11.addEventHandler("onclick",this.btn11_onclick,this);
            this.btn12.addEventHandler("onclick",this.btn12_onclick,this);
            this.btn13.addEventHandler("onclick",this.btn13_onclick,this);
            this.btn14.addEventHandler("onclick",this.btn14_onclick,this);
            this.btn15.addEventHandler("onclick",this.btn15_onclick,this);
            this.btn16.addEventHandler("onclick",this.btn16_onclick,this);
            this.btn17.addEventHandler("onclick",this.btn17_onclick,this);
            this.sta03_00_00_00_00_00.addEventHandler("onclick",this.sta03_00_00_00_00_00_onclick,this);
            this.btn18.addEventHandler("onclick",this.btn18_onclick,this);
            this.btn19.addEventHandler("onclick",this.btn19_onclick,this);
            this.btn20.addEventHandler("onclick",this.btn20_onclick,this);
            this.btn21.addEventHandler("onclick",this.btn21_onclick,this);
            this.btn22.addEventHandler("onclick",this.btn22_onclick,this);
            this.btn23.addEventHandler("onclick",this.btn23_onclick,this);
            this.DataSet06.addEventHandler("cancolumnchange",this.DataSet06_cancolumnchange,this);
            this.DataSet06.addEventHandler("oncolumnchanged",this.DataSet06_oncolumnchanged,this);
        };
        this.loadIncludeScript("DataSet01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
