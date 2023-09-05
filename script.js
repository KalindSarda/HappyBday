document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("content");
    const audio = document.getElementById("birthdayAudio");
	
    // Function to play the audio and display the content
    function playAudioAndShowContent() {
        // Play the audio
        audio.play();

    }

    // Attach the click/tap event listener to the container
    container.addEventListener("click", playAudioAndShowContent);

    // Attach the click event listener to the teddy image
    const teddyImage = document.getElementById("teddyImage");
    teddyImage.addEventListener("click", playAudioAndShowContent);


    // You can add additional logic or animations here if needed


    // Function to handle the "Stop" button click
    function handleStopButtonClick() {
        const confirmStop = confirm("Are you sure you want to stop?");
        if (confirmStop) {
            alert("Lol you thought I would stop!!");
	}
    }

    // Attach the click event listener to the "Stop" button
    const stopButton = document.getElementById("stopButton");
    stopButton.addEventListener("click", handleStopButtonClick);

 // Function to show the optional table row when either of the first two rows is clicked
    function showOptionalRow() {
        const optionalRow = document.getElementById("optionalRow");
        optionalRow.style.display = "table-row"; // Show the optional row
    }

    // Attach the click event listener to the first and second rows to show the optional row
    const row1 = document.querySelector("#infoTable tr:nth-child(1)");
    row1.addEventListener("click", showOptionalRow);

    const row2 = document.querySelector("#infoTable tr:nth-child(2)");
    row2.addEventListener("click", showOptionalRow);

});
