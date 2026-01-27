const observer = new IntersectionObserver( entries => {
  entries.forEach( entry => {
    if ( entry.isIntersecting ) {
      entry.target.classList.add( 'start-anim' );
    } else {
      entry.target.classList.remove( 'start-anim' );
    }
  } );
}, {
  threshold: 0.4
} );

document.querySelectorAll( 'section' ).forEach( section => {
  observer.observe( section );
} );

$('.nav-toggle').on('click', function(){
    $('header').toggleClass('active');
});


const pricesInfo = document.querySelector(".prices-info");
const firstHeaderRow = document.querySelector(".main-header-info");
const secondHeaderRow = document.querySelector(".second-header-row-container");
const footerNavBlock = document.querySelector(".footer-nav-block");
const footerContainer = document.querySelector("footer .container");
const firstFooterRow = document.querySelector(".first-footer-row");
callMatchMedia('(max-width: 1024px)', function(event) {
	movePricesInfoBlock(event);
	moveFooterNavBlock(event);
});

function movePricesInfoBlock(event){
	if (event.matches) {
	if (!pricesInfo.classList.contains("prices-info-moved")){
		secondHeaderRow.append(pricesInfo);
		pricesInfo.classList.add("prices-info-moved");
	}
	} else {
	if (pricesInfo.classList.contains("prices-info-moved")){
		firstHeaderRow.insertBefore(pricesInfo, firstHeaderRow.children[0]);
		pricesInfo.classList.remove("prices-info-moved");
	}
	}
}



function moveFooterNavBlock(event){
	if (event.matches) {
		if (!footerNavBlock.classList.contains("footer-nav-block-moved")){
			footerContainer.insertBefore(footerNavBlock, footerContainer.children[0]);
			footerNavBlock.classList.add("footer-nav-block-moved");
		}
		} else {
		if (footerNavBlock.classList.contains("footer-nav-block-moved")){
			firstFooterRow.insertBefore(footerNavBlock, firstFooterRow.children[1]);
			footerNavBlock.classList.remove("footer-nav-block-moved");
		}
	}
}

function callMatchMedia(args, callback) {
    let mqList = window.matchMedia(args);

    function handleMatchMedia(mediaEvent) {
        callback(mediaEvent);
    }

    mqList.addListener(handleMatchMedia);
    handleMatchMedia(mqList);
}

/**
 * Слайдер.
 */
$(document).ready(function(){
	$('.slider').slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				}
			}
		]    
	});
});