/**
 * Created by lenovo on 2017/12/15.
 */
window.onload = function () {
    var leftbtn = document.getElementById('left');
    var aa = document.getElementById('aa');
    var ulu = document.getElementById('ulu');
    leftbtn.onclick = function(){
        ulu.style.transform = 'translateX(-660px)';

    };
    aa.onclick = function(){

     ulu.style.transform = 'translateX(330px)';

   };

};