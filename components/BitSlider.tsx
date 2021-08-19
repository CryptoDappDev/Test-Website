import React, { useEffect } from 'react';
import Slider from '../bit/slider/slider';


export function BitSlider ({...props}) {

	useEffect( () => {
		console.log("🚀 ~ file: BitSlider.tsx ~ line 24 ~ useEffect ~ Slider props", props)
	},[props]); 

	function NextArrow({...props}) {

		

		return (
			<div className={props.className} onClick={props.onClick} >
				{props.nextArrow}
			</div>
		);
	}

	function PrevArrow({...props}) {
		const {  style, onClick, prevArrow } = props;

		useEffect( () => {
			console.log("🚀 ~ file: BitSlider.tsx ~ line 24 ~ useEffect ~ Arrow props", props)
		},[props]); 

		return (
			<div onClick={onClick} >
				{props.prevArrow}
			</div>
		);
	}

	const settings = {
		dots: props.dots,
		infinite: props.infinite,
		slidesToShow: props.slidesToShow,
		slidesToScroll: props.slidesToScroll,
		nextArrow: <NextArrow/>,
		prevArrow: <PrevArrow {...props} />,
	};
	/*
	<Slider {...settings} className={props.className}>
		{props.children}
	</Slider>
	*/
	return (
		<div className={props.className}>
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			<Slider {...props} {...settings} >

				{props.children}
			</Slider>
		</div>
	);
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 400px;
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`