function copyToClipboard() {
            var textToCopy = window.location.href;
            
            // Create a temporary input element
            var tempInput = document.createElement("input");
            
            // Set the input element's value to the text you want to copy
            tempInput.value = textToCopy;
            
            // Append the input element to the DOM
            document.body.appendChild(tempInput);
            
            // Select the text in the input element
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); /* For mobile devices */
            
            // Copy the selected text to the clipboard
            document.execCommand("copy");
            
            // Remove the temporary input element
            document.body.removeChild(tempInput);

            alert("복사되었습니다");
        }