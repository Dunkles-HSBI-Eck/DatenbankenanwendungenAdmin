<script>
    import { FileUpload } from '@skeletonlabs/skeleton-svelte';

    let title = $state();
    let description = $state();
    let price = $state();
    let coverFile = null;
    let bannerFile = null;
    let videoFile = null;
    let currentVideoPath = $state();

    let prev = $state();

    function UploadCover(event)
    {
        const files = event.files;
        console.log(files);
        if(!files || files.length === 0){ return};
        coverFile = files[0];
        console.log(coverFile);
    }
    
    function UploadBanner(event)
    {
      
        const files = event.files;
        console.log(files);
        if(!files || files.length === 0){ return};
        bannerFile = files[0];
        console.log(bannerFile);
    }
    
    function UploadVideo(event)
    {
        const files = event.files;
        console.log(files);
        if(!files || files.length === 0){ return};
        videoFile = files[0];
        console.log(videoFile);
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
          <textarea class="textarea" bind:value={description} rows="4" placeholder="Enter description here..."></textarea>
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
        <FileUpload name="example" accept="image/*" maxFiles={1} onFileReject={console.error} classes="w-fit border " onFileAccept={(e) => UploadCover(e)} />
    </div>
    <br>
    <hr class="hr" />
    <br>
    <div class="flex ">
        <span class="mr-10">banner</span>
        <FileUpload name="example" accept="image/*" maxFiles={1} onFileReject={console.error} classes="w-fit border " onFileAccept={UploadBanner} />
    </div>
    <br>
    <hr class="hr" />
    <br>
    <div class="flex ">
        <span class="mr-10">Video File</span>
        <FileUpload name="example" accept="video/*" maxFiles={1} onFileReject={console.error} classes="w-fit border " onFileAccept={UploadVideo}/>
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

    <button class="w-fit bg-blue-400 p-1 rounded" onclick={submit}>submit</button>
</div>