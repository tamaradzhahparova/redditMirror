export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' https: ; object-src 'none'" />


    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reddit</title>
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
      window.__token__ = '${token}'
    </script>
</head>
<body>
    <div id="root">${content}</div>
    <div id="modalRoot"></div>
     <div id="dropdownRoot"></div>
</body>
</html>
`;
