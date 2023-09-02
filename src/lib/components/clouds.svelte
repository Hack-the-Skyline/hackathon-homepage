<script>
    /* To do for this component:
    - Make the cloud transition from right side of the page back to left seamless
        - Alternatively limit the cloud to drift back and forth a few pixels in a certain area
    - Make animating the background work, the bg should float up and down slightly to make the clouds look more alive
    - Maybe have Kevin draw a middle layer???

    - IMPORTANT Make clouds stop going over the splash text and go underneath it instead, I don't know how to do that.
 */
    import CloudBack from '$lib/assets/clouds/cloudback.png';
    import CloudFront from '$lib/assets/clouds/cloudfront.png';
    let cloudBackPosition = 0;
    let cloudFrontPosition = 0;

    function animateClouds() {
        cloudBackPosition += 10;
        cloudFrontPosition += 10;

        if (cloudBackPosition >= window.innerWidth || cloudFrontPosition >= window.innerWidth) {
            cloudBackPosition = 0;
            cloudFrontPosition = 0;
        }
    }

    setInterval(animateClouds, 100);
</script>


<div class="container clouds">
    <img src={CloudBack} alt="Cloud Back" style="position: absolute; left: {cloudBackPosition}px;" />
    <img src={CloudFront} alt="Cloud Front" style="position: absolute; left: {cloudFrontPosition}px;" />
</div>

