let addToDoButton=document.getElementById('addToDo');
//ismi addtodo olan id dokumanını getir yaptık ve değişken atadık.
//add butonuna ulaşmak için addtodobutton değişkeni verdik.
let toDoContainer=document.getElementById('toDoContainer');
//container div ime ulaştım.
let inputText=document.getElementById('inputText');
// yazı yazdığımız kutucuğa değişken atadık.
let clearToDo=document.getElementById('clearToDo')
//çıkar butonuna değişken atadık.

let title = document.getElementById('title');
// html de title isimli id yi getirdik ve title diye bir değişken atadık.
title.style.color="red" 
//To Do List BAŞLIĞINA RENK VERDİK.

addToDoButton.addEventListener('click', function(){
    //butona tıklandığında bir tane function oluşturuyoruz. 
    //yani tıklandığında ne olsun demek istiyoruz.
    let paragraph=document.createElement('p');
    //createElementle ne oluşturmak istedim. 
    //paragraph oluşturmak istedim. class gibi düşün.
    //artık paragraph yazdığım zaman ulaşmak istiyorum.
    paragraph.classList.add('paragraph-styling');
    //yazıya css yaptık. öncesinde class atadık.css sayfasında görebilirsin.

    toDoContainer.appendChild(paragraph);
    //yukarda eklediğim paragraph varya, 
    //sen bunu aşağı ekle diyorum.
    paragraph.innerHTML=inputText.value;

    //innerHTML demek inputta girilen değere ulaşmak.
    //mesela o kutucuğa yazılan yazı bir değerdir.
    inputText.value="";
    // icerisine yazdığım değeri sıfırla.
    //1-önce bir paragraf oluştur dedik.
    //2-bu yazıyı container alanımıza at dedik.
    //3-bu paragrafı yazdığımız kutucuğa ulaş dedik.ordaki yazıya ulaş dedik.
    //4-yazdıktan sonra o kutucuğu sıfırla dedik.
    paragraph.addEventListener('click', function(){
        //paragrafa click ekle.peki ne yapacak bu click?
        paragraph.style.textDecoration='line-through';
        //paragrafın stilinde değişiklik yap. Textinde değişiklik yap.
        //line through olsun.
        
    })
    paragraph.addEventListener('dblclick',function(){
        //iki kere tıkladığında bişey yapmasını istiyorum.
        toDoContainer.removeChild(paragraph);
        //containerin içindeki çocuk olan paragrafı kaldır
        //iki kere tıklandığında.

    });
    clearToDo.addEventListener('click',function(){
        paragraph.remove();
        //çıkara tıkladığımızda kaldıracak.temizleyecek.
    });

})
