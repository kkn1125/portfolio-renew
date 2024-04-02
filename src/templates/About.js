import { BLOG, GITHUB } from "../util/global";

export default ({ title = "" }) => `
	<div class="container-90-sm container-50-md d-flex flex-column gap-5">
		<div>
			<div class="text-title-2">
				About
			</div>
			<div class="blockquote blockquote-3 blockquote-info">
				바닐라 자바스크립트로 구성한 페이지입니다. 제작 목적은 이력서, 포트폴리오 통합입니다.
			</div>
			<div class="divider-1"></div>
			<div>
				<span class="tag tag-info">Github</span>
				<a class="text-black text-decoration-none" href="${GITHUB}" target="_blank">${GITHUB}</a>
			</div>
			<div class="divider-1"></div>
			<div>
				<span class="tag tag-info">Blog</span>
				<a class="text-black text-decoration-none" href="${BLOG}" target="_blank">${BLOG}</a>
			</div>
			<div>
				<span class="tag tag-info">Blog</span>
				<a class="text-black text-decoration-none" href="https://menteeunion.kro.kr" target="_blank">Menee Union - demo site</a>
			</div>
		</div>
	</div>
`;
