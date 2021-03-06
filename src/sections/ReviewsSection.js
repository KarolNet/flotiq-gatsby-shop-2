import React from 'react';
import { Image, Header, Paragraph } from 'flotiq-components-react';

const ReviewsSection = ({ headerText, reviews, avatar, additionalClass }) => (
    <div
        className={['flex flex-wrap items-center max-w-7xl '
        + 'mx-auto py-1 md:py-6 px-4 sm:px-6 lg:px-8', ...additionalClass].join(' ')}
    >
        <Header
            text={headerText}
            additionalClasses={['!font-light !text-6xl basis-full lg:basis-1/4 mb-5 lg:mb-0 text-center lg:text-left']}
        />
        <div className="basis-full lg:basis-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {reviews.map((review, index) => (
                <div className="px-5 mb-5 lg:mb-0 border-l-2 border-light-gray" key={index}>
                    <Paragraph text={review.review} additionalClasses={['!text-2xl !font-light !leading-6 mb-3']} />
                    <div className="flex items-center space-x-3">
                        <Image url={avatar} alt={review.author} />
                        <Paragraph text={review.author} additionalClasses={['!text-xl !font-medium']} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ReviewsSection;
