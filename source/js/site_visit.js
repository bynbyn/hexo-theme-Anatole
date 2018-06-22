+function()
{
    function get(url)
    {
        return new Promise(function(resolve,reject)
        {
            const xhr = new XMLHttpRequest();
            xhr.open('get', url);
            xhr.onerror = function()
            {
                reject(xhr.response);
            };
            xhr.onload = function()
            {
                if(xhr.status === 200)
                {
                    resolve(xhr.responseText);
                }
                else
                {
                    reject(xhr.responseText);
                }
            };
            xhr.send();
        });
    }

    const params =
        {
            name: 'site_visit',
            url: location.href,
            agent: `${navigator.userAgent}///
                    ${navigator.vendor}///
                    ${navigator.platform}///
                    ${navigator.product}///`
        }

    const url = 'http://twesix.cn/email-to-me/send?params=' + JSON.stringify(params)
    // const url = 'http://localhost:1010/send?params=' + JSON.stringify(params)

    get(url)
        .then(function(result)
        {
            console.log(result)
        }, function(error)
        {
            console.log(error)
        })
}()