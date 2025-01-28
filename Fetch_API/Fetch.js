async function fetchData() {
    try {
        console.log('Fetching data...');
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
 
        const data = await response.json();
        console.log('Fetched data:', data);  
 
       
        if (Array.isArray(data)) {
           
            const container = document.getElementById('data-container');
            data.forEach(user => {
                const userElement = document.createElement('div');
                userElement.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Username: ${user.username}</p>
                    <p>Company: ${user.company.name}</p>
                   
                `;
                container.appendChild(userElement);
            });
        } else {
            console.error('The data is not an array:', data);
        }
 
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
