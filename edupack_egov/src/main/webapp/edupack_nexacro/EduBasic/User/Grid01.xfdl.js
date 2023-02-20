(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Grid01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset2", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset3", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">John@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp10.png</Col><Col id=\"PHONE_NO\">0104293599</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp11.png</Col><Col id=\"PHONE_NO\">0107726763</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp12.png</Col><Col id=\"PHONE_NO\">0107314011</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp13.png</Col><Col id=\"PHONE_NO\">0109086335</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp14.png</Col><Col id=\"PHONE_NO\">0102320795</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp15.png</Col><Col id=\"PHONE_NO\">0106348086</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">300</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp16.png</Col><Col id=\"PHONE_NO\">0101251107</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp17.png</Col><Col id=\"PHONE_NO\">0104457429</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp18.png</Col><Col id=\"PHONE_NO\">0109825316</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp19.png</Col><Col id=\"PHONE_NO\">0103173402</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp20.png</Col><Col id=\"PHONE_NO\">0104643738</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp14.png</Col><Col id=\"PHONE_NO\">0102989094</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">100</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Ann@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp10.png</Col><Col id=\"PHONE_NO\">0107956572</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset4", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/><Column id=\"WEDD_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ORG_NAME\">nexacro</Col><Col id=\"ORG_CODE\">NP</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"ORG_NAME\">Korea Corporation</Col><Col id=\"ORG_CODE\">KR</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"ORG_NAME\">Joseph</Col><Col id=\"ORG_CODE\">KR000</Col><Col id=\"LEVEL\">2</Col><Col id=\"POSITION\">Chairman</Col><Col id=\"SALARY\">7000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0105339755</Col><Col id=\"E_MAIL\">Joseph@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"ORG_NAME\">Management Group</Col><Col id=\"ORG_CODE\">KR1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"ORG_NAME\">Anne</Col><Col id=\"ORG_CODE\">KR010</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Division Manager</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"E_MAIL\">Anne@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"ORG_NAME\">Education Team</Col><Col id=\"ORG_CODE\">KR11</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"ORG_NAME\">John </Col><Col id=\"ORG_CODE\">KR101</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0104293599</Col><Col id=\"E_MAIL\">John@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19871015</Col></Row><Row><Col id=\"ORG_NAME\">Jackson</Col><Col id=\"ORG_CODE\">KR102</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107726763</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19980502</Col></Row><Row><Col id=\"ORG_NAME\">Adam</Col><Col id=\"ORG_CODE\">KR103</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107314011</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Melon</Col><Col id=\"ORG_CODE\">KR104</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104316461</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Kate </Col><Col id=\"ORG_CODE\">KR105</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0102320795</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Sales Team</Col><Col id=\"ORG_CODE\">KR12</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"ORG_NAME\">Bts</Col><Col id=\"ORG_CODE\">KR106</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Andrew </Col><Col id=\"ORG_CODE\">KR107</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Department Manager</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Belle</Col><Col id=\"ORG_CODE\">KR108</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104457429</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19880505</Col></Row><Row><Col id=\"ORG_NAME\">Elsa</Col><Col id=\"ORG_CODE\">KR109</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">7000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0109825316</Col><Col id=\"E_MAIL\">Ann@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19861022</Col></Row><Row><Col id=\"ORG_NAME\">Marketing Team</Col><Col id=\"ORG_CODE\">KR13</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0103173402</Col><Col id=\"E_MAIL\">Lyle@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19971030</Col></Row><Row><Col id=\"ORG_NAME\">Kein </Col><Col id=\"ORG_CODE\">KR111</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104643738</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Ivy</Col><Col id=\"ORG_CODE\">KR112</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Department Manager</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0102989094</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"ORG_NAME\">Kara</Col><Col id=\"ORG_CODE\">KR113</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107956572</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20050203</Col></Row><Row><Col id=\"ORG_NAME\">Twice</Col><Col id=\"ORG_CODE\">KR114</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"ORG_NAME\">Japen Corporation</Col><Col id=\"ORG_CODE\">JP</Col><Col id=\"LEVEL\">1</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"E_MAIL\">Isaiah@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"ORG_NAME\">Oleg</Col><Col id=\"ORG_CODE\">JP000</Col><Col id=\"LEVEL\">2</Col><Col id=\"POSITION\">Chairman</Col><Col id=\"SALARY\">7000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0105339755</Col><Col id=\"E_MAIL\">Oleg@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"ORG_NAME\">Management Group</Col><Col id=\"ORG_CODE\">JP1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"ORG_NAME\">Aladdin</Col><Col id=\"ORG_CODE\">JP010</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Division Manager</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"E_MAIL\">Aladdin@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"ORG_NAME\">Education Team</Col><Col id=\"ORG_CODE\">JP11</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0106851530</Col><Col id=\"E_MAIL\">Evelyn@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19880623</Col></Row><Row><Col id=\"ORG_NAME\">Cameron</Col><Col id=\"ORG_CODE\">JP101</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0104293599</Col><Col id=\"E_MAIL\">Cameron@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19871015</Col></Row><Row><Col id=\"ORG_NAME\">Duncan</Col><Col id=\"ORG_CODE\">JP102</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107726763</Col><Col id=\"E_MAIL\">Duncan@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19980502</Col></Row><Row><Col id=\"ORG_NAME\">September</Col><Col id=\"ORG_CODE\">JP103</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107314011</Col><Col id=\"E_MAIL\">September@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Daquan</Col><Col id=\"ORG_CODE\">JP104</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104316461</Col><Col id=\"E_MAIL\">Daquan@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Channing</Col><Col id=\"ORG_CODE\">JP105</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0102320795</Col><Col id=\"E_MAIL\">Channing@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Sales Team</Col><Col id=\"ORG_CODE\">JP12</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107642474</Col><Col id=\"E_MAIL\">Lenore@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19890505</Col></Row><Row><Col id=\"ORG_NAME\">Curran</Col><Col id=\"ORG_CODE\">JP106</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"E_MAIL\">Curran@nexacro.com</Col><Col id=\"MARRIED\">0</Col><Col id=\"WEDD_DAY\">20140720</Col></Row><Row><Col id=\"ORG_NAME\">Idona</Col><Col id=\"ORG_CODE\">JP107</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Department Manager</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"E_MAIL\">Idona@nexacro.com</Col><Col id=\"MARRIED\">0</Col><Col id=\"WEDD_DAY\">20150531</Col></Row><Row><Col id=\"ORG_NAME\">Sopoline</Col><Col id=\"ORG_CODE\">JP108</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104457429</Col><Col id=\"E_MAIL\">Sopoline@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19880505</Col></Row><Row><Col id=\"ORG_NAME\">Cedric</Col><Col id=\"ORG_CODE\">JP109</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">7000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0109825316</Col><Col id=\"E_MAIL\">Cedric@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19861022</Col></Row><Row><Col id=\"ORG_NAME\">Lyle</Col><Col id=\"ORG_CODE\">JP110</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0103173402</Col><Col id=\"E_MAIL\">Lyle@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19971030</Col></Row><Row><Col id=\"ORG_NAME\">Marketing Team</Col><Col id=\"ORG_CODE\">JP13</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"ORG_NAME\">Adam</Col><Col id=\"ORG_CODE\">JP111</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104643738</Col><Col id=\"E_MAIL\">Adam@nexacro.com</Col><Col id=\"MARRIED\">0</Col><Col id=\"WEDD_DAY\">19971116</Col></Row><Row><Col id=\"ORG_NAME\">Hyatt</Col><Col id=\"ORG_CODE\">JP112</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Department Manager</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0102989094</Col><Col id=\"E_MAIL\">Hyatt@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"ORG_NAME\">Melanie</Col><Col id=\"ORG_CODE\">JP113</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107956572</Col><Col id=\"E_MAIL\">Melanie@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20050203</Col></Row><Row><Col id=\"ORG_NAME\">Isaiah</Col><Col id=\"ORG_CODE\">JP114</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"E_MAIL\">Isaiah@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"ORG_NAME\">Dakota</Col><Col id=\"ORG_CODE\">JP115</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0108938528</Col><Col id=\"E_MAIL\">Dakota@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20050407</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset5", this);
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"BONUS\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">John </Col><Col id=\"ID\">KR101</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Jackson</Col><Col id=\"ID\">KR102</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Adam</Col><Col id=\"ID\">KR103</Col><Col id=\"SALARY\">3000</Col><Col id=\"BONUS\">50</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Melon</Col><Col id=\"ID\">KR104</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1000</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kate </Col><Col id=\"ID\">KR105</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">200</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Bts</Col><Col id=\"ID\">KR106</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Andrew </Col><Col id=\"ID\">KR107</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Belle</Col><Col id=\"ID\">KR108</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Elsa</Col><Col id=\"ID\">KR109</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">100</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kein </Col><Col id=\"ID\">KR110</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ivy</Col><Col id=\"ID\">KR111</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">300</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kara</Col><Col id=\"ID\">KR112</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Twice</Col><Col id=\"ID\">KR113</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">John </Col><Col id=\"ID\">KR101</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Jackson</Col><Col id=\"ID\">KR102</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kate </Col><Col id=\"ID\">KR105</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">200</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Bts</Col><Col id=\"ID\">KR106</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Andrew </Col><Col id=\"ID\">KR107</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Belle</Col><Col id=\"ID\">KR108</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Elsa</Col><Col id=\"ID\">KR109</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">100</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kein </Col><Col id=\"ID\">KR110</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ivy</Col><Col id=\"ID\">KR111</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">300</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Twice</Col><Col id=\"ID\">KR113</Col><Col id=\"SALARY\">4000</Col><Col id=\"BONUS\">200</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset6", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset7", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd01","510","24","500","238",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"175\"/><Column size=\"177\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"DEPT\"/><Cell col=\"2\" rowspan=\"2\" text=\"MARRIED\"/><Cell row=\"1\" text=\"NAME \"/><Cell row=\"1\" col=\"1\" text=\"HIRE_DATE\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:MARRIED\"/><Cell row=\"1\" text=\"bind:FULL_NAME\"/><Cell row=\"1\" col=\"1\" text=\"bind:HIRE_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","24","487","246",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","16","285","94","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","115","286","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Grid1과 Grid1_1의 Body 밴드 Column과 Cell의 개수.");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","15","330","95","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1_2");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","115","334","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text(" Cell에 바인드 되어있는 Dataset 컬럼 ID 구하기.\r");
            this.addChild(obj.name, obj);

            obj = new Grid("grd02","28","393","562","147",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","600","393","83","41",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","695","397","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Dataset2에 “COL_CHK” 컬럼을 추가하고 초기값을 “0”으로 지정. ");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","597","450","86","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("2_2");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","695","450","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("해당 컬럼의 Head와 Body Cell을 “checkbox” 형태로 표현");
            this.addChild(obj.name, obj);

            obj = new Grid("grd03","30","22","881","242",null,null,null,null,null,null,this);
            obj.set_cellsizingtype("col");
            obj.set_taborder("11");
            obj.set_positionstep("1");
            obj.set_binddataset("Dataset3");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"POS_CODE\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"BONUS\"/><Cell col=\"7\" text=\"GENDER\"/><Cell col=\"8\" text=\"MARRIED\"/><Cell col=\"9\" text=\"E_MAIL\"/><Cell col=\"10\" text=\"PHONE_NO\"/><Cell col=\"11\" text=\"IMG_URL\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:POS_CODE\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:BONUS\"/><Cell col=\"7\" text=\"bind:GENDER\"/><Cell col=\"8\" text=\"bind:MARRIED\"/><Cell col=\"9\" text=\"bind:E_MAIL\"/><Cell col=\"10\" text=\"bind:PHONE_NO\"/><Cell col=\"11\" text=\"bind:IMG_URL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","28","276","82","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("3_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","30","312","81","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("3_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","120","270","372","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("컬럼 이동, 사이즈 변경 가능하게 속성 변경. // 그리드 속성 > cellmovingtype을 col로 변경, 사이즈도 cellsizetype을 col로 주면 사이즈 변경가능 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","118","318","372","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3번째 컬럼(Name)까지 고정, 3번째 Row까지 고정");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","28","354","82","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("3_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","120","350","372","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("컬럼고정, Row고정 해제.\r");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","517","269","103","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("3_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","624","271","372","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("3번째 컬럼(Name) 사이즈 100px로 지정, 6번째 컬럼(Salary) 숨기기");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn08","517","316","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("3_5");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","628","317","372","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("컬럼 숨기기 취소");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","520","360","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("3-6");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00","628","355","372","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("원본 그리드 포맷과 현재 변경한 그리드 포맷 비교.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd04","34","400","416","148",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_positionstep("1");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd05","486","400","532","148",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_positionstep("1");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd06","12","14","928","280",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_positionstep("2");
            obj.set_binddataset("Dataset4");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"157\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ORG_NAME\"/><Cell col=\"1\" text=\"ORG_CODE\"/><Cell col=\"2\" text=\"LEVEL\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"PHONE_NO\"/><Cell col=\"7\" text=\"E_MAIL\"/><Cell col=\"8\" text=\"MARRIED\"/><Cell col=\"9\" text=\"WEDD_DAY\"/><Cell col=\"10\" text=\"COL_CHK\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL\"/><Cell col=\"1\" text=\"bind:ORG_CODE\"/><Cell col=\"2\" text=\"bind:LEVEL\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:PHONE_NO\"/><Cell col=\"7\" text=\"bind:E_MAIL\"/><Cell col=\"8\" text=\"bind:MARRIED\"/><Cell col=\"9\" text=\"bind:WEDD_DAY\"/><Cell col=\"10\" text=\"bind:COL_CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd07","6","10","904","432",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_positionstep("3");
            obj.set_binddataset("Dataset5");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/><Column size=\"165\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"99\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"CORP\"/><Cell col=\"1\" text=\"DEPT\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"ID\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/><Cell col=\"6\" text=\"getRowLevel\"/><Cell col=\"7\" text=\"getRowType\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow) == 2? CORP + &quot;소계&quot; : CORP\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"expr:dataset.getRowLevel(currow) == 0 ? DEPT : dataset.getRowLevel(currow) == 1 ? DEPT + &quot;소계&quot; : &quot;&quot;\" suppress=\"2\" suppressalign=\"last\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:ID\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:BONUS\"/><Cell col=\"6\" text=\"expr:dataset.getRowLevel(currow)\"/><Cell col=\"7\" text=\"expr:dataset.getRowType(currow)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","20","447","92","33",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("5_1");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","133","444","293","38",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("법인(CORP), 부서(DEPT)별 소계 표현하기");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn11","16","486","94","29",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("5_2");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","133","482","293","38",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Summary 밴드 추가하고, SALARY 칼럼 총 합계 표현");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn12","18","519","92","29",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("5_3");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","127","520","293","38",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("소계와 Summary 밴드를 상단에 표현하기");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd08","16","17","584","247",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_positionstep("4");
            obj.set_binddataset("Dataset6");
            obj.set_autofittype("col");
            obj.set_fastvscrolltype("centerdisplay");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn13","25","272","84","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("6_1");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","124","272","474","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("컬럼의 넓이를 조절");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn14","25","317","84","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("6_2");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00","124","314","474","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("선택단위 설정");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","281","284","97","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd09","20","18","578","372",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_positionstep("5");
            obj.set_binddataset("Dataset7");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn15","20","401","95","33",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("btn15");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn16","20","445","95","38",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("btn16");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("6");
            obj.set_stepindex("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt00","value","Dataset6","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Grid01.xfdl", function() {

        this.grd00_oncellclick = function(obj,e)
        {
        	trace(e.col + "===" + e.cell);  // 세로출력 컬럼, 가로 셀 1:1으로 매칭되서 똑같이 나온다.
        };

        this.grd01_oncellclick = function(obj,e)
        {
        	trace(e.col + "===" + e.cell); // 컬럼과 셀이 다르게나옴..
        };

        this.btn00_onclick = function(obj,e)
        {
        	var nColCnt1 = this.grd00.getFormatColCount();
        	var nColCnt2 = this.grd01.getFormatColCount();
        	var nCellCnt1 = this.grd00.getCellCount("body"); // 헤드의 값을 얻고싶으면 헤드를 넣으면 된다.
        	var nCellCnt2 = this.grd01.getCellCount("body");
        	trace("grid00 col = " +nColCnt1 + "cell = " + nCellCnt1);
        	trace("grid01 col = " +nColCnt2 + "cell = " + nCellCnt2);
        };

        this.btn01_onclick = function(obj,e)
        {
        	var nCellCnt = this.grd00.getCellCount("body");
        	for(var i=0; i<nCellCnt; i++)
        	{
        		var sColId = this.grd00.getCellProperty("body", i, "text"); // Cell 의 특정 속성값을 반환하는 메소드
        		trace("@@"+sColId); // 바디값의 텍스트를 가져오겠다..
        		var arrCol = sColId.split(":"); //문자열을 여러 개의 부분 문자열로 분할하여 배열로 반환하는 메소드
        		// 데이터셋의 텍스트에 보면 bind:DEPT_CODE 이런형식으로 텍스트에 있어서 : 로 스플릿을 잘라서 표현
        		trace("ColumnID = " + arrCol[1] + "==" + arrCol[0]);

        	}

        };

        // 그리드에 onheadclick 이벤트.. ????
        this.grd00_onheadclick = function(obj,e) // Grid Head 클릭 시 데이터 Sort구현 오름차순으로
        {
        // 	var sColId = this.grd00.getCellProperty("body", e.cell, "text").split(":"); // 바디셀의 인덱스를 넘겨주고, text 를 얻게되고 잘라줌
        // 	var objDs = obj.getBindDataset(); //그리드의 propery에서 바인딩한걸 꺼내는 메소드, 모를떄는 f1 눌러서 내용 찾기
        // 	trace("sColId = " + sColId[1]);
        // 	objDs.set_keystring("S:" + sColId[1]);

        	this.fn_sort(obj, e);
        };


        //구글 드라이버 grid_sample1 ???
        this.CONST_NONE_MARK = "";
        this.CONST_ASC_MARK = "+";
        this.CONST_DESC_MARK = "-";
        this.nPrevCell = -1;
        this.fn_sort = function (obj, e)
        {
            if(obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") return; // 체크박스면 할필요없으니까?...
        	var objDs     = obj.getBindDataset();
        	var sColId    = obj.getCellProperty("body", e.cell, "text").split(":");
        	var sHeadText = obj.getCellText(-1, e.cell);

        	if(sHeadText.substr(sHeadText.length-1) == this.CONST_ASC_MARK){ // 오름차순
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DESC_MARK);
        		objDs.set_keystring("S:-" + sColId[1]);
        	}
        	else if(sHeadText.substr(sHeadText.length-1) == this.CONST_DESC_MARK){ // 내림차순
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_ASC_MARK);
        		objDs.set_keystring("S:+" + sColId[1]);
        	}
        	else{
        		obj.setCellProperty("head", e.cell, "text", sHeadText + this.CONST_ASC_MARK);
        		objDs.set_keystring("S:+" + sColId[1]);
        	}

        	if(this.nPrevCell > -1 && this.nPrevCell != e.cell){
        		var sPrevText = obj.getCellText(-1, this.nPrevCell);
        		obj.setCellProperty("head", this.nPrevCell, "text", sPrevText.substr(0, sPrevText.length - 1));
        	}

        	this.nPrevCell = e.cell;
        }


        this.btn02_onclick = function(obj,e)
        {
        	this.Dataset2.addColumn("COL_CHK", "STRING", 1);
        	this.Dataset2.set_enableevent(false);
        	for(var i=0; i<this.Dataset2.getRowCount(); i++)
        	{
        		this.Dataset2.setColumn(i, "COL_CHK", 0); // 값 세팅
        	}
        	this.Dataset2.set_enableevent(true); //초기화까지 완료
        	this.grd02.insertContentsCol("body", 0); // 바디에 0을 삽입
        	this.grd02.setCellProperty("body", 0, "text", "bind:COL_CHK"); // 바인드 설정
        };


        //Cell 의 특정 속성값을 설정하는 메소드 displaytype, edittyp, 체크박스 주기
        this.btn03_onclick = function(obj,e)
        //(스트링, 인덱스,
        {
        	this.grd02.setCellProperty("body", 0, "displaytype", "1"); // Cell 이 편집상태가 아닐 때 바인드 된 데이터가 화면에 표시되는 형식을 설정하는 속성입니다.
        	this.grd02.setCellProperty("body", 0, "edittype", "checkbox"); //Cell 이 포커스를 받아 표시되는 편집창의 형식을 설정하는 속성입니다.

        	this.grd02.setCellProperty("head", 0, "displaytype", "checkboxcontrol");
        	this.grd02.setCellProperty("head", 0, "edittype", "checkbox");

        };

        //2-1누르고 2-2누른다음 헤더 전체선택과 전체해제  ???
        this.grd02_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		var nValue = this.grd02.getCellText(-1,0); // 인수로 전달된 위치의 Cell 에 표시되는 텍스트값을 반환하는 메소드입니다.
        		//Grid.getCellText( nRow, nCellIdx )

        		nValue = (nValue == "1" ? "0" : "1");
        		this.Dataset2.set_enableevent(false); //// for 문 앞에 Dataset이벤트 멈추기
        		for(var i =0; i<this.Dataset2.getRowCount(); i++)
        		{
        			this.Dataset2.setColumn(i, "COL_CHK", nValue);
        		}
        		this.Dataset2.set_enableevent(true);
        		this.grd02.setCellProperty("Head", 0, "text", nValue); // 헤더와 summery는 스크립트로 넣어줘야한다. 헤드의 0에 텍스트 값
        	}
        };

        //속성 혹은 스크립트해서 할 수 있다. 속성은 왠만하면 스크립트보다는..
        this.btn04_onclick = function(obj,e)
        {
        	this.grd03.set_cellmovingtype("col");
        	this.grd03.set_cellsizingtype("col");
        };

        this.btn05_onclick = function(obj,e)
        {
        	this.grd03.setFixedRow(2); // 로우 고정
        	this.grd03.setFormatColProperty(2, "band", "left"); // 밴드 왼쪽으로 컬럼의 값 고정
        };

        // 전체 복원.
        this.btn06_onclick = function(obj,e)
        {
        	for(var i=0; i<this.grd03.getFormatColCount(); i++) // Grid 에 표시되고 있는 포맷에 정의된 Column의 개수를 반환하는 메소드
        	{
        		this.grd03.setFormatColProperty(i, "band", "body"); // 밴드를 바디로 세팅
        	}
        	this.grd03.setFixedRow(-1); // 초기화를 시키겠다.
        };

        this.btn07_onclick = function(obj,e)
        {
        	this.grd03.setFormatColProperty(1, "size", 100);
        	this.grd03.setFormatColProperty(5, "size", 0);
        };


        this.btn08_onclick = function(obj,e)
        {
        	this.grd03.setFormatColProperty(5, "size", 80);
        };

        //왼쪽은 바뀐것, 오른쪽은 오리지널
        this.btn09_onclick = function(obj,e)
        {
        	var sCurFormat = this.grd03.getCurFormatString();
        	this.grd04.set_formats("<Formats>" + sCurFormat + "</Formats>");

        	var sOrgFormat = this.grd03.getCurFormatString(true);
        	this.grd05.set_formats("<Formats>" + sOrgFormat + "</Formats>");

        };


        this.grd06_oncelldblclick = function(obj,e)
        {
        	var nGridRow = this.grd06.getTreeRow(e.row); // 선택한 레코드의 인덱스 정보
        	var nStatus = this.grd06.getTreeStatus(nGridRow); // 펼쳐져있느냐, 닫혀져있느냐 리턴.
        	if(nStatus == 3) return; // 3번은 더이상 펼쳐질게 없는것. 그래서 펼칠이유가 없으니까 리턴 .끝난거
        	nStatus = (nStatus == 0 ? 1 : 0); // 펼치고 닫고하는 것
        	this.grd06.setTreeStatus(nGridRow, nStatus);


        };

        //그룹핑됨
        this.btn10_onclick = function(obj,e)
        {
        	this.Dataset5.set_keystring("G:-CORP,+DEPT"); // DataSet 에 로드된 데이터를 그룹핑할 기준이 되는 조건식을 설정하는 속성(S: 속성, G: 그룹핑)
        };


        this.btn11_onclick = function(obj,e)
        {
        	this.grd07.appendContentsRow("summary");
        	this.grd07.setCellProperty("summary", 4, "text", this.Dataset5.getSum("SALARY"));
        };

        //다시 원상복귀, 합계를 아래쪽으로 내리기 (위쪽으로올리는거는 직접 선택해서 실습함)
        this.btn12_onclick = function(obj,e)
        {
        	this.Dataset5.set_reversesubsum(false);
        	this.grd07.set_summarytype("defalut");
        };

        // Dataset에 바로 변경???
        this.edt00_oninput = function(obj,e)
        {
        	obj.updateToDataset(); // TextArea 의 value 속성값을 바인딩 되어 있는 DataSet 에 즉시 반영시키는 메소드입니다
        };


        // date를 강제로 열어주는 것 (달력이 바로 펼쳐짐)
        this.grd08_oncellclick = function(obj,e)
        {
        if(e.cell == 3)
        	{
        		obj.dropdownCalendar();
        		//obj.dropdownCombo();//달력이아니라 콤보일때
        		}

        };

        //??? 포맷이름바꾸기...
        this.btn15_onclick = function(obj,e)
        {
        	this.grd09.set_formatid("default");
        };

        //???
        this.btn16_onclick = function(obj,e)
        {
        	this.grd09.set_formatid("default_00");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.Grid01_onclick,this);
            this.grd01.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.grd00.addEventHandler("onheadclick",this.grd00_onheadclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.grd02.addEventHandler("onheadclick",this.grd02_onheadclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.sta00_00_00.addEventHandler("onclick",this.sta00_00_00_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.sta00_00_00_00.addEventHandler("onclick",this.sta00_00_00_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn07_onclick,this);
            this.btn08.addEventHandler("onclick",this.btn08_onclick,this);
            this.btn09.addEventHandler("onclick",this.btn09_onclick,this);
            this.grd06.addEventHandler("oncelldblclick",this.grd06_oncelldblclick,this);
            this.btn10.addEventHandler("onclick",this.btn10_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta02_onclick,this);
            this.btn11.addEventHandler("onclick",this.btn11_onclick,this);
            this.btn12.addEventHandler("onclick",this.btn12_onclick,this);
            this.grd08.addEventHandler("oncellclick",this.grd08_oncellclick,this);
            this.edt00.addEventHandler("onchanged",this.edt00_onchanged,this);
            this.edt00.addEventHandler("oninput",this.edt00_oninput,this);
            this.btn15.addEventHandler("onclick",this.btn15_onclick,this);
            this.btn16.addEventHandler("onclick",this.btn16_onclick,this);
        };
        this.loadIncludeScript("Grid01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
