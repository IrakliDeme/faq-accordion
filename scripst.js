let elements = document.getElementById('faqs');
let pElements=document.querySelectorAll('p')

//We hide all the paragraphs included in faqs
pElements.forEach( function (element) {
    element.classList.add('hidden');
    });
//We will show the corresponding paragraph After target click
elements.addEventListener('click', (e) =>{
    let click = e.target;
    click.querySelector('p').classList.toggle('hidden');

      /*If the paragraph is visible? We change the color of the parent light 
       and rotate the arrow by 180 deg  */
  const classlist=Array.from(click.querySelector('p').classList);
  if(classlist.indexOf('hidden')===-1) {
    click.querySelector('img').style.transform='rotate(180deg)'
    click.querySelector('img').style.transition='0.5s linear'
    click.classList.add('black')
  }else{
    click.querySelector('img').style.transform='rotate(0deg)'
    click.classList.remove('black')
  }
});
//We change the color of the Li elements when the mouse is overed
elements.addEventListener('mouseover',  (e)=>  {
e.target.style.color="red"
})
elements.addEventListener('mouseout',  (e)=>  {
    e.target.style.color="#4B4C5F"
    
    })
    