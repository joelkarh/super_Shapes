anime({
    //  just a regular css selector
    targets: '#tunnel circle',
    scale: 1.1,
    // this alternate so it returns to beginningfrom the end
    direction: 'alternate',
    // it loops over and over
    loop: true,
    duration: 250,
    // easings allow us to add a bit more character to our
    // animations, rather than them just being linear
    easing:'easeInOutCubic',
    // we can apply a delay as a static value as well as a function 
    // when we use  it as a function, it loops through every single item
    delay:
    // it gives us the element itself, the index and the length
    (el, i, l) =>   i * 50,
        // console.log(el,i,l);
});

anime({
    targets: '.conveyor',
    // we only want to move it left by half its width
    translateX:'-50%',
    duration: 1500,
    // remove the default easing effect to keep it consistently smooth
    easing:'linear',
    autoplay:true,
    loop:true,
})


// our zigzag 
const zigZagPath = document.querySelector('#zigzag path');
// setDashOffset figures out how long path is 
const zigZagOffset = anime.setDashoffset(zigZagPath)
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset);
  // when we set that back onto the path element
anime({
    targets: zigZagPath,
    strokeDashoffset: [zigZagOffset, 0],
    // duration: anime.random(1000, 3000),
    duration: 3000,
    // delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
});

// our wave
const wavePath = document.querySelector('#wave path');
// setDashOffset figures out how long path is 
const waveOffset = anime.setDashoffset(wavePath)
wavePath.setAttribute('stroke-dashoffset', waveOffset);
  // when we set that back onto the path element
anime({
    targets: wavePath,
    strokeDashoffset: [waveOffset, 0],
    // duration: anime.random(1000, 3000),
    duration: 2000,
    // delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
});