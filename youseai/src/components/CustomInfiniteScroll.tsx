// Copyright 2019-2025 @polka-labs/townhall authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
"use client"
import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';

interface ICustomInfiniteScrollProps {
    component: React.ReactElement;
    loader: React.ReactElement;
    loadMore: React.ReactElement;
    isLoadMoreVisible: boolean;
    wrapperClassName?: string;
    loadMoreClassName?: string;
    onNextPage?: (page: number) => void;
}

const CustomInfiniteScroll: FC<ICustomInfiniteScrollProps> = (props) => {
	const { component, loader, isLoadMoreVisible, loadMore, wrapperClassName, loadMoreClassName, onNextPage } = props;
	const [isLoading, setIsLoading] = useState(false);
	const [, setCurrentPage] = useState(1);
	const [lastScrollTop, setLastScrollTop] = useState(0);

	useEffect(() => {
		const loadMore = document.getElementById('load-more');
		const loadMoreWrapper = document.getElementById('load-more-wrapper');
		if (loadMore) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && isLoading) {
						const currentScrollTop = loadMoreWrapper?.scrollTop || 0;
						if (currentScrollTop > lastScrollTop) {
							// Scrolling down
							setCurrentPage(prevPage => {
								const nextPage = prevPage + 1;
								//onNextPage(nextPage);
								return nextPage;
							});
						}
						setLastScrollTop(currentScrollTop);
					}
				});
			}, { root: loadMoreWrapper, threshold: 0.5  });
			observer.observe(loadMore);
			return () => {
				observer.unobserve(loadMore);
				observer.disconnect();
			};
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoadMoreVisible, isLoading]);

	return (
		<section id='load-more-wrapper' className={classNames('flex flex-col gap-y-8', wrapperClassName)}>
			{component}
			{
				isLoadMoreVisible?
					<div
						id='load-more'
						className={classNames('flex items-center', loadMoreClassName)}
					>
						{
							isLoading?
								loader
								: (
									<button
										className={classNames('bg-transparent border-none flex items-center justify-center outline-none cursor-pointer')}
										onClick={() => {
											setIsLoading(true);
											//onNextPage(2);
										}}
									>
										{loadMore}
									</button>
								)
						}
					</div>
					: null
			}
			{isLoading && <div className="gradient-fade fixed" />}
		</section>
	);
};

export default CustomInfiniteScroll;