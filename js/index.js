window.addEventListener('load',function(){
    let bannerBox = document.querySelector('.banner'),
        imgBox = document.querySelector('.img-list'),
        lis = document.querySelectorAll('.btn-list > li'),
        boxw = bannerBox.offsetWidth;
    let sx,movex,count = 0;

    imgBox.innerHTML += imgBox.innerHTML;
    count = imgBox.childElementCount;
    imgBox.style.width = boxw * count + 'px';

    bannerBox.addEventListener('touchstart',function(e){
        imgBox.style.transition = 'none';
        let event = e.changedTouches[0];
        sx = event.pageX;
        movex = imgBox.offsetLeft;

        if(movex / boxw == 0){
            imgBox.style.left = -lis.length * boxw + 'px';
        }else if(movex / boxw == 1-count){
            imgBox.style.left = (1-lis.length) * boxw + 'px';
        }
        movex = imgBox.offsetLeft;
    },false)

    bannerBox.addEventListener('touchmove',function(e){
        let event = e.changedTouches[0];
        let mx = event.pageX;
        imgBox.style.left = movex + (mx - sx) + 'px';
    },false)

    bannerBox.addEventListener('touchend',function(e){
        let event = e.changedTouches[0];
        let num = Math.round(imgBox.offsetLeft / boxw);
        lis.forEach(ele =>{
            ele.classList.remove('last');
        })
        lis[(-num % 4)].classList.add('last');
        imgBox.style.left = num * boxw + 'px';
        imgBox.style.transition = 'all ease .5s';
    },false)
})