const monthlybtn = document.getElementById('monthlybtn');
const annuallybtn = document.getElementById('annuallybtn');
const annuallypkg = document.getElementById('annuallypkg');
const monthlypkg = document.getElementById('monthlypkg');

annuallybtn.addEventListener('click',()=> {
    annuallybtn.classList.remove('annuallybtn');
    annuallybtn.classList.add('btn');
    monthlybtn.classList.remove('btn');
    monthlybtn.classList.add('annuallybtn');

    monthlypkg.classList.remove('pkgwrap');
    monthlypkg.classList.add('none');
    annuallypkg.classList.remove('none');
    annuallypkg.classList.add('pkgwrap');
    
});
monthlybtn.addEventListener('click',()=> {
    annuallybtn.classList.remove('btn');
    annuallybtn.classList.add('annuallybtn');
    monthlybtn.classList.remove('annuallybtn');
    monthlybtn.classList.add('btn');

    monthlypkg.classList.remove('none');
    monthlypkg.classList.add('pkgwrap');
    annuallypkg.classList.remove('pkgwrap');
    annuallypkg.classList.add('none');
});

const q1 = document.getElementById('q1');
const ans1 = document.getElementById('ans1');
const plus1 = document.getElementById('plus1');
const minus1 = document.getElementById('minus1');
q1.addEventListener('click', ()=>{
    ans1.classList.toggle('answer');
    plus1.classList.toggle('none');
    minus1.classList.toggle('none');
});

const q2 = document.getElementById('q2');
const ans2 = document.getElementById('ans2');
const plus2 = document.getElementById('plus2');
const minus2 = document.getElementById('minus2');
q2.addEventListener('click', ()=>{
    ans2.classList.toggle('answer');
    plus2.classList.toggle('none');
    minus2.classList.toggle('none');
});

const q3 = document.getElementById('q3');
const ans3 = document.getElementById('ans3');
const plus3 = document.getElementById('plus3');
const minus3 = document.getElementById('minus3');
q3.addEventListener('click', ()=>{
    ans3.classList.toggle('answer');
    plus3.classList.toggle('none');
    minus3.classList.toggle('none');
});

const q4 = document.getElementById('q4');
const ans4 = document.getElementById('ans4');
const plus4 = document.getElementById('plus4');
const minus4 = document.getElementById('minus4');
q4.addEventListener('click', ()=>{
    ans4.classList.toggle('answer');
    plus4.classList.toggle('none');
    minus4.classList.toggle('none');
});


const hamburger_btn = document.querySelector('.hamburger_btn');
const mobileMenu = document.querySelector('.mobileMenu');
let menuOpen = false;
hamburger_btn.addEventListener('click', ()=>{
    if(!menuOpen){
        hamburger_btn.classList.add('open');
        mobileMenu.classList.add('show');
        menuOpen = true;
    }
    else{
        hamburger_btn.classList.remove('open');
        mobileMenu.classList.remove('show');
        menuOpen = false;
    }
});