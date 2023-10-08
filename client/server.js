const axios = require('axios');

const SERVER_URL = 'http://api-load-balancer-755009770.us-east-1.elb.amazonaws.com:3000/sensor';

function sendSensorData() {
  const value = Math.random() * 100; // Generate a random sensor value (replace with your actual data source)

  axios
    .post(SERVER_URL, { value })
    .then((response) => {
      console.log(`Sent sensor data: ${value}`);
    })
    .catch((error) => {
      console.error('Error sending sensor data:', error);
    });
}

// Send sensor data every 5 seconds (adjust as needed)
setInterval(sendSensorData, 5000);
