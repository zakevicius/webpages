import React from "react";

function Divider({ title, id }) {
	return (
		<div className="divider" id={id}>
			<div className="section-title">{title}</div>
			<table className="divider-dark-table">
				<thead></thead>
				<tbody>
					<tr>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<div className="divider-light">
				<table className="divider-light-table">
					<thead></thead>
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Divider;
