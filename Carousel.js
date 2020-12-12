	//DOM calls
	const slideWrap = document.querySelector('section');
	const slider = document.querySelector('.slider');
	const prevBtn = document.querySelector('.prevBtn');
	const nextBtn = document.querySelector('.nextBtn');
	let slide = document.querySelectorAll(".slide");
	const menu = document.querySelector('menu')
	const nav = document.querySelector("#hurger-menu")
	const pt2 = document.querySelector('.pt2')
	const pt4 = document.querySelector('.pt4')
	const pt6 = document.querySelector('.pt6')
	const pt8 = document.querySelector('.pt8')


	const interval = 1000;

	let index = 1;
	const firstClone = slide[0].cloneNode(true);
	const lastClone = slide[slide.length - 1].cloneNode(true);


	firstClone.id = 'first-clone';
	lastClone.id = 'last-clone';


	slider.append(firstClone)
	slider.prepend(lastClone)


	const slideWidth = slide[index].clientWidth;

	slider.style.transform = `translateX(${-slideWidth * index}px)`;

	// const startSlide = () =>{
	// 	setInterval(() =>{
	// 		moveToNextSlide()
	// 	}, interval)
	// }

	slider.addEventListener('transitionend', ()=>{
		slide = getSlides();
		if (slide[index].id === firstClone.id) {
			slider.style.transition = 'none';
			index = 1;
			slider.style.transform = `translateX(${-slideWidth * index}px)`;
		}
		if (slide[index].id === lastClone.id) {
			slider.style.transition = 'none';
			index = slide.length - 2;
			slider.style.transform = `translateX(${-slideWidth * index}px)`;
		}
	})

	const getSlides = () => document.querySelectorAll('.slide');


	const moveToNextSlide = () =>{
		slide = getSlides();
		if(index >= slide.length -1) return;
		index++
		slider.style.transform = `translateX(${-slideWidth * index}px)`;
		slider.style.transition = '0.8s'
	}

	const moveToPreviousSlide = () =>{
		if (index <= 0) return;
		index--
		slider.style.transform = `translateX(${-slideWidth * index}px)`;
		slider.style.transition = '0.8s'
	}

	nextBtn.addEventListener('click', moveToNextSlide)
	prevBtn.addEventListener('click', moveToPreviousSlide)

	// startSlide()




menu.addEventListener('click', function () {
	nav.classList.toggle('open');

	pt2.classList.toggle('pt2_none')
	pt4.classList.toggle('pt4_none')
	pt6.classList.toggle('pt6_none')
	pt8.classList.toggle('pt8_none')
})