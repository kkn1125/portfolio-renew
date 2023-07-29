import { PROFILE_IMG } from "../util/global";

export default ({ title = "" }) => `
	<div class="container-80 d-flex flex-column gap-5">
		<div>
			<div class="text-title-3">
				Resume
			</div>

			<div class="d-flex flex-column-sm flex-row-md gap-2 align-items-center">
				<div>
					<img src="${PROFILE_IMG}" class="profile-responsive" />
				</div>

				<div class="d-flex flex-column gap-1 list">
					<div class="list-item">
						<span class="header">name</span>
						<span class="body">김경남</span>
					</div>
					<div class="list-item">
						<span class="header">age</span>
						<span class="body ">(만)${
              new Date().getFullYear() -
              1993 +
              (new Date().getMonth() < 11 ? -1 : 0)
            }</span>
					</div>
					<div class="list-item">
						<span class="header">email</span>
						<span class="body"><a href="mailto:chaplet01@gmail.com">chaplet01@gmail.com</a></span>
					</div>
					<div class="list-item">
						<span class="header">blog</span>
						<span class="body">email</span>
					</div>
				</div>
			</div>
	
		</div>

	</div>
`;
