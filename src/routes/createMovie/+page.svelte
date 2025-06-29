<script>
	import { goto } from '$app/navigation';
    import { FileUpload } from '@skeletonlabs/skeleton-svelte';

    let title = $state();
    let description = $state();
    let price = $state();
    let coverFile = null;
    let bannerFile = null;
    let videoFile = null;
    let videoPath = $state();
    let actors = $state('');
    let writers = $state('');
    let directors = $state('');
    let submitText = $state('');

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

    function submitFail(msg)
    {
      console.warn("submit failed");
      submitText=msg;
    }

    function submit()
    {
      console.log(title);
        if(title == null){ submitFail("title not defined"); return};
        if(description == null){ submitFail("description not defined"); return};
        if(price == null){ submitFail("price not defined"); return};
        if(coverFile == null){ submitFail("no cover file uploaded"); return};
        if(bannerFile == null){ submitFail("no banner file uploaded"); return};
        if(videoFile == null && videoPath == null){ submitFail("no video file uploaded or video path definded"); return};
        const priceNumber = Number(price);
        if(isNaN(priceNumber)){submitFail("specified price is not a number"); return};
        console.log(priceNumber);
        const actorsList= actors.split(';');
        const directorsList= actors.split(';');
        const writersList= actors.split(';');
        console.log("All elements exist");
        //Do Post request



      submitText = "submit success";
      goto("/movies");
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
          <span class="label-text">Current video path (only if the video file is already on the server, else leave blank): </span>
          <input class="input" bind:value={videoPath} type="text" placeholder="Enter Path here" />
        </label>
    </div>

    <br>
    <hr class="hr" />
    <br>

    <div class="flex-cols">
      <label class="label">
          <span class="label-text">Directors (sperated by ';')</span>
          <input class="input w-96" bind:value={directors} type="text" placeholder="Enter names..." />
        </label>
        <br>
        <label class="label">
          <span class="label-text">Writers (sperated by ';')</span>
          <input class="input w-96" bind:value={writers} type="text" placeholder="Enter names..." />
        </label>
        <br>
        <label class="label">
          <span class="label-text">Actors (sperated by ';')</span>
          <input class="input w-96" bind:value={actors} type="text" placeholder="Enter names..."/>
        </label>
    </div>

    <br>
    <hr class="hr" />
    <br>

    <button class="w-fit bg-blue-400 p-1 rounded" onclick={submit}>submit</button>
    <p>{submitText}</p>
</div>