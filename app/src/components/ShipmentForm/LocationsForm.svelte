<script lang="ts">
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';

	import Button from '../Buttons/Button.svelte';
	import { pickedLocations } from '$stores/locationsPick';
	import DecimalInput from '$components/Inputs/DecimalInput.svelte';
	import { sleep } from '$src/utils/utils';
	import type { LngLat } from 'maplibre-gl';

	export let initialValues;
	export let onSubmit;
	export let onBack;
	export let showModal = true;

	// safe is 1 request per sec.
	let lastRequestTime = Date.now();

	$: src = $pickedLocations.src;
	$: dst = $pickedLocations.dst;

	const fetchLocation = async (lngLat: LngLat): Promise<string> => {
		await sleep(2 + Math.floor(Math.random() * 7));

		const currentTime = Date.now();
		const timeSinceLastRequest = currentTime - lastRequestTime;

		if (timeSinceLastRequest < 1000) {
			await sleep(1000 - timeSinceLastRequest);
		}

		lastRequestTime = Date.now();

		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/reverse?lat=${lngLat.lat}&lon=${lngLat.lng}&format=geocodejson`
			);
			const parsed = await response.json();

			console.log(parsed);

			const geo = parsed.features[0].properties.geocoding;

			return geo.city + geo.country;
		} catch (e) {
			return 'invalid fetch';
		}
	};

	const { form, data } = createForm({
		extend: reporter,
		onSubmit,
		initialValues,
		validate: (values) => {
			const errors = {
				locations: ''
			};

			return errors;
		}
	});
</script>

<div class="my-10 flex justify-center">
	<h2
		class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-3xl"
	>
		Locations
	</h2>
</div>

<form use:form>
	<div class="border-primary border-t text-primary-800 px-4 py-3 mb-5" role="alert">
		<p class="font-bold">Action needed</p>
		<p class="text-sm">Choose start and end location on map</p>
	</div>

	<!-- <Details /> -->

	<div
		class="col-span-2 grid grid-cols-4 opacity-100 items-center justify-items-center w-full text-white py-2 bg-gradient-to-r from-primary to-secondary"
	>
		<div></div>
		<div>Longitude</div>
		<div>Latitude</div>
		<div>Name</div>
	</div>
	<div
		class="row-span-2 grid grid-cols-4 opacity-80 items-center justify-items-center w-full text-white py-2 bg-gradient-to-t from-primary to-secondary"
	>
		<div>Source</div>
		<DecimalInput
			disabled
			name="sourceLocationLng"
			required
			bind:value={$pickedLocations.src.lng}
		/>
		<DecimalInput name="sourceLocationLat" required bind:value={$pickedLocations.src.lat} />

		<div>
			{#await fetchLocation(src)}
				loading ...
			{:then location}
				{location}
			{/await}
		</div>
	</div>
	<div
		class="mb-3 row-span-2 grid grid-cols-4 opacity-70 items-center justify-items-center w-full text-white py-2 bg-gradient-to-b from-primary to-secondary"
	>
		<div>Destination</div>
		<DecimalInput
			disabled
			name="destinationLocationLng"
			required
			bind:value={$pickedLocations.dst.lng}
		/>

		<DecimalInput
			disabled
			name="destinationLocationLat"
			required
			bind:value={$pickedLocations.dst.lat}
		/>

		<div>
			{#await fetchLocation(dst)}
				loading ...
			{:then location}
				{location}
			{/await}
		</div>
	</div>

	<div class="flex justify-center">
		<Button type="button" on:click={() => (showModal = false)}>Change locations</Button>
	</div>
	<ValidationMessage for="locations" let:messages={message}>
		{#if message}
			<div class="bg-red-200 border-l-4 mt-3 border-red-400 text-orange-700 p-2" role="alert">
				<p class="font-bold">Invalid locations</p>
				<p>{message || ''}</p>
			</div>
		{/if}
	</ValidationMessage>

	<div class="flex justify-center mt-4 gap-x-2">
		<Button on:click={() => onBack($data)}>Prev</Button>
		<Button type="submit">Next</Button>
	</div>
</form>