const elements = document.querySelectorAll('.hidden');

const myObsever = new IntersectionObserver( (entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })

})

elements.forEach( (element) => myObsever.observe(element));