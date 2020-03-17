const spans=document.querySelectorAll('h1 span');
spans.forEach((span=>span.addEventListner('mouseover',function(e) {
  span.classList.add('animated','rubberBand')
}))
spans.forEach((span=>span.addEventListner('mouseout',function(e) {
  span.classList.add('animated','rubberBand')
}))


 const htmlBar=document.querySelector('bar-html')
 const cssBar=document.querySelector('bar-css')
 const htmlBar=document.querySelector('bar-javascript')
 const cssBar=document.querySelector('bar-react')

 var t1=new TimelineLite()
 t1.fromTo(htmlBar,.75{width:'calc(0%-6px)'},{width:'calc(90%-6px)',ease:Power4.easeOut})
    .fromTo(htmlBar,.75{width:'calc(0%-6px)'},{width:'calc(95%-6px)',ease:Power4.easeOut})
    .fromTo(htmlBar,.75{width:'calc(0%-6px)'},{width:'calc(75%-6px)',ease:Power4.easeOut})
    .fromTo(htmlBar,.75{width:'calc(0%-6px)'},{width:'calc(70%-6px)',ease:Power4.easeOut})
