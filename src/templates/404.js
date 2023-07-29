export default () => `
	<div class="text-center">
		<div class="d-flex flex-column position-absolute top-50 left-50 position-center gap-2">
			<div>
				<div class="fs-20">404</div>
				<div class="text-capitalize fs-10">not found</div>
			</div>
			<span>
				<button class="btn btn-primary text-uppercase" onclick="manager.navigator.to('/')">home</button>
			</span>	
		</div>
	</div>
`;
