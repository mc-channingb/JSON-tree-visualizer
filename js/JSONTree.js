(function () {
	var dummyContent = '{"id":17,"name":"DA_PAYMENTS.PROCESSPAYMENT","children":[{"id":18,"name":"DA_PAYMENTS.PARSESESSIONVALUESJSONREC","children":[{"id":19,"name":"DA_UTILITIES.LOGJSON"}]},{"id":74,"name":"INET_PAYMENT.PROCESSMULTIEMVPAYMENT","children":[{"id":76,"name":"PAYMENTS.PROCESSPAYMENT","children":[{"id":77,"name":"PAYMENTS.PROCESSARPAYMENT","children":[{"id":78,"name":"PAYMENTS.GENERATERECONNECTFEES","children":[{"id":85,"name":"ACCOUNTS.CREATEINVOICE","children":[{"id":127,"name":"ACCOUNTS.PROCESSSPECIFICCREDIT","children":[{"id":128,"name":"ACCOUNTS.PROCESSTAXCREDITS","children":[{"id":129,"name":"INVOICE.GETINVOICEMASTER"},{"id":130,"name":"INVOICE.GETINVOICEDETAIL"}]},{"id":129,"name":"INVOICE.GETINVOICEMASTER"},{"id":130,"name":"INVOICE.GETINVOICEDETAIL"},{"id":131,"name":"PAYMENTS.PROCESSCREDITMEMO","children":[{"id":162,"name":"MS_V30_CD_SERVER.POSTOPENPAYCONNECT","children":[{"id":163,"name":"MS_V30_CD_SERVER.POSTMETERCONNECTDISCONNECT","children":[{"id":164,"name":"MS_V30_CD_SERVER.ROUTESOTOFAILURE","children":[{"id":165,"name":"SERVICEORDER.ROUTESO","children":[{"id":168,"name":"SERVICEORDER.ASSIGNRESOURCE","children":[{"id":42,"name":"SERVICEORDER.CUTSOACTION"},{"id":167,"name":"SERVICEORDER.GETSO"},{"id":169,"name":"SERVICEORDER.GETCREWCODE"},{"id":170,"name":"SERVICEORDER.VALIDRESOURCE"},{"id":176,"name":"FIN_STAKINGSHEET.UPDATE_STAKINGSHEETMASTER","children":[{"id":174,"name":"FIN_STAKINGSHEET.GET_STAKINGSHEETMASTER"},{"id":200,"name":"FIN_STAKINGSHEET.LOG_STAKINGSHEETMASTER","children":[{"id":201,"name":"FIN_STAKINGSHEET.CREATE_STAKINGSHEETMST_JOURNAL"}]},{"id":177,"name":"FIN_STAKINGSHEET.POST_ATC","children":[{"id":178,"name":"FIN_STAKINGSHEET.UPDATE_ESTIMATE_ATTRIBUTES","children":[{"id":179,"name":"FIN_STAKINGSHEET.ESTIMATE_HAS_ATTRIBUTE","children":[{"id":180,"name":"FIN_STAKINGSHEET.GET_ESTIMATE_ATTRIBUTE","children":[{"id":181,"name":"FIN_STAKINGSHEET.GET_COMPONENTCOST_JOBCOST","children":[{"id":182,"name":"FIN_STAKINGSHEET.CREATEMIPROJECTCOSTREC","children":[{"id":183,"name":"FIN_STAKINGSHEET.IS_VALID_JOBCOSTMATERIAL"}]}]}]}]}]}]}]},{"id":172,"name":"SERVICEORDER.GETRESOURCENAME"},{"id":173,"name":"SERVICEORDER.GETSSHEETID"},{"id":174,"name":"FIN_STAKINGSHEET.GET_STAKINGSHEETMASTER"},{"id":175,"name":"FIN_PROJECT.GET_PROJECTMASTER"},{"id":171,"name":"SERVICEORDER.GETACTIVITYNAME"}]},{"id":166,"name":"SERVICEORDER.VALIDACTIVITYID"},{"id":167,"name":"SERVICEORDER.GETSO"},{"id":42,"name":"SERVICEORDER.CUTSOACTION"}]}]}]}]},{"id":48,"name":"ACCOUNTS.GETACCOUNT"},{"id":132,"name":"PAYMENTS.PROCESSINVTRUEUPCM","children":[{"id":123,"name":"INVOICE.UPDATEINVOICEBALANCE","children":[{"id":124,"name":"INVOICE.GETINVOICEBALANCE"},{"id":125,"name":"INVOICE.GETINVOICEBILLEDBALANCE"}]},{"id":133,"name":"PAYMENT_INVOICE_PROCESS.GETCASHCLEARINGGL","children":[{"id":134,"name":"PAYMENT_INVOICE_PROCESS.GETTHIRDPARTYGLNUMBER"},{"id":135,"name":"PAYMENT_INVOICE_PROCESS.GETBRANCHGLNUMBER"}]},{"id":136,"name":"PAYMENTS.CUTPAYMENTMASTER","children":[{"id":137,"name":"PAYMENTS.GETRESOURCEID"},{"id":138,"name":"ATS_ENCRYPTION.MASK"}]},{"id":139,"name":"PAYMENTS.GETADJUSTMENTINVOICES"},{"id":140,"name":"PAYMENT_INVOICE_PROCESS.GETINVLINEITEM"},{"id":141,"name":"PAYMENT_INVOICE_PROCESS.ASSIGNDEBITANDCREDITNUMBERS"},{"id":142,"name":"PAYMENTS.CUTPAYMENTDETAIL","children":[{"id":91,"name":"ACCOUNTS.GETCOMPANYID"}]},{"id":143,"name":"INVOICE.UPDATEINVOICELINEBALANCE","children":[{"id":144,"name":"INVOICE.GETINVOICELINEBALANCE"}]},{"id":145,"name":"PAYMENT_INVOICE_PROCESS.GETINVOICELINEITEMS","children":[{"id":146,"name":"PAYMENTS.CHECKIFCUTOFFINVOICE"},{"id":147,"name":"PAYMENTS.GETNSFCHECKDETAILSFORACCT"}]},{"id":148,"name":"ARRANGEMENTS.PROCESSBILLEDINSTALLMENTPMT","children":[{"id":149,"name":"DEPOSITS.GETDEPOSITARBALANCE"},{"id":150,"name":"ACCOUNT_REGISTERS.CUT_ARGMT_DEP_INSTALL_REGISTER"},{"id":151,"name":"DEPOSITS.UPDATEDEPOSITARBALANCE","children":[{"id":149,"name":"DEPOSITS.GETDEPOSITARBALANCE"}]},{"id":152,"name":"DEPOSITS.UPDATEDEPOSITPAYABLEBALANCE","children":[{"id":153,"name":"DEPOSITS.GETDEPOSITPAYABLEBALANCE"}]},{"id":154,"name":"DEPOSITS.GETDEPOSIT"},{"id":155,"name":"DEPOSITS.SETDEPOSITEFFECTIVEDATEBYDEPID","children":[{"id":156,"name":"DEPOSITS.SETUPNEXTANNIVERSARYDATE"},{"id":157,"name":"DEPOSITS.LOGDEPOSIT","children":[{"id":80,"name":"ACCOUNTS.GETACCTSUBTYPEIDBYACCOUNTNO"},{"id":158,"name":"DEPOSITS.GETWAIVERREASONLABEL"},{"id":159,"name":"DEPOSITS.GETDEPOSITTYPEDATA"}]},{"id":154,"name":"DEPOSITS.GETDEPOSIT"}]}]}]}]}]},{"id":48,"name":"ACCOUNTS.GETACCOUNT"},{"id":86,"name":"CONFIGURATIONS.GETCHARGECODEDATA"},{"id":87,"name":"STATEMENTS_HELPER.GETLASTSTATEMENTINFO"},{"id":89,"name":"STATEMENTS_HELPER.GETMINUNPAIDSTATEMENTINFO","children":[{"id":87,"name":"STATEMENTS_HELPER.GETLASTSTATEMENTINFO","children":[{"id":88,"name":"STATEMENTS_HELPER.CUR_GETLASTSTATEMENTREC"},{"id":88,"name":"STATEMENTS_HELPER.CUR_GETLASTSTATEMENTREC"}]}]},{"id":90,"name":"INVOICE.CUTINVOICEMASTER","children":[{"id":91,"name":"ACCOUNTS.GETCOMPANYID"},{"id":92,"name":"INVOICE.CUTINVOICEMASTERITEMIZED"}]},{"id":93,"name":"ACCOUNTS.ASSIGNREVENUECLASSGLNUMBERS","children":[{"id":26,"name":"CUSTOMATTRIBUTES.GETCUSTOMATTRIBUTEVALUE"},{"id":48,"name":"ACCOUNTS.GETACCOUNT"},{"id":94,"name":"ACCOUNTS.GETACCOUNTREVENUEITEMS"},{"id":95,"name":"LOCATION_SERVICES.GETSERVICE"}]},{"id":96,"name":"INVOICE.CUTINVOICEDETAIL","children":[{"id":26,"name":"CUSTOMATTRIBUTES.GETCUSTOMATTRIBUTEVALUE"},{"id":48,"name":"ACCOUNTS.GETACCOUNT"},{"id":86,"name":"CONFIGURATIONS.GETCHARGECODEDATA"},{"id":97,"name":"INVOICE.GETDEPTNOACTIVITYID"},{"id":98,"name":"INVOICE.GETSLKWH"},{"id":99,"name":"INVOICE.CALCULATEINVOICETAXES"},{"id":100,"name":"TAX.GETTAXTIERINVOICES","children":[{"id":36,"name":"TAX.GETTAXRATESDETAIL"},{"id":101,"name":"TAX.APPLYFUELADJDISCOUNT"},{"id":102,"name":"TAX.CALCCENTTAXTIER"},{"id":103,"name":"BILLING_CALC.GETTIERRATECALC"},{"id":104,"name":"TAX.GETTAXINVOICE","children":[{"id":105,"name":"TAX.TAXRATEISCOMPARISON"},{"id":107,"name":"BILLING_RATES.GETQUANTITY","children":[{"id":87,"name":"STATEMENTS_HELPER.GETLASTSTATEMENTINFO","children":[{"id":88,"name":"STATEMENTS_HELPER.CUR_GETLASTSTATEMENTREC"}]},{"id":109,"name":"BILLING_RATES.GETMAXREADINGNOTBILLED"},{"id":110,"name":"ACCOUNTS.BEENBILLED"},{"id":108,"name":"BILLING_RATES.GETPRIORUNBILLEDDOS"}]},{"id":106,"name":"TAX.GETTAXPERCENTAGESOURCE"}]}]},{"id":111,"name":"ACCOUNTS.UPDATEELECTRICACCOUNTBALANCE","children":[{"id":112,"name":"ACCOUNTS.GETELECTRICACCOUNTBALANCE"},{"id":113,"name":"ACCOUNTS.GETBILLEDACCTBALANCE"}]},{"id":114,"name":"ACCOUNTS.GETACCOUNTREGISTERBALANCE"},{"id":115,"name":"ACCOUNT_REGISTERS.CUTREGISTER","children":[{"id":116,"name":"ATS_PREPAID_METERING.CUTPREPAIDREGISTER","children":[{"id":48,"name":"ACCOUNTS.GETACCOUNT"}]},{"id":117,"name":"ATS_PREPAID_METERING.CUTARRECAPTUREREGISTER","children":[{"id":118,"name":"ATS_PREPAID_METERING.GETARRECAPTUREREGBALANCE"}]}]},{"id":119,"name":"INVOICE.CUTFRANCHISETAXDETAIL"},{"id":120,"name":"INVOICE.CUTINVOICEDETAILEXT","children":[{"id":98,"name":"INVOICE.GETSLKWH"}]},{"id":121,"name":"INVOICE.CUTINVOICEPOSTING"},{"id":122,"name":"INVOICE.CUTINVOICEDETAILITEMIZED"},{"id":123,"name":"INVOICE.UPDATEINVOICEBALANCE","children":[{"id":124,"name":"INVOICE.GETINVOICEBALANCE"},{"id":125,"name":"INVOICE.GETINVOICEBILLEDBALANCE"}]},{"id":126,"name":"INVOICE.CUTINVOICEMETERDETAIL"}]}]},{"id":47,"name":"CUTOFF_MGMT.GETCUTOFFS"},{"id":79,"name":"CUTOFF_MGMT.CALCULATERECONNECTCHGFORSONO"},{"id":80,"name":"ACCOUNTS.GETACCTSUBTYPEIDBYACCOUNTNO"},{"id":81,"name":"CUTOFF_MGMT.CALCASTRECONNECTCHGFORSONO","children":[{"id":82,"name":"CUTOFF_MGMT.GETCUTOFFTICKET"}]},{"id":83,"name":"CUTOFF_MGMT.CALCULATERECONNECTCHARGE"},{"id":84,"name":"CUTOFF_MGMT.CALCULATEASTRECONNECTCHARGE"}]},{"id":30,"name":"PAYMENTS.PROCESSACCOUNTSTOPAY","children":[{"id":28,"name":"PAYMENTS.GETCISACCTNOFOREXTERNALACCOUNT"},{"id":43,"name":"CONTACT_INFO.GETACCOUNTPRIMARYCONTACTDATA","children":[{"id":44,"name":"CONTACT_INFO.GETCONTACTID"},{"id":45,"name":"CONTACT_INFO.GETCONTACTDATA","children":[{"id":3,"name":"ATS_ENCRYPTION.DECRYPT","children":[{"id":4,"name":"ATS_ENCRYPTION_NEW.DECRYPT"}]},{"id":46,"name":"CONTACT_INFO.GETCONTACTSYSTEM"}]}]},{"id":31,"name":"ACCOUNTS.BUILDEXTERNALACCOUNT","children":[{"id":37,"name":"CONTACT_INFO.PUTCONTACT","children":[{"id":38,"name":"CONTACT_INFO.UPDATECONTACTNAME"},{"id":39,"name":"CONTACT_INFO.CUTCONTACTNAME"}]},{"id":40,"name":"CONTACT_INFO.CUTCONTACTRECORD","children":[{"id":41,"name":"SERVICEORDER.UPDATESOGENDUPEBILLCONTACT","children":[{"id":42,"name":"SERVICEORDER.CUTSOACTION"}]}]},{"id":32,"name":"ACCOUNTS.CUTACCOUNT","children":[{"id":33,"name":"ACCOUNTS.LOGACCOUNTCHANGES"},{"id":34,"name":"TAX.INSERTACCOUNTTAXPROFILE","children":[{"id":35,"name":"TAX.GETTAXRATE"},{"id":36,"name":"TAX.GETTAXRATESDETAIL"},{"id":33,"name":"ACCOUNTS.LOGACCOUNTCHANGES"}]}]}]}]}]}]},{"id":75,"name":"PAYMENTS.UPDATEACCOUNTSTOPAYALL"}]},{"id":23,"name":"DA_PAYMENTS.PARSESAVEPAYMENTTBLS","children":[{"id":19,"name":"DA_UTILITIES.LOGJSON"}]},{"id":24,"name":"DA_PAYMENTS.INITPAYMENTSESSIONVALUES","children":[{"id":25,"name":"PAYMENTS.GETEXTERNALACCOUNTDESC"},{"id":26,"name":"CUSTOMATTRIBUTES.GETCUSTOMATTRIBUTEVALUE"}]},{"id":27,"name":"PAYMENTS.GETSTATEMENTID"},{"id":28,"name":"PAYMENTS.GETCISACCTNOFOREXTERNALACCOUNT"},{"id":29,"name":"DA_PAYMENTS.PROCESSEXTERNALACCOUNT","children":[{"id":30,"name":"PAYMENTS.PROCESSACCOUNTSTOPAY","children":[{"id":28,"name":"PAYMENTS.GETCISACCTNOFOREXTERNALACCOUNT"},{"id":31,"name":"ACCOUNTS.BUILDEXTERNALACCOUNT","children":[{"id":32,"name":"ACCOUNTS.CUTACCOUNT","children":[{"id":33,"name":"ACCOUNTS.LOGACCOUNTCHANGES"},{"id":34,"name":"TAX.INSERTACCOUNTTAXPROFILE","children":[{"id":33,"name":"ACCOUNTS.LOGACCOUNTCHANGES"},{"id":35,"name":"TAX.GETTAXRATE"},{"id":36,"name":"TAX.GETTAXRATESDETAIL"}]}]},{"id":37,"name":"CONTACT_INFO.PUTCONTACT","children":[{"id":38,"name":"CONTACT_INFO.UPDATECONTACTNAME"},{"id":39,"name":"CONTACT_INFO.CUTCONTACTNAME"}]},{"id":40,"name":"CONTACT_INFO.CUTCONTACTRECORD","children":[{"id":41,"name":"SERVICEORDER.UPDATESOGENDUPEBILLCONTACT","children":[{"id":42,"name":"SERVICEORDER.CUTSOACTION"}]}]}]},{"id":43,"name":"CONTACT_INFO.GETACCOUNTPRIMARYCONTACTDATA","children":[{"id":44,"name":"CONTACT_INFO.GETCONTACTID"},{"id":45,"name":"CONTACT_INFO.GETCONTACTDATA","children":[{"id":3,"name":"ATS_ENCRYPTION.DECRYPT","children":[{"id":4,"name":"ATS_ENCRYPTION_NEW.DECRYPT"}]},{"id":46,"name":"CONTACT_INFO.GETCONTACTSYSTEM"}]}]}]}]},{"id":44,"name":"CONTACT_INFO.GETCONTACTID"},{"id":45,"name":"CONTACT_INFO.GETCONTACTDATA","children":[{"id":3,"name":"ATS_ENCRYPTION.DECRYPT","children":[{"id":4,"name":"ATS_ENCRYPTION_NEW.DECRYPT"}]},{"id":46,"name":"CONTACT_INFO.GETCONTACTSYSTEM"}]},{"id":47,"name":"CUTOFF_MGMT.GETCUTOFFS","children":[{"id":48,"name":"ACCOUNTS.GETACCOUNT"}]},{"id":49,"name":"DA_PAYMENTS.VERIFYCONTROLNO","children":[{"id":48,"name":"ACCOUNTS.GETACCOUNT"},{"id":50,"name":"PAYMENTS.VERIFYSTATEMENTID"},{"id":51,"name":"PAYMENTS.GETSTATEMENTACCOUNTS"},{"id":52,"name":"PAYMENTS.VERIFYACCOUNTNO"}]},{"id":53,"name":"DA_PAYMENTS.LOADBADDEBTPAYMENTS","children":[{"id":54,"name":"DA_PAYMENTS.PARSEDABADDEBTPAYMENTS","children":[{"id":19,"name":"DA_UTILITIES.LOGJSON"}]}]},{"id":55,"name":"PAYMENTS_ELEC.CREATEINETPAYMENTRECORD"},{"id":56,"name":"PAYMENTS_ELEC.UPDATEINETPAYMENTRECORD"},{"id":59,"name":"INET_PAYMENT.CREATEANDPROCESSINETPAYMENT","children":[{"id":55,"name":"PAYMENTS_ELEC.CREATEINETPAYMENTRECORD"},{"id":56,"name":"PAYMENTS_ELEC.UPDATEINETPAYMENTRECORD","children":[{"id":57,"name":"ATS_ENCRYPTION.ENCRYPT","children":[{"id":58,"name":"ATS_ENCRYPTION_NEW.ENCRYPT"}]},{"id":57,"name":"ATS_ENCRYPTION.ENCRYPT","children":[{"id":58,"name":"ATS_ENCRYPTION_NEW.ENCRYPT"}]}]},{"id":60,"name":"PAYMENTS_ELEC.PROCESSINETPAYMENT","children":[{"id":61,"name":"PAYMENTS_ELEC.LOGTRANSACTIONERROR","children":[{"id":62,"name":"MEMBER.LOGMEMBERCHANGES"},{"id":33,"name":"ACCOUNTS.LOGACCOUNTCHANGES"}]},{"id":63,"name":"PAYMENTS_ELEC.CREATEDRAFTPAYMENT","children":[{"id":64,"name":"INET.GETINETUSERID"},{"id":65,"name":"INET.GETINETRESOURCEID"},{"id":66,"name":"PAYMENTS_BATCH.BATCHPAYMENTWARNING","children":[{"id":47,"name":"CUTOFF_MGMT.GETCUTOFFS","children":[{"id":48,"name":"ACCOUNTS.GETACCOUNT"},{"id":48,"name":"ACCOUNTS.GETACCOUNT"}]},{"id":48,"name":"ACCOUNTS.GETACCOUNT"},{"id":51,"name":"PAYMENTS.GETSTATEMENTACCOUNTS"},{"id":67,"name":"MEMBER.GETBANKRUPTCY"},{"id":68,"name":"CREDIT.NOMORECHECKSFLAGFORACCOUNT"},{"id":70,"name":"PAYMENTS.GETJUDGEMENTS","children":[{"id":71,"name":"PAYMENTS.GETMEMBERNO"}]},{"id":72,"name":"PAYMENTS.GETWARRANTS","children":[{"id":71,"name":"PAYMENTS.GETMEMBERNO"}]},{"id":73,"name":"BAD_DEBT.BADDEBT_EXISTS"}]}]}]}]},{"id":20,"name":"DA_PAYMENTS.PARSEPROCESSPAYMENT","children":[{"id":21,"name":"DA_UTILITIES.YNFLAGTOBOOLEAN"},{"id":22,"name":"DA_UTILITIES.CONVERTJSONDATE"},{"id":19,"name":"DA_UTILITIES.LOGJSON"}]}]}';
	//var parsedContent = JSON.stringify(JSON.parse(dummyContent), null, "\t")
	document.getElementById("jsoncontent").value = dummyContent;
	callJSONTree();

	//event binding
	var visualize = document.getElementById("visualize");
	visualize.addEventListener("click", callJSONTree, true);
	var vertical = document.getElementsByName("vertical_horizontal")[0];
	var horizontal = document.getElementsByName("vertical_horizontal")[1];
	vertical.addEventListener("change", callJSONTree, true);
	horizontal.addEventListener("change", callJSONTree, true);
})();

