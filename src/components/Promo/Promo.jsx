import React from 'react';

import './Promo.scss';

import sale from '../../assets/images/Group 1659.png';
import bottleOrdinary from '../../assets/images/Rectangle 59.png';
import handCream from '../../assets/images/Rectangle 60.png';
import Button from '../common/Button/Button';

export function Promo() {
	return (
		<section className='main__promo'>
			<div className='main__promo-img-column'>
				<h2 className='main__promo-img-column--text'>Discover</h2>
				<h2 className='main__promo-img-column--text'>
					Our New Products For You
				</h2>
			</div>
			<div className='main__promo-back-column'>
				<img className='main__promo-back-column--sale' src={sale} alt='Sale' />
				<div className='main__promo-back-column--item1'>
					<div className='main__promo-back-column--btn'>
						<Button buttonText='Shop Now' />
					</div>
					<a href='#'>
						<div className='main__promo-back-column--link1'>
							<p className='main__promo-back-column--link1-text'>
								The Ordinary
							</p>
						</div>
						<img
							className='main__promo-back-column--img1'
							src={bottleOrdinary}
							alt='Bottles of the Ordinary'
						/>
					</a>
				</div>
				<div className='main__promo-back-column--item2'>
					<a href='#'>
						<div className='main__promo-back-column--link2'>
							<p className='main__promo-back-column--link2-text'>
								The Body Shop
							</p>
						</div>
						<img
							className='main__promo-back-column--img2'
							src={handCream}
							alt='Hand Cream'
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
