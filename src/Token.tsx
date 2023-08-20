import axios = require('axios');

const getTokenWithClientCredentials = async () => {
  const tenantId = 'ebd31e07-e19a-41fb-aebf-7d2ab2391202';
  const clientId = '7e489452-1f59-4673-bad9-4fde66e11bce';
  const clientSecret = 'EDx8Q~vqNo2bY7dUL26cioAyLhFqbpa0YRl15aUm'; // Store this securely
  const scope = 'https://graph.microsoft.com/.default'; // Modify based on your needs

  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const data = new URLSearchParams();
  data.append('client_id', clientId);
  data.append('scope', scope);
  data.append('client_secret', clientSecret);
  data.append('grant_type', 'client_credentials');

  try {
    const response = await axios.post(tokenUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

// Use the function
(async () => {
  const token = await getTokenWithClientCredentials();
  console.log('Received token:', token);
})();
