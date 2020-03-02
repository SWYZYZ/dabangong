window.onload = function(){




        var left_ul = document.getElementById('left_ul');
        var Detailed = left_ul.getElementsByClassName("Detailed");
            for(i=0;i<Detailed.length;i++){
                Detailed[i].style.top = -60*i+"px";
            }



        

            var shop1 = document.getElementById('shop1');
            var prev1 = document.getElementById('prev1');
            var next1 = document.getElementById('next1');
            var shopli = shop1.getElementsByTagName('li');

            t=1;

            
            shop1.style.width = shopli.length*200+"px";

            prev1.onclick = function(){
                if(t&&shop1.offsetLeft<0){
                    shop1.style.left = shop1.offsetLeft + 800 +"px";
                    t=0;
                    setTimeout(function(){
                        t=1;
                    },600)
                }
            }

            next1.onclick = function(){
                if(t&&shop1.offsetLeft>-shop1.offsetWidth+800){
                    shop1.style.left = shop1.offsetLeft - 800 +"px";
                    t=0;
                    setTimeout(function(){
                        t=1;
                    },600)
                }
            }








        var t2=1;

        var cen_ul1 = document.getElementById("cen_ul1");
        var cen_li1 = cen_ul1.getElementsByTagName("li");
        var cen_ul2 = document.getElementById("cen_ul2");
        var a = 395-cen_li1.length*50/2;

        cen_ul2.style.left = a+"px";

        for(i=0;i<cen_li1.length;i++){
            cen_ul2.innerHTML += "<li></li>";
        }

        var cen_li2 = cen_ul2.getElementsByTagName("li");

        cen_li2[0].className = "active";
        var l = 1;
        for(i=0;i<cen_li2.length;i++){
            cen_li2[i].index = i;
             cen_li2[i].onclick = function(){
                 l = this.index+1;
                 
                for(i=0;i<cen_li2.length;i++){
                    cen_li2[i].className = "";
                    cen_li1[i].className = "";
                }
                 this.className = "active";
                 cen_li1[this.index].className = "active";

                 t2=0;
                 setTimeout(function(){
                    t2=1;
                },8000)
             }
         }
         
         setInterval(function(){
            if(t2==1){
                for(i=0;i<cen_li2.length;i++){
                    cen_li2[i].className = "";
                    cen_li1[i].className = "";
                }
                if(l==cen_li1.length){
                    l=0;
                }
                cen_li1[l].className = "active";
                cen_li2[l].className = "active";
                l++
            }
         },8000)




         
         var pre_ul1 = document.getElementById("pre_ul1");
         var pre_li1 = pre_ul1.getElementsByTagName("li");
         var pre_ul2 = document.getElementById("pre_ul2");
         var b = 100-pre_li1.length*15/2;
         for(i=0;i<pre_li1.length;i++){
             pre_ul2.innerHTML += "<li></li>";
         }
         
         var pre_li2 = pre_ul2.getElementsByTagName("li");
         pre_li2[0].className = "active";
         pre_ul2.style.left = b+"px";


         var l2 = 1;
        var t3=1;
        for(i=0;i<pre_li2.length;i++){
            pre_li2[i].index = i;
             pre_li2[i].onclick = function(){
                 l2 = this.index+1;
                 
                for(i=0;i<pre_li2.length;i++){
                    pre_li2[i].className = "";
                    pre_li1[i].className = "";
                }
                 this.className = "active";
                 pre_li1[this.index].className = "active";

                 t3=0;
                 setTimeout(function(){
                    t3=1;
                },4000)
             }
         }
         
         setInterval(function(){
            if(t3==1){
                for(i=0;i<pre_li2.length;i++){
                    pre_li2[i].className = "";
                    pre_li1[i].className = "";
                }
                if(l2==pre_li1.length){
                    l2=0;
                }
                pre_li1[l2].className = "active";
                pre_li2[l2].className = "active";
                l2++
            }
         },4000)




                    var ri_bo_ul = document.getElementById("ri_bo_ul");
                    var ri_bo_li = ri_bo_ul.getElementsByTagName("li");
                    var prev2 = document.getElementById("prev2");
                    var next2 = document.getElementById("next2");
                    ri_bo_ul.style.width = Math.ceil(ri_bo_li.length/6)*569+"px";

                    var t4 = 1;
                    prev2.onclick = function(){
                        if(ri_bo_ul.offsetLeft < 0&&t4==1){
                            ri_bo_ul.style.left = ri_bo_ul.offsetLeft + 579 +"px";
                            t4=0;
                            setTimeout(function(){
                                t4=1;
                            },2000)
                        }
                    }
                    next2.onclick = function(){
                        if(ri_bo_ul.offsetLeft > -ri_bo_ul.offsetWidth+579&&t4==1){
                            ri_bo_ul.style.left = ri_bo_ul.offsetLeft - 579 +"px";
                            t4=0;
                            setTimeout(function(){
                                t4=1;
                            },2000)
                        }
                    }
}