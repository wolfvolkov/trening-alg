  var baseUnsortArr = [20,4,12,17,15,16,10,0,9,22,32,0,12,7,6,45,7,0,11,21,19,18,4,1,2,4,12,8,9,0,5,6,3,6,5,4,14,16,30,4,36,1,4], //base unsorted array
      blW = 0, // Block width
      unsortArr;
// Quick sort
function qSort(unArr) {    
  unArr = unArr.slice();
  var ArrL, point,lArr, rArr,fp,lLen,rLen,ArrL = unArr.length;
  if(ArrL === 0) {
    return [];
  }
  point = unArr[0][0],
  lArr = [],
  rArr = [],
  fP = unArr[0][1];  //fP - first element of sort part in main array
  
  for (var i = 1; i< ArrL; i++) {
    
    if (unArr[i][0] < point) {
      lArr.push(unArr[i].slice());
    } else {
      rArr.push(unArr[i].slice());
    }
  }
  lLen = lArr.length,
  rLen = rArr.length;
  for (var z = 0; z< lArr.length; z++) {
    lArr[z][1] = fP+z;
    unsortArr[fP+z] = lArr[z].slice();
  }
  unArr[0][1] = fP+lArr.length;
  unsortArr[fP+lArr.length] = unArr[0].slice();
  for (var j = 0; j< rArr.length; j++) {
    rArr[j][1] = fP+lArr.length+1+j;
    unsortArr[fP+lArr.length+1+j] = rArr[j].slice();
  }
  SortAnimate (unsortArr);  
  return qSort(lArr).concat(point,qSort(rArr));
}
// end Quick sort


function BubbleSort (unArr) {
  var unArr,arrL,temp,i,j,bl1,bl2;
  unArr = unArr.slice(),
  i = 0,
  j = 0,
  arrL = unArr.length;
  firstW();
  function firstW() {
    bl1 = $('#bl'+unArr[i][2]);
    bl1.css('background','#f00').animate({
      opacity: 1
    },50,function () {
      j = i+1;
      secondW();
    });
  } 
  function secondW() {
    bl1 = $('#bl'+unArr[i][2]);
    if(j < arrL) {
      bl2 = $('#bl'+unArr[j][2]);
      bl2.animate({
        opacity: .4
      },50,function () {
      if(unArr[i][0] > unArr[j][0]) {

          temp = unArr[i].slice();
          unArr[i] = unArr[j].slice();
          unArr[j] = temp.slice();

          bl1.css('background','#000').animate({
            left : j*blW+'%',
            opacity : .7
          },150);
          bl2.css('background','#f00').animate({
            left : i*blW+'%',
            opacity : .7
          },150);
        } else {
          bl2.css('background','#000').animate({
            opacity: .7
          },10);          
        }
        j++;
        secondW(); 
        });  
    } else {
      bl1.css('background','#000').animate({
        opacity: .7
      },10, function() {
        i++;
        if ( i < arrL) {
          firstW ();        
        }        
      });
    }
  }
}

function SelectionSort (unArr) {
  var unArr,arrL,temp,i,j,bl1,bl2,min;
  unArr = unArr.slice(),
  i = 0,
  j = 0,
  arrL = unArr.length;
  firstW();
  function firstW() {
    bl1 = $('#bl'+unArr[i][2]);
    min = unArr[i].slice();
    bl1.css('background','#f00').animate({
      opacity: 1
    },50,function () {
      j = i+1;
      secondW();
    });
  } 
  function secondW() {
    bl1 = $('#bl'+unArr[i][2]);
    if(j < arrL) {
      bl2 = $('#bl'+unArr[j][2]);
      bl2.animate({
        opacity: .4
      },50,function () {
      if(min[0] > unArr[j][0]) {
          min = unArr[j].slice();
          min[1] = j;
          bl2.css('background','#00F');
        } else {
          bl2.css('background','#000').animate({
            opacity: .7
          },10);          
        }
        j++;
        secondW(); 
        });  
    } else {
      temp = unArr[min[1]].slice();
      unArr[min[1]] = unArr[i].slice();
      unArr[i] = temp.slice();
      bl2 = $('#bl'+min[2]);
      bl1.css('background','#000').animate({
        left : min[1]*blW+'%',
        opacity : .7
      },150);
      bl2.css('background','#f00').animate({
        left : i*blW+'%',
        opacity : .7
      },150);

      bl1.css('background','#000').animate({
        opacity: .7
      },10, function() {
        i++;
        if ( i < arrL) {
          firstW ();        
        }        
      });
    }
  }
}

