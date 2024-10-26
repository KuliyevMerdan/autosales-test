document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.container');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            jobType: document.getElementById('jobType').value,
            jobSource: document.getElementById('jobSource').value,
            jobDescription: document.getElementById('jobDescription').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipCode: document.getElementById('zipCode').value,
            area: document.getElementById('area').value,
            startDate: document.getElementById('startDate').value,
            startTime: document.getElementById('startTime').value,
            endTime: document.getElementById('endTime').value,
            testSelect: document.getElementById('testSelect').value
        };

        // Make a POST request to the server to create a deal
        fetch('https://your-server-endpoint.com/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Data saved successfully!');

            // Close the window
            window.close();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('There was an error saving your data. Please try again.');
        });
    });
});