<script>
    let { data } = $props();
    let req = $state(data.requests);
    function disposeRequest(id)
    {
        console.log("clicked", id, data.requests[0].id);
        for(let i = 0; i < data.requests.length; i++)
        {
            if(data.requests[i].id == id)
            {
                
                data.requests.splice(i, i+1);
                req.splice(i,i+1);
                break;
            }
        }
    }
</script>

<div class="flex flex-col items-center p-4">
    {#each req as request}
        <div class="p-4 mb-4 rounded bg-blue-300">
            <h2 class="text-xl font-bold">{request.id}</h2>
            <p class="text-gray-700">Requested by: {request.user_id}</p>
            <p class="text-gray-600">Status: {request.status}</p>
            <p>Massage: {request.massage}</p>
            <p class="text-gray-500 text-sm">Requested on: {new Date(request.requested_at).toLocaleDateString()}</p>
            <button class=" bg-red-500 rounded-2xl w-20 mt-5" onclick={() => disposeRequest(1)}>dispose</button>
        </div>
    {/each}

    {#if req.length === 0}
        <p class="text-gray-500">No requests found.</p>
    {/if}
</div>
