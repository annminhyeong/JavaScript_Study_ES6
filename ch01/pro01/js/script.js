    //변수, 함수를 전역공간에서 만들면 window 객체에 보관함
    window : {
      'use strict';
  
  
  
      //window 객체를 의미
      //console.log(this); 
  
      function func(){
          console.log(this); //window 객체 의미
      }
      //func();
  
      var object1 = {
          data : 'kim',
          func : function(){
              console.log(this); // object1 객체를 의미
          }
      }
      //object1.func();
  
      var object2 = {
          data : {
              func : function(){
                  console.log(this); // data 객체를 의미함
              },
              name : 'test'
          },
          data1 : {
              func : () =>{
                  console.log(this); // 화살표 함수 상위 요소 값을 씀
              }
          },
          function(){
              //키값쓸필요없이 그냥 함수만 써도 됨
          }
      }
      object2.data.func();
      object2.data1.func();
  }