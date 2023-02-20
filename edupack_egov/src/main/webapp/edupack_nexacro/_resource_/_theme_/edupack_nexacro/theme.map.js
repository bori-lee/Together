(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#262626"),
            						"font" : nexacro.FontObject("13px \"Vedana\",\"Malgun Gothic\"")
            					},
            					"contents" :
            					{
            					}
            				}
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #1a0461")
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("0px 2px")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDecP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDecP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDecP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDecP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VInc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VIncP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VIncP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HInc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HIncP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HIncP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("2px 0px")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"font" : nexacro.FontObject("bold 13px \"Verdana\",\"Malgun Gothic\"")
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Min.png')"),
            								"padding" : nexacro.PaddingObject("8px 0px 0px")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_MinP.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_MinD.png')")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Max.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_MaxP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_MaxD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Normal.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_NormalP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_NormalD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Close.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_CloseP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_CloseD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"StatusBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            						"border" : nexacro.BorderObject("1px solid #c4c4c4, 0px none,0px none, 0px none")
            					}
            				}
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_WF_GTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b3b5b8"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"color" : nexacro.ColorObject("#0b1742")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c2c7e1"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"color" : nexacro.ColorObject("#0b1742")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c2c7e1")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GStatus" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"color" : nexacro.ColorObject("#746f6f")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GSize" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineV" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineV.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineH" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineH.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_FrmTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 16px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DesLabelTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_LabelTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 20px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_LabelTxt12" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 20px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Title13" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"font" : nexacro.FontObject("bold 13px \"Verdana\",\"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#424242")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Subtitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 13px \"Verdana\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("10px 0px 0px 25px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_Welcome" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #9790b0, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4, 0px none, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Section" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Description" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("10px 7px"),
            									"border" : nexacro.BorderObject("1px solid #d4c1f9"),
            									"font" : nexacro.FontObject("13px/21px \"Verdana\",\"MalgunGothic\""),
            									"wordWrap" : "char"
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TypeTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 13px \"Verdana\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_PdvCalbg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,1px solid #1a0461,1px solid #1a0461,1px solid #1a0461")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_PdvCalYYYY" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            								}
            							}
            						}
            					}
            				],
            				"self" :
            				{
            					"enabled" :
            					{
            						"wordWrap" : "char"
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("0px 8px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#9d9d9d")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"edt_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b797f7")
            								}
            							}
            						}
            					},
            					{
            						"edt_TF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #8893a3"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 2px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8893a3"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 2px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8893a3"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 2px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#7b8ca3"),
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #8893a3")
            								}
            							}
            						}
            					},
            					{
            						"edt_LF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"edt_LOGIN_ID" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 48px"),
            									"font" : nexacro.FontObject("18px \"Verdana\",\"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("18px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"edt_LOGIN_PW" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 48px"),
            									"font" : nexacro.FontObject("18px \"Verdana\",\"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("18px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"edt_WF_Readonly" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("0px 8px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#9d9d9d")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#e03c03")
            					}
            				},
            				"class" :
            				[
            					{
            						"msk_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b797f7")
            								}
            							}
            						}
            					},
            					{
            						"msk_WF_Readonly" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("8px 8px 0px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("13px/20px \"Verdana\", \"Malgun Gothic\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#9d9d9d")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"txt_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b797f7")
            								}
            							}
            						}
            					},
            					{
            						"txt_POP_Msg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #555555"),
            									"padding" : nexacro.PaddingObject("8px 8px 0px"),
            									"wordWrap" : "char",
            									"font" : nexacro.FontObject("13px/20px \"Verdana\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"pushed" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_WF_CRUD" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Find" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 25px"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 25px"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 25px"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 25px"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 25px"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#f5f5f5"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 25px"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Paging" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3c0ae0"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3c0ae0"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3c0ae0"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingDNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingDPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Mnu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 16px \"Verdana\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#3c0ae0"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 16px \"Verdana\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#3c0ae0"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 16px \"Verdana\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#3c0ae0"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 16px \"Verdana\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#3c0ae0"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 16px \"Verdana\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Pre" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Nxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#9d9d9d")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Open" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9, 1px solid #d9d9d9, 1px solid #d9d9d9, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Mnu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #302161, 1px solid #594e7a, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("2px solid #302161, 1px solid #594e7a, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("2px solid #302161, 1px solid #d6d3df, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("2px solid #302161, 1px solid #d6d3df, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("2px solid #302161, 1px solid #d6d3df, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Find" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_MymenuIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_MenuIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Btn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#f5f5f5"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Pre" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preN.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Nxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtN.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Max" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxN.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Min" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minN.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_V" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vN.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_H" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hN.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Allx" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxN.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Mnu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#d6d3df")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 14px \"Vedana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 14px \"Vedana\",\"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 14px \"Vedana\",\"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 14px \"Vedana\",\"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_X" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WT_MymnuS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_MymnuS.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_MymnuS.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_MymnuS.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_MymnuS.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_MymnuS.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_MymnuS.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WT_Mymnu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_Mymnu.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_Mymnu.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_Mymnu.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_Mymnu.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_Mymnu.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WT_Mymnu.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Login" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"btn_BF_Extend" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Del" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_RShuttle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LShuttle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_MultiCombo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleT" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleB" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleBN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleBN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleBM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleBM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleBD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleLM.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleLM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLP.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleR" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRM.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRP.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_SettingIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SettingIcon.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SettingIcon.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SettingIcon.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SettingIcon.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SettingIcon.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SettingIcon.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PrintIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PrintIcon.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PrintIcon.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PrintIcon.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PrintIcon.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PrintIcon.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PrintIcon.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_SaveIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_DeleteIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_InsertIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_RetrieveIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DnBtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DnBtnP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDn.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDn.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_Upbtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpbtnP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUp.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUp.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 8px")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px")
            					},
            					"disabled" :
            					{
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxM.png')")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxS.png')")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxMS.png')")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxDS.png')")
            					}
            				},
            				"class" :
            				[
            					{
            						"chk_WF_Toggle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOff.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOff.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOn.png')")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOn.png')")
            								}
            							}
            						}
            					}
            				]
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Item.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 8px")
            							},
            							"disabled" :
            							{
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemM.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemMS.png')")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemDS.png')")
            							}
            						}
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 10px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#3c0ae0")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 10px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#3c0ae0")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"cbo_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b797f7")
            								}
            							}
            						}
            					},
            					{
            						"cbo_LOGIN_Language" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3c0ae0")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3c0ae0")
            								}
            							}
            						}
            					}
            				]
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							}
            						},
            						"class" :
            						[
            							{
            								"cbo_LOGIN_Language" :
            								{
            									"self" :
            									{
            										"nulltext" :
            										{
            											"color" : nexacro.ColorObject("#9d9d9d"),
            											"font" : nexacro.FontObject("13px \"Verdana\",\"Malgun Gothic\"")
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							},
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtnP.png')")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            							}
            						},
            						"class" :
            						[
            							{
            								"cal_WF_Readonly" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"icon" : nexacro.UrlObject("url('theme://images/cal_WF_ReadDrop.png')")
            										},
            										"mouseover" :
            										{
            											"icon" : nexacro.UrlObject("url('theme://images/cal_WF_ReadDrop.png')")
            										},
            										"pushed" :
            										{
            											"icon" : nexacro.UrlObject("url('theme://images/cal_WF_ReadDrop.png')")
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            									}
            								}
            							},
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            									}
            								}
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtnP.png')")
            									}
            								}
            							},
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtnP.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"cal_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b797f7")
            								}
            							}
            						}
            					},
            					{
            						"cal_WF_Readonly" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#9d9d9d")
            							}
            						},
            						"class" :
            						[
            							{
            								"cal_WF_Readonly" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#7b7b7b")
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							},
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnDn.png')"),
            								"border" : nexacro.BorderObject("1px solid #c4c4c4,0px none,0px none,1px solid #c4c4c4")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnDnP.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnDnP.png')")
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnUp.png')"),
            								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c4c4c4")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnUpP.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnUpP.png')")
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("13px \"Verdana\",\"Malgun Gothic\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("13px \"Verdana\",\"Malgun Gothic\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtnP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtnP.png')")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtn.png')"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtnP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtnP.png')")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtn.png')"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtnP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtnP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#143a84")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ce2040")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#143a84")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ce2040")
            									},
            									"today" :
            									{
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#c4c4c4")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 20px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#3c0ae0")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#3c0ae0")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ExpandBtn.png')")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ExpandBtn.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("10px \"Verdana\",\"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#111111")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("10px \"Verdana\",\"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#111111")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 5px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 5px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ChkIcon.png')")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ChkIcon.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9d9d9d"),
            								"padding" : nexacro.PaddingObject("8px 10px")
            							},
            							"disabled" :
            							{
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9d9d9d,1px solid #9d9d9d,0px none,1px solid #9d9d9d"),
            								"color" : nexacro.ColorObject("#262626")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9d9d9d,1px solid #9d9d9d,0px none,1px solid #9d9d9d"),
            								"color" : nexacro.ColorObject("#262626")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MDI_Mnu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("8px 10px"),
            											"color" : nexacro.ColorObject("#c4c4c4")
            										},
            										"disabled" :
            										{
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"color" : nexacro.ColorObject("#262626")
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"color" : nexacro.ColorObject("#262626")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9d9d9d")
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_ExtraBtn.png')"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a6a6a6")
            							}
            						}
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Splitter" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c9c6c3")
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #eaebec")
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            										"padding" : nexacro.PaddingObject("4px 0px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #000000")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #000000")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/stp_WF_Item.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/stp_WF_ItemS.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/stp_WF_ItemS.png')")
            							}
            						}
            					}
            				}
            			},
            			"WebBrowser" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"View" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d9d9d9, 0px none")
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"expandbar" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarCollicon.png')")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarCollicon.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarExpicon.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"detail" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d9d9d9, 0px none")
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cell" :
            			{
            				"class" :
            				[
            					{
            						"lstv_WF_BdyCName" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCId" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCGender" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCLabel" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCValue" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DtailCLabel" :
            						{
            							"parent" :
            							{
            								"detail" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DtailCValue" :
            						{
            							"parent" :
            							{
            								"detail" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Padding" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #d8d9da"),
            															"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_LF_Level1" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_Tree" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#aca6c0")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				],
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #c6c7c9"),
            												"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\"")
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_WF_Noline" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none,0px none,1px solid #c6c7c9")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #d8d9da"),
            												"padding" : nexacro.PaddingObject("2px")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_TF_Search" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														}
            													}
            												}
            											},
            											{
            												"grd_LF_Tree" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#e0cc09")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#262626"),
            															"font" : nexacro.FontObject("bold 13px \"Verdana\", \"Malgun Gothic\"")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_Noline" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none,0px none,1px solid #d8d9da")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_Detail" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c4c4c4, 0px none"),
            															"font" : nexacro.FontObject("12px \"Verdana\",\"MAlgun Gothic\"")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #d8d9da")
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_WF_Noline" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none,0px none,1px solid #d8d9da")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChk.png')")
            							},
            							"disabled" :
            							{
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChkS.png')")
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChk.png')")
            							},
            							"disabled" :
            							{
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChkS.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("8px 8px 0px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("13px/20px \"Verdana\", \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_Read" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"padding" : nexacro.PaddingObject("3px 0px 0px 5px"),
            																	"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            																	"font" : nexacro.FontObject("13px \"Verdana\", \"Malgun Gothic\"")
            																},
            																"mouseover" :
            																{
            																	"padding" : nexacro.PaddingObject("3px 0px 0px 5px"),
            																	"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            																	"font" : nexacro.FontObject("13px \"Verdana\", \"Malgun Gothic\"")
            																},
            																"focused" :
            																{
            																	"padding" : nexacro.PaddingObject("3px 0px 0px 5px"),
            																	"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            																	"font" : nexacro.FontObject("13px \"Verdana\", \"Malgun Gothic\"")
            																},
            																"disabled" :
            																{
            																	"padding" : nexacro.PaddingObject("3px 0px 0px 5px"),
            																	"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            																	"font" : nexacro.FontObject("13px \"Verdana\", \"Malgun Gothic\"")
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						]
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("8px 8px 0px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("13px/20px \"Verdana\", \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_ExpandIcon.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_ExpandIcon.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #434343, 1px solid #c4c4c4, 1px solid #c4c4c4, 1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_TF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_Tree" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"cellprogressbar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("5px 0px")
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollBtn.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpBtn.png')")
            									}
            								}
            							},
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_LF_Tree" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeIconColl.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeIconExp.png')")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollImg.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpImg.png')")
            									},
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeImg.png')")
            									}
            								}
            							},
            							"cell" :
            							{
            								"class" :
            								[
            									{
            										"cell_LF_Lev1" :
            										{
            											"parent" :
            											{
            												"row" :
            												{
            													"parent" :
            													{
            														"body" :
            														{
            															"parent" :
            															{
            																"Grid" :
            																{
            																	"class" :
            																	[
            																		{
            																			"grd_LF_Tree" :
            																			{
            																				"self" :
            																				{
            																					"leaf" :
            																					{
            																						"icon" : nexacro.UrlObject("url('theme://images/grd_LF_Favlist.png')")
            																					}
            																				}
            																			}
            																		}
            																	]
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"treeitemcheckbox" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									},
            									"disabled" :
            									{
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxM.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxS.png')")
            									},
            									"mouseover_selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxMS.png')")
            									},
            									"disabled_selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxDS.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_WF_Area" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_Notice" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b797f7")
            								}
            							}
            						}
            					}
            				]
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdiv_WF_MultiCombo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true,
            			"hasListViewExpandStatus" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDec.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDecP.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VInc.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VIncP.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDec.png")] = { width:3, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDecP.png")] = { width:3, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HInc.png")] = { width:3, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HIncP.png")] = { width:3, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinP.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinD.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseP.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineV.png")] = { width:9, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineH.png")] = { width:17, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_Essential.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnBtn.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnBtnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_Upbtn.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxMS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxDS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Item.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemMS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemDS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropBtn.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropBtnP.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtn.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtnP.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDn.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUp.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUpP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDn.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnP.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnD.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUp.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpP.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpD.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_ExpandBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_ChkIcon.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_ExtraBtn.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_VSplitter.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_HSplitter.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/stp_WF_Item.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/stp_WF_ItemS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarCollicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarExpicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellChk.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellChkS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ExpandIcon.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImg.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImg.png")] = { width:16, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImg.png")] = { width:9, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Search.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SubtitleIcon.png")] = { width:12, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingNext.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingPrev.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingDNext.png")] = { width:12, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingDPrev.png")] = { width:12, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_NexacroN.png")] = { width:156, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_PreN.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_PreP.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NxtN.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NxtP.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Search.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Open.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Close.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Search.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_Find.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_Mymenu.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_MymenuS.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_Menu.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_MenuS.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeIconColl.png")] = { width:7, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeIconExp.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_Favlist.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Home.png")] = { width:19, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_preN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_preM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_preD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_nxtN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_nxtM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_nxtD.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maxN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maxM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maxD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_hN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_hM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_hD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_allxN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_allxM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_allxD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_XN.png")] = { width:30, height:33 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_XP.png")] = { width:30, height:33 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WT_MymnuS.png")] = { width:15, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WT_Mymnu.png")] = { width:15, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_ID.png")] = { width:40, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_PW.png")] = { width:40, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_Logo.png")] = { width:240, height:57 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_Title.png")] = { width:332, height:38 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_Main_Bg.png")] = { width:1500, height:679 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_Main_Center.png")] = { width:777, height:252 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Del.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_DotIcon.png")] = { width:10, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_MultiCombo.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTN.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTM.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTP.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTD.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleBN.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleBM.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBP.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleBD.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLN.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleLM.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLP.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLD.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRN.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRM.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRP.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRD.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SettingIcon.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PrintIcon.png")] = { width:20, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SaveIcon.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_DeleteIcon.png")] = { width:14, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_InsertIcon.png")] = { width:16, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RetrieveIcon.png")] = { width:16, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_ToggleOff.png")] = { width:80, height:31 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_ToggleOn.png")] = { width:80, height:31 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_ReadDrop.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_del.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LOGIN_Login.png")] = { width:220, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Home2.png")] = { width:19, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_SearchO.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_DOC.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_ETC.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_IMG.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_PDF.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_PPT.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_TXT.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_XLS.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_ZIP.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_MenuCollapse.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_MenuExpand.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeColl.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeCollapse.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeCollBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeExp.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeExpand.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeExpBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/image.png")] = { width:597, height:422 };
        		imgcache[nexacro._getImageLocation("theme://images/img_file.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Banner1.png")] = { width:960, height:480 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Banner2.png")] = { width:960, height:480 };
        		imgcache[nexacro._getImageLocation("theme://images/Login.png")] = { width:802, height:491 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_TOBE.png")] = { width:224, height:75 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_Main_Bg2.png")] = { width:992, height:461 };
        		imgcache[nexacro._getImageLocation("theme://images/title.png")] = { width:911, height:41 };
	};
}
)();
