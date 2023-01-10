$('.count-btn').click(function(){
    var btnType=$(this).attr('data');
    var inputVal=$('#addResult').val();
    //console.log(inputVal);
    if(btnType=='add'){
        $('#addResult').val(parseInt(inputVal)+1);
    }else if(btnType=='minus'&&inputVal>1){
        $('#addResult').val(parseInt(inputVal)-1);
    }
});
/*
$('.buyCar').click(function(){
    var btnType=$(this).attr('data');
    var textVal=$('#buyNumber').val();
    console.log(textVal);
    if(btnType=='addBuycar'){
        $('#buyNumber').val(parseInt(textVal)+1);
    }else if(btnType=='minus'&&inputVal>1){
    }
});
*/

var Add=[
    { clothColor: "顏色", clothSize: "尺寸" , number: "剩餘數量"},
    { clothColor: "紅色", clothSize: "XXS" , number: "還剩50件"},
    { clothColor: "紅色", clothSize: "XS" , number: "還剩78件"},
    { clothColor: "紅色", clothSize: "M" , number: "還剩247件"},
    { clothColor: "紅色", clothSize: "L" , number: "還剩135件"},
    { clothColor: "紅色", clothSize: "XL" , number: "還剩78件"},
    { clothColor: "藍色", clothSize: "XXS" , number: "還剩342件"},
    { clothColor: "藍色", clothSize: "XS" , number: "還剩247件"},
    { clothColor: "藍色", clothSize: "S" , number: "還剩113件"},
    { clothColor: "藍色", clothSize: "M" , number: "還剩255件"},
    { clothColor: "藍色", clothSize: "L" , number: "還剩243件"},
    { clothColor: "藍色", clothSize: "XL" , number: "還剩77件"},
    { clothColor: "藍色", clothSize: "2XL" , number: "還剩36件"},
    { clothColor: "藍色", clothSize: "3XL" , number: "還剩72件"},
    { clothColor: "杏色", clothSize: "XS" , number: "還剩113件"},
    { clothColor: "杏色", clothSize: "S" , number: "還剩247件"},
    { clothColor: "杏色", clothSize: "M" , number: "還剩144件"},
    { clothColor: "杏色", clothSize: "L" , number: "還剩89件"},
    { clothColor: "杏色", clothSize: "XL" , number: "還剩55件"},
    { clothColor: "棕色", clothSize: "XXS" , number: "還剩265件"},
    { clothColor: "棕色", clothSize: "XS" , number: "還剩521件"},
    { clothColor: "棕色", clothSize: "M" , number: "還剩230件"},
    { clothColor: "棕色", clothSize: "L" , number: "還剩142件"},
    { clothColor: "棕色", clothSize: "XL" , number: "還剩86件"},
    { clothColor: "棕色", clothSize: "2XL" , number: "還剩78件"},
    { clothColor: "玩偶", clothSize: "--" },
];

/*
$('#clothSize').change(function(){
    var clothSizeVal=$(this).val();
    if(Add[i].clothSize=1,2,3,4,5){
    for(i=1;i<Add.length;i++){
        $('.remainder').text(Add[i].number=1,2,3,4,5);
    }
    }
});
*/

var str='';
$('#clothColor').change(function(){
    var clothcolorVal=$(this).val();
    if(clothcolorVal=='red'){
      var str='';
      for(i=1;i<Add.length;i++){
      if(Add[i].clothColor=='紅色'){
        str=str+'<option>'+Add[i].clothSize+'</option>';
        $('#clothSize').html(str);
        $('.remainder').text('還剩588件');
        $('.price').text('$285');
      }//else if(Add[i].clothColor,Add[i].clothSize){
        //$('.remainder').text(Add[i].number);
      //}
      }
    }
    if(clothcolorVal=='blue'){
      var str='';
      for(i=1;i<Add.length;i++){
      if(Add[i].clothColor=='藍色'){
        str=str+'<option>'+Add[i].clothSize+'</option>';
        $('#clothSize').html(str);
        $('.remainder').text('還剩1385件');
        $('.price').text('$285');
      }
      }
    }
    if(clothcolorVal=='apricot'){
      var str='';
      for(i=1;i<Add.length;i++){
      if(Add[i].clothColor=='杏色'){
        str=str+'<option>'+Add[i].clothSize+'</option>';
        $('#clothSize').html(str);
        $('.remainder').text('還剩648件');
        $('.price').text('$285');
      }
      }
    }
    if(clothcolorVal=='brown'){
        var str='';
        for(i=1;i<Add.length;i++){
        if(Add[i].clothColor=='棕色'){
          str=str+'<option>'+Add[i].clothSize+'</option>';
          $('#clothSize').html(str);
          $('.remainder').text('還剩1322件');
          $('.price').text('$285');
        }
        }
      }
      if(clothcolorVal=='doll'){
        var str='';
        for(i=1;i<Add.length;i++){
        if(Add[i].clothColor=='玩偶'){
          str=str+'<option>'+Add[i].clothSize+'</option>';
          $('#clothSize').html(str);
          $('.remainder').text('還剩16隻');
          $('.price').text('$119');
        }
        }
      }
  });


$('.buyCar').click(function(){
    var clothColor=$('#clothColor').val();
    var clothSize=$('#clothSize').val();
    if(clothColor=='--' && clothSize=='--'){
        alert('型號及尺寸不得為空')
    }else if(clothColor=='--'){
        alert('型號不得為空')
    }
    else{
        $('.dot').show();
        var btnType=$(this).attr('data');
        var textVal=$('#buyNumber').val();
        console.log(textVal);
        if(btnType=='addBuycar'){
            $('#buyNumber').val(parseInt(textVal)+1);
        }else if(btnType=='minus'&&inputVal>1){
        }
    };
});

$('.buy').click(function(){
    var clothColor=$('#clothColor').val();
    var clothSize=$('#clothSize').val();
    if(clothColor=='--'){
        alert('型號不得為空')
    }
});