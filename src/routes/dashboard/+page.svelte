<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { options } from './chart-options';
	import { Chart, type ChartConfiguration, registerables } from 'chart.js';
	export let data: PageData;
	Chart.register(...registerables);
	let config: ChartConfiguration;
	let ctx: HTMLCanvasElement;

	if (data.keyvalues) {
		config = options(data.keyvalues);
	}

	onMount(async () => {
		console.log(config);

		const myChart = new Chart(ctx, config);
	});
</script>

<section>
	<header>
		<form action="/logout" method="POST">
			<button type="submit">logout</button>
		</form>
	</header>
	<div class="row">
		<div class="content">
			<form method="POST" action="?/keyvalue">
				<input type="text" name="key" required placeholder="key" />
				<input type="number" name="value" required placeholder="value" />
				<button type="submit">ADD</button>
			</form>
		</div>
		{#if data.keyvalues}
			<table>
				<thead>
					<tr>
						<th> Key </th>
						<th> Value </th>
					</tr>
				</thead>
				<tbody>
					{#each data.keyvalues as item}
						<tr>
							<td>
								{item.key}
							</td>
							<td>
								{item.value}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
	<div class="canva-container">
		<canvas id="myChart" width="400" height="100" bind:this={ctx} />
	</div>
</section>

<style>
	.canva-container {
		margin-top: 20px;
	}

	.row {
		margin-top: 20px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 40px;
	}

	.content {
		width: 50%;
	}

	.content form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		flex: 0.5;
	}

	.content form input,
	button {
		padding: 10px 15px;
	}

	header {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	table {
		border-collapse: collapse;
		width: 50%;
	}
	/* table-border */
	tbody tr:not(:last-child) {
		border-bottom: 1px solid #e8e7e7;
	}
	tbody tr td:not(:last-child) {
		border-left: 1px solid #e8e7e7;
	}

	/* style tr, td, th */
	tr th {
		font-size: 14px;
		font-weight: 500;
		color: #fff;
		background-color: #0066ff;
	}
	tr td {
		color: #606060;
		font-size: 14px;
		font-weight: 400;
	}
	th,
	td {
		padding: 16px;
		text-align: center;
	}
	/* even and odd color */
	tbody tr:nth-child(odd) {
		background-color: #fff;
	}
	tbody tr:nth-child(even) {
		background-color: #f8f8f8;
	}
</style>
