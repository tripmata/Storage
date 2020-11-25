
function WixEncode(e)
{
	var ret = e.replace(/'/gi,"[wx-ap]");
	
	ret = ret.replace(/,/gim,"[wx-cm]");
	ret = ret.replace(/</gim,"[wx-lt]");
	ret = ret.replace(/#/gim,"[wx-hs]");
	ret = ret.replace(/>/gim,"[wx-gt]");
	ret = ret.replace(/`/gim,"[wx-01]");
	ret = ret.replace(/~/gim,"[wx-02]");
	ret = ret.replace(/"/gim,"[wx-qt]");
	ret = ret.replace(/\(/gim,"[wx-bl]");
	ret = ret.replace(/\)/gim,"[wx-br]");
	ret = ret.replace(/\$/gim,"[wx-dl]");
	ret = ret.replace(/{/gim,"[wx-wl]");
	ret = ret.replace(/}/gim,"[wx-wr]");
	ret = ret.replace(/\t/gim,"[wx-tb]");
	ret = ret.replace(/\n/gim,"[wx-nl]");
	ret = ret.replace(/\'/gim,"[wx-ap]");
	ret = ret.replace(/&/gim,"[wx-am]");
	ret = ret.replace(/:/gim,"[wx-co]");
	ret = ret.replace(/]\[/gim,"[wx-db]");
	
	return ret;
}

function WixDecode(e)
{
	var ret = e.replace(/\[wx-ap]/gim, "'");
	
	ret = ret.replace(/\[wx-db]/gim, "][");
	ret = ret.replace(/\[wx-cm]/gim, ",");
	ret = ret.replace(/\[wx-gt]/gim, ">");
	ret = ret.replace(/\[wx-lt]/gim, "<");
	ret = ret.replace(/\[wx-sh]/gim, "#");
	ret = ret.replace(/\[wx-01]/gim, "`");
	ret = ret.replace(/\[wx-02]/gim, "~");
	ret = ret.replace(/\[wx-qt]/gim, "\"");
	ret = ret.replace(/\[wx-bl]/gim, "(");
	ret = ret.replace(/\[wx-br]/gim, ")");
	ret = ret.replace(/\[wx-dl]/gim, "$");
	ret = ret.replace(/\[wx-wl]/gim, "{");
	ret = ret.replace(/\[wx-wr]/gim, "}");
	ret = ret.replace(/\[wx-tb]/gim, "\t");
	ret = ret.replace(/\[wx-nl]/gim, "\n");
	ret = ret.replace(/\[wx-ap]/gim, "\'");
	ret = ret.replace(/\[wx-am]/gim, "&");
	ret = ret.replace(/\[wx-co]/gim, ":");
	
	
	return ret;
}


function UnTag(e)
{
	var ret = e.replace(/&/gim, "&amp;");
	ret = ret.replace(/</gim, "&lt;");
	ret = ret.replace(/>/gim, "&gt;");
	ret = ret.replace(/\n/gim, "<br/>");
	ret = ret.replace(/\"/gim, "&quot;");
	ret = ret.replace(/\'/gim, "&apos;");
	ret = ret.replace(/\t/gim, "&nbsp;&nbsp;&nbsp;");
	return ret;
}