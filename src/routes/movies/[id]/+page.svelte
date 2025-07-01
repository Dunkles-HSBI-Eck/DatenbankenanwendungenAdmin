<script>
    let { data } = $props();
    let { movieId, movie } = data;

    let licenses = $state(data.licenses || []);

    let licenseCount = $state();
    let licensePrice = $state();
    let licenseExpiration = $state();

    async function addLicense() {
        if (!licenseCount || !licensePrice || !licenseExpiration) {
            alert("Please fill in all fields.");
            return;
        }

        const response = await fetch(`/api/v1/movies/${movieId}/licenses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                count: licenseCount,
                price: licensePrice,
                expiration: licenseExpiration
            })
        });

        if (response.ok) {
            licenses.push({
                count: licenseCount,
                price: licensePrice,
                expiration: new Date(licenseExpiration).toISOString()
            });
            licenseCount = '';
            licensePrice = '';
            licenseExpiration = '';
        } else {
            alert("Failed to add license. Please try again.");
        }
    }

    async function deleteLicense(price, expiration) {
        const response = await fetch(`/api/v1/movies/${movieId}/licenses`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ price, expiration })
        });

        if (response.ok) {
            licenses = licenses.filter(license => !(license.price === price && license.expiration === expiration));
        } else {
            alert("Failed to delete license. Please try again.");
        }
    }
</script>

<div>
    <div>
        <p><strong>id:</strong> {movieId}</p>
    </div>
    <div>
        <p><strong>title:</strong> {movie.title}</p>
    </div>
    <div class="flex">
        <p><strong>description:</strong> </p>
        <div class=" w-100">
            <p>{movie.description}</p>
        </div>
    </div>
    <div>
        <p><strong>price (€): </strong> {movie.price}</p>
    </div>
    <div class="flex flex-wrap gap-2">
        <div>
            <p><strong>cover:</strong></p>
            <img
                src="/api/v1/images/covers/{movie.cover}"
                alt="thumbnail"
                class="border-2"
            />
        </div>
        <div>
            <p><strong>banner:</strong></p>
            <img
                src="/api/v1/images/banners/{movie.banner}"
                alt="thumbnail"
                class="border-2"
            />
        </div>
    </div>
</div>
<div class="mt-4">
    <table class="table-auto w-full">
        <thead>
            <tr>
                <th class="px-4 py-2 text-left">License Count</th>
                <th class="px-4 py-2 text-left">Price</th>
                <th class="px-4 py-2 text-left">Expiration</th>
            </tr>
        </thead>
        <tbody>
            {#each licenses as license}
                <tr class="h-10">
                    <td class="border px-4 py-2">{license.count}</td>
                    <td class="border px-4 py-2">{license.price} €</td>
                    <td class="border px-4 py-2">{new Date(license.expiration).toLocaleDateString()}</td>
                    <td class="border h-full">
                        <button
                            onclick={() => deleteLicense(license.price, license.expiration)}
                            class="cursor-pointer bg-red-600 text-white p-4 w-full"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            {/each}
            <tr class="h-2"></tr>
            <tr class="h-12">
                <td class="border">
                    <input
                        bind:value={licenseCount}
                        type="number"
                        placeholder="License Count"
                        class="w-full h-full"
                        min="1"
                    />
                </td>
                <td class="border">
                    <input
                        bind:value={licensePrice}
                        type="number"
                        placeholder="Price (€)"
                        class="w-full h-full"
                        min="0.00"
                        step="1.00"
                    />
                </td>
                <td class="border">
                    <input
                        bind:value={licenseExpiration}
                        type="date"
                        placeholder="Expiration Date"
                        class="w-full h-full"
                    />
                </td>
            </tr>
        </tbody>
    </table>
    <button onclick={addLicense} class="cursor-pointer w-full bg-blue-600 text-amber-50 p-2">
        Add License
    </button>
</div>