function callJSONTree() {
	formatJSON();
	document.getElementById("jsontree").innerHTML = "";
	var latestJSON = document.getElementById("jsoncontent").value;
	if (document.getElementsByName("vertical_horizontal")[0].checked) {
		JSONTree(latestJSON, true);
	} else {
		JSONTree(latestJSON, false);
	}
}

function formatJSON() {
	try {
		var parsedContent = JSON.stringify(JSON.parse(document.getElementById("jsoncontent").value), null, "\t");
	} catch (e) {
		alert("Invalid JSON");
		return false;
	}
	document.getElementById("jsoncontent").value = parsedContent;
}

function JSONTree(jsonContent, isHorizontal) {
	isHorizontal = (isHorizontal === undefined || isHorizontal === true ? true : false);
	try {
		jsonContent = JSON.parse(jsonContent);
	} catch (e) {
		return;
	}
	var m = [20, 120, 20, 120],
		w = 100000 - m[1] - m[3],
		h = 100000 - m[0] - m[2],
		//w = 2000 - m[1] - m[3],
		//h = 800 - m[0] - m[2],
		i = 0,
		root;

	var tree = d3.layout.tree()
		.size([h, w]);

	var diagonal = d3.svg.diagonal()
		.projection(function (d) {
			if (isHorizontal === true) {
				return [d.x, d.y];
			} else {
				return [d.y, d.x];
			}
		});

	var vis = d3.select("#jsontree").append("svg:svg")
		.attr("padding", 20)
		.attr("width", w + m[1] + m[3])
		.attr("height", h + m[0] + m[2])
		.append("svg:g")
		.attr("class", 'drawarea')
		.attr("transform", "translate(" + m[0] + "," + m[3] + ")");
	var json = prepareFn(jsonContent);
	root = json;
	root.x0 = h / 2;
	root.y0 = 0;

	function toggleAll(d) {
		if (d.children) {
			d.children.forEach(toggleAll);
			toggle(d);
		}
	}

	// Initialize the display to show a few nodes.
	//root.children.forEach(toggleAll);
	//toggle(root.children[1]);
	/*toggle(root.children[1].children[2]);
			toggle(root.children[9]);
			toggle(root.children[9].children[0]);
		*/
	update(root);
	vis.call(zoom);


	function update(source) {
		var duration = d3.event && d3.event.altKey ? 5000 : 500;

		// Compute the new tree layout.
		var nodes = tree.nodes(root).reverse();

		// Normalize for fixed-depth.
		nodes.forEach(function (d) {
			d.y = d.depth * 350;
		});

		// Update the nodes…
		var node = vis.selectAll("g.node")
			.data(nodes, function (d) {
				return d.id || (d.id = ++i);
			});

		// Enter any new nodes at the parent's previous position.
		var nodeEnter = node.enter().append("svg:g")
			.attr("class", "node")
			.attr("transform", function (d) {
				if (isHorizontal === true) {
					return "translate(" + source.x0 + "," + source.y0 + ")";
				} else {
					return "translate(" + source.y0 + "," + source.x0 + ")";
				}
			})
			.on("click", function (d) {
				toggle(d);
				update(d);
			});

		nodeEnter.append("svg:circle")
			.attr("r", 1e-6)
			.style("fill", function (d) {
				return d._children ? "lightsteelblue" : "#fff";
			});

		nodeEnter.append("svg:text")
			.attr("x", function (d) {
				return 20;
			})
			.attr("dy", ".35em")
			.attr("text-anchor", function (d) {
				return "start";
			})
			.text(function (d) {
				return d.name;
			})
			.style("fill-opacity", 1e-6);

		// Transition nodes to their new position.
		var nodeUpdate = node.transition()
			.duration(duration)
			.attr("transform", function (d) {
				if (isHorizontal === true) {
					return "translate(" + d.x + "," + d.y + ")";
				} else {
					return "translate(" + d.y + "," + d.x + ")";
				}
			});

		nodeUpdate.select("circle")
			.attr("r", 4.5)
			.style("fill", function (d) {
				return d._children ? "lightsteelblue" : "#fff";
			});

		nodeUpdate.select("text")
			.style("fill-opacity", 1);

		// Transition exiting nodes to the parent's new position.
		var nodeExit = node.exit().transition()
			.duration(duration)
			.attr("transform", function (d) {
				return "translate(" + source.x + "," + source.y + ")";
			})
			.remove();

		nodeExit.select("circle")
			.attr("r", 1e-6);

		nodeExit.select("text")
			.style("fill-opacity", 1e-6);

		// Update the links…
		var link = vis.selectAll("path.link")
			.data(tree.links(nodes), function (d) {
				return d.target.id;
			});

		// Enter any new links at the parent's previous position.
		link.enter().insert("svg:path", "g")
			.attr("class", "link")
			.attr("d", function (d) {
				var o = {
					x: source.x0,
					y: source.y0
				};
				return diagonal({
					source: o,
					target: o
				});
			})
			.transition()
			.duration(duration)
			.attr("d", diagonal);

		// Transition links to their new position.
		link.transition()
			.duration(duration)
			.attr("d", diagonal);

		// Transition exiting nodes to the parent's new position.
		link.exit().transition()
			.duration(duration)
			.attr("d", function (d) {
				var o = {
					x: source.x,
					y: source.y
				};
				return diagonal({
					source: o,
					target: o
				});
			})
			.remove();

		// Stash the old positions for transition.
		nodes.forEach(function (d) {
			d.x0 = d.x;
			d.y0 = d.y;
		});
		d3.select("svg")
			.call(d3.behavior.zoom()
				.scaleExtent([0.5, 5])
				.on("zoom", zoom));

		//get svg element.
		var svg = document.getElementsByTagName('svg')[0];

		//get svg source.
		var serializer = new XMLSerializer();
		var source = serializer.serializeToString(svg);

		//add name spaces.
		if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
			source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
		}
		if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
			source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
		}

		//add xml declaration
		source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

		//convert svg source to URI data scheme.
		var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

		//set url value to a element's href attribute.
		document.getElementById("link").href = url;
		//you can download svg file by right click menu.

}

