import { BLOG, GITHUB } from "../util/global";

export default ({ title = "" }) => `
	<div class="container-50 d-flex flex-column gap-5">
		<div>
			<div class="text-title-2">
				About
			</div>
			<div class="blockquote blockquote-3 blockquote-info">
				바닐라 자바스크립트 + Vite로 구성한 페이지입니다. 페이지 제작 목적은 이력서, 포트폴리오 통합 입니다.
			</div>
			<div class="divider-1"></div>
			<div>
				Github <a class="tag" href="${GITHUB}" target="_blank">${GITHUB}</a>
			</div>
			<div>
				Blog <a class="tag" href="${BLOG}" target="_blank">${BLOG}</a>
			</div>
		</div>
	</div>
`;
