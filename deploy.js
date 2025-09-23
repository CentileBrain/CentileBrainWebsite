var ghPages = require('gh-pages');
var path = require('path');
ghPages.publish(
    path.join(process.cwd(), 'dist'),
    {
        depth: 1,
        cname: 'centilebrain.org',
        logger: function (message) {
            console.log(message);
        },
    },
    function (err) {
        if (err) {
            throw err;
        }
        console.log('Site has been published.');
    }
);
