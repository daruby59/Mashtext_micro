//
// copyright 2017, Douglas A. Ruby
//
// 11-14-2017
//
// &#9666;
//
   var flag=0;
   var m=-1;
//
var index = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];               
function initx() {  
    if (flag == 0) {
          for (j=0;j<lo_total;j++) {	
            document.getElementById(lox1[j]).style.display = "none";
	        document.getElementById(lox2[j]).style.display = "none";
	        document.getElementById(lox3[j]).style.display = "none";
	        document.getElementById(lox4[j]).style.display = "none";
          }
	  //
	  document.getElementById('chapters').style.display = "block";
      //
      for (j=0;j<ch_total;j++) {
         document.getElementById(chx[j]).style.display = "none";
      }
      flag = 1;
    }
    //
    for (j=0;j<lo_total;j++) {
      // warning here
	  if (document.fin.rates[j].checked == true) {
	    document.getElementById(sy[j]).style.display = "block";
	    document.getElementById(lox2[j]).style.display = "block";
	  }
	  else {
	    document.getElementById(sy[j]).style.display = "none";
	    document.getElementById(lox2[j]).style.display = "none";
	  }
    }
}
//
var id="";
function changeme(id) {
       m=m*(-1);
       if (m<0) {
            document.getElementById(id).style.display = "none";
       } 
       else {
            document.getElementById(id).style.display = "block";
       }
}
//
function resetx() { 
    for (j=0;j<lo_total;j++) {     
        document.fin.rates[j].checked = false;
        document.getElementById(lox1[j]).style.display = "none";
        document.getElementById(lox2[j]).style.display = "none";
        document.getElementById(lox3[j]).style.display = "none";
        document.getElementById(lox4[j]).style.display = "none";
     }
     //
     // document.getElementById('resources').style.display = "none";
	 //
     for (j=0;j<ch_total;j++) {
        document.getElementById(chx[j]).style.display = "none";
      }
      //   
      for (j=0;j<lo_total;j++) {
        if (document.fin.rates[j].checked == true) {
            document.getElementById(sy[j]).style.display = "block";
        }
        else {
            document.getElementById(sy[j]).style.display = "none";
        }
    }
}
//
// popup windows -- different sizes...
//
function window1() {
   j1window = window.open(xx, 'aw', 'height=600, width=800, toolbar=no, scrollbars=no');
}
//
function window2() {
   j2window = window.open(xx, 'ay', 'height=500, width=650, toolbar=no, scrollbars=no');
}
//
function window3() {
   j3window = window.open(xx, 'az', 'height=750, width=1000, toolbar=no, scrollbars=no');
}
//
function window4() {
   j4window = window.open(xx, 'av', 'height=350, width=500, toolbar=no, scrollbars=no');
}
//
function window6() {
   j6window = window.open(xx, 'ax', 'height=200, width=450, toolbar=no, scrollbars=no');
}
//
// end
//
