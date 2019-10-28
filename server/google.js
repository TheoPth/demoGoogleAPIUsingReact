// GOOGLE
const { google } = require('googleapis')
const clientId = "705645278924-tj9tgjjbkv9h8mdj4mdbohpo860ke39d.apps.googleusercontent.com"
const clientSecret = "1ZodnVBQlGSab7Y7gL7pspm2"
const redirect = "http://localhost:3000"

module.exports = {
    // Create the auth client
    authorize: function (token, callback) {
        const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirect);
        oAuth2Client.setCredentials(token);
        callback(oAuth2Client);
    },
    /**
     * Lists the names and IDs of up to 10 files.
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
    listFiles: function (auth) {
        const drive = google.drive({ version: 'v3', auth });
        drive.files.list({
            pageSize: 10,
            fields: 'nextPageToken, files(id, name)',
        }, (err, res) => {
            if (err) return console.log('The API returned an error: ' + err);
            const files = res.data.files;
            if (files.length) {
                console.log('Files:');
                files.map((file) => {
                    console.log(`${file.name} (${file.id})`);
                });
            } else {
                console.log('No files found.');
            }
        });
    }
}
