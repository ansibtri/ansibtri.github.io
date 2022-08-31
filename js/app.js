const progress = document.querySelectorAll('.page--body ul li .progress-bar');
Array.from(progress).forEach((item)=>{
    let bar = item.children[0];
    let span = item.children[1];
    let percent = item.children[1].innerText;
    
    bar.style.width = `${percent}%`;
    span.innerText = `${percent}%`;
});


const lists = document.querySelectorAll('.tab--panel ul li');
const tabs = document.querySelectorAll('.tabs');

Array.from(lists).forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        document.querySelector('.tab--panel ul li.active').classList.remove('active');
        elem.classList.add('active');
        tab(elem.id)
    })
});

const tab = (elem) =>{
    document.querySelector('.tabs.active').classList.remove('active');
    tabs[elem].classList.add('active');
}

// <p>The paradise of my learning where I learn to know the world with a broader aspects of the existence. By being very friendly, ...... had always paved my path for the wellness with willness in my whole journey. Huge Respect</p>