function zoom() {
	if (d3.event) {
		var scale = d3.event.scale,
			translation = d3.event.translate,
			tbound = -h * scale,
			bbound = h * scale,
			lbound = (-w + m[1]) * scale,
			rbound = (w - m[3]) * scale;
		// limit translation to thresholds
		translation = [
			Math.max(Math.min(translation[0], rbound), lbound),
			Math.max(Math.min(translation[1], bbound), tbound)
		];
		d3.select(".drawarea")
			.attr("transform", "translate(" + translation + ")" +
				" scale(" + scale + ")");
	}
}
};

// Toggle children.
function toggle(d) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else {
		d.children = d._children;
		d._children = null;
	}
}

function prepareFn(json) {
	var treeLayout = {
		name: json.name,
		children: json.children
	};
	// for (eachItem in json) {
	// 	treeLayout.children.push({
	// 		name: eachItem.name,
	// 		children: eachItem.children
	// 	})
	//}
	//parseInnerValues(treeLayout.children, json);
	return treeLayout;
}

function getSubLayout(sublevel) {
	var layout = [];
	for (var eachItem in sublevel) {
		layout.push({
			name: eachItem.name,
			children: eachItem.children
		})
	}
	return layout;
}

function parseInnerValues(treeLayout, json) {
	var returnJSON = {};
	treeLayout.forEach(function (item, idx) {
		if (Object.prototype.toString.call(json[item.name]) === '[object Array]') {
			returnJSON = {};
			returnJSON.name = item.name;
			returnJSON.children = item.children = getSubLayout(json[item.name]);
			parseInnerValues(returnJSON.children, json[item.name])
			//item.children[idx].children.push(parseInnerValues(returnJSON.children, json[item.name], "self"));
		} else if (typeof json[item.name] == "object") {
			returnJSON = {};
			returnJSON.name = item.name;
			returnJSON.children = item.children = getSubLayout(json[item.name]);
			parseInnerValues(returnJSON.children, json[item.name])
			//item.children[idx].children.push(parseInnerValues(returnJSON.children, json[item.name], "self"));
		} else {
			returnJSON = {};
			returnJSON.name = json[item.name];
			returnJSON.children = null;
			if (item.children) {
				item.children[0] = returnJSON;
			} else {
				item.children = [returnJSON];
			}
			//item.name = item.name + ":" + json[item.name];
		}
	});
	return treeLayout;
};