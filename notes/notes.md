# Notes

I used yarn instead of npx to initialize create-react-app

`npx create-react-app frontend`

Is what is instructed in the video but it didn't work for me even after uninstalling globally. Maybe, my unistall didn't work. But I followed these directions from the github repo.

> If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app to ensure that npx always uses the latest version.

I was able to get up and running with Yarn

`yarn create react-app my-app`

****

## Setting the proxy

In the video it looks like the line 

`"proxy":"http://localhost:8000"`

is inside the `"browserslist"` value in `package.json`

Keeping it there caused a 404 error when I made the axios call. I moved that line up to the top level (under `"private": true,` for me) and now my data is populating.
