import React, { useEffect, useRef } from 'react';

export default function Utterance() {
	const containerRef = useRef(null);

	useEffect(() => {
		const createUtterancesEl = () => {
			const script = document.createElement('script');

			script.src = 'https://utteranc.es/client.js';
			script.setAttribute('repo', 'D0Dam/blog');
			script.setAttribute('issue-term', 'title');
			script.setAttribute('label', 'comment');
			script.setAttribute('theme', 'github-light');
			script.crossOrigin = 'anonymous';
			script.async = true;

			containerRef.current.appendChild(script);
		};

		createUtterancesEl();
	}, []);

	return <div ref={containerRef} />;
}