function InsertionSort(unArr) {
  var arrL,temp,min,i,j,bl1,bl2;
  unArr = unArr.slice();
  arrL = unArr.length,
  temp,min,
  i = 0,
  j = 0;
  firstW();
  function firstW() {
    bl1 = $('#bl'+unArr[i][2]);
    min = unArr[i].slice();
    bl1.css('background','#f00').animate({
      opacity: 1
    },50,function () {
      j = i-1;
      secondW();
    });
  } 
  function secondW() {
    bl1 = $('#bl'+unArr[i][2]);
    if(j>=0) {
      bl2 = $('#bl'+unArr[j][2]);
      bl2.animate({
        opacity: .4
      },50,function () {
      if(min[0] < unArr[j][0]) {
          unArr[j+1] = unArr[j].slice();          
          min[1] = j;
          bl2.css('background','#00F');
          j--;
          secondW();
        } else {
          unArr[j+1] = min.slice();
          bl2.css('background','#000').animate({
            opacity: .7
          },10);
          i++;
          firstW();  
        }
      });  
    } else {
      temp = unArr[min[1]].slice();
      unArr[min[1]] = unArr[i].slice();
      unArr[i] = temp.slice();
      bl2 = $('#bl'+min[2]);
      bl1.css('background','#000').animate({
        left : min[1]*blW+'%',
        opacity : .7
      },150);
      bl2.css('background','#f00').animate({
        left : i*blW+'%',
        opacity : .7
      },150);

      bl1.css('background','#000').animate({
        opacity: .7
      },10, function() {
        i++;
        if ( i < arrL) {
          firstW ();        
        }        
      });
    }
  }
}

function SortAnimate (arr) {
  var arrL,bl,parent;
  arrL = arr.length,
  parent = $('.sort-visual');
  if(arrL === 0) {
    return [];
  }
  for (var i = 0;i<arrL; i++) {
    bl = $('#bl'+arr[i][2]);
    bl.animate({
      left:  arr[i][1]*blW+'%'
    },200);
  } 

}

function firstDraw (arr){
  var arrL,html,parent;  
  arrL = arr.length,
  blW = 100/arrL,
  parent = $('.sort-visual');
  parent.html('');
  for (var i = 0;i<arrL; i++) {
    $("<div class='sort-b base'></div>").appendTo(parent).css({
      left:  i*blW+'%',
      height: arr[i]+'px',
      width: blW+'%'
    });
    $("<div class='sort-b'></div>").appendTo(parent).attr('id','bl'+i).css({
      left:  i*blW+'%',
      height: arr[i]+'px',
      width: blW+'%'
    }).html('<span>'+arr[i]+'</span>');

    arr[i]=[arr[i],i,i].slice();
  }
  return arr;
}
function loadArr () {
  if($("#add-array").val() != "") {  
  var arr,arrL,elem;
  arr = $("#add-array").val().split(',');
  arrL = arr.length;
    if(arrL < 1) {
      alert( "a rrey is to small " );
      return false;
    } 
    unsortArr = [];
    for (var i = 0; i < arrL; i++ ) {
      elem = parseInt(arr[i]);
      if(!isNaN(elem)) {
        unsortArr.push(elem);
      }
    }
  } else {
    unsortArr = baseUnsortArr.slice();
  }
    unsortArr = firstDraw(unsortArr);
}


$('#start-sort').on('click',function() {
  switch ($('#type-of-sort').val()) {
    case '0': 
      qSort(unsortArr);
      break;
    case '1': 
      BubbleSort(unsortArr);
      break;
    case '2': 
      SelectionSort(unsortArr);
      break;
  }  
});
$('#load-arr').on('click',function() {
  loadArr();
  
});