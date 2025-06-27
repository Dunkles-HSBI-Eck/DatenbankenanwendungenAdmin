<script>
    import { FileUpload } from '@skeletonlabs/skeleton-svelte';

    let title = $state();
    let description = $state();
    let price = $state();
    let coverFile = $state();
    let bannerFile = $state();
    let videoFile = $state();
    let currentVideoPath = $state();

    function UploadCover(event)
    {

    }
    
    function UploadBanner(event)
    {

    }
    
    function UploadVideo(event)
    {

    }

    function submit()
    {

    }

</script>
<div class="m-10 flex-col">
    <div class="">
        <label class="label">
          <span class="label-text">Title</span>
          <input class="input" bind:value={title} type="text" placeholder="Enter title here" />
        </label>
    </div>
    <br>
    <hr class="hr" />
    <br>
    <div class="">
        <label class="label">
          <span class="label-text">Description</span>
          <textarea class="textarea" bind:value={title} rows="4" placeholder="Enter description here..."></textarea>
        </label>
    </div>
    <br>
    <hr class="hr" />
    <br>
    <div class="">
        <label class="label">
          <span class="label-text">Price</span>
          <input class="input text-right" bind:value={price} type="text" placeholder="Enter Price here" />
        </label>
    </div>
    <br>
    <hr class="hr" />
    <br>
    <div class="flex ">
        <span class="mr-10">cover</span>
        <FileUpload name="example" accept="image/*" maxFiles={1} onFileChange={console.log} onFileReject={console.error} classes="w-fit border " />
    </div>
    <br>
    <hr class="hr" />
    <br>
    <div class="flex ">
        <span class="mr-10">banner</span>
        <FileUpload name="example" accept="image/*" maxFiles={1} onFileChange={console.log} onFileReject={console.error} classes="w-fit border " />
    </div>
    <br>
    <hr class="hr" />
    <br>
    <div class="flex ">
        <span class="mr-10">Video File</span>
        <FileUpload name="example" accept="video/*" maxFiles={1} onFileChange={console.log} onFileReject={console.error} classes="w-fit border " />
    </div>
    <div class="">
        <label class="label">
          <span class="label-text">Current video path: </span>
          <input class="input" bind:value={currentVideoPath} type="text" placeholder="Enter Price here" />
        </label>
    </div>

    <br>
    <hr class="hr" />
    <br>

    <button class="w-fit bg-blue-400 p-1 rounded">submit</button>

</div>