<script>
var adgroup = null;
var adcreative = null;
var string= " ";
var parsedUrl = new URL(window.location.href);
if (parsedUrl.searchParams.get("keyword")){
adgroup = (parsedUrl.searchParams.get("keyword"));
adgroup = adgroup.split('+').join('');
console.log(adgroup);
};
if (parsedUrl.searchParams.get("utm_adcreative")){
adgroup = (parsedUrl.searchParams.get("utm_creative"));
console.log(adcreaative);
};
 var str = adgroup;

function deleteExt(){
if (str.search(/Installation Costs/gi) >0){
string = str.replace(/Installation Costs/gi, "");
}else if(str.search(/Replacement Costs/gi) >0){
string = str.replace(/Replacement Costs/gi, "");
} else if(str.search(/Replacement Cost/gi) >0){
string = str.replace(/Replacement Cost/gi, "");
}else if(str.search(/services/gi) >0){
string = str.replace(/services/gi, "");
} else if(str.search(/service/gi) >0){
string = str.replace(/service/gi, "");
} else if(str.search(/Costs/gi) >0){
string = str.replace(/Costs/gi, "");
} else if(str.search(/Cost/gi) >0){
string = str.replace(/Cost/gi, "");
} else if(str.search(/Repairs/gi) >0){
string = str.replace(/Repairs/gi, "");
} else if(str.search(/Repair/gi) >0){
string = str.replace(/Repair/gi, "");
} else if(str.search(/Replacements/gi) >0){
string = str.replace(/Replacements/gi, "");
}else if(str.search(/Replacement/gi) >0){
string = str.replace(/Replacement/gi, "");
} else{
  string = adgroup;
};
return string;
};

if(adgroup != null){
var updatedTitle = (adgroup + " | Trusted Plumbing & Heating");
document.title = updatedTitle ;
};

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}


</script>
