import React from "react";

function Divider({ title, id }) {
	return (
		<div className="divider" id={id}>
			<table>
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
			<div className="section-title">{title}</div>
		</div>
	);
}

export default Divider;
