updateDateTime();

function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
        
        // Update order date
        const dateOptions = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        };
        document.getElementById('orderDate').textContent = now.toLocaleDateString('en-US', dateOptions);
}