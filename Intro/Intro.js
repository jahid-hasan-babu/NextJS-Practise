/*
NextJS is a react framework 
it uses React for building user interface
Provide additional features that enable you to build production ready applications
We don`t need to install additional packages as NextJs Provide everything we need


Why we learn NextJS

1.Routing
2.API routes
3.Rendering
4.Data fetching
5.Styling
6.Optimization
7.Dev and prod build system

Requirements
Html, CSS, JS, ReactJS

/------------state-------------/
state is a special variable.


/------------component-------------/
next js has two type components
1.server component
2.client component

uses of server component:
1.Fetch data
2.Access backend resources(directly)
3.Keep sensitive information on the server (access key, tokens, API keys, etc)
4.Keep large dependencies on the server  

uses of client component:
1.Add interactivity and event listeners (onclick,onchange)
2.Use state and Lifecycle Effects
3.use browser only apis
4.use custom hook
5.use React class component

/------------file structure-------------/
.next ----> build production file .Here every file are minimize
node_modules ------> Libraries and package are installed here
public ------> image, logo every public materials we put here
src --------> favicon, global.css, layout JS like main HTML (index.js) file or main panel, page.js--> home page all component we save here. page.module.css is use to specific design the page.js file.

.eslintrc.json --------> syntax error,bug,violation
.gitignore -----> many package file not necessary he ignore them
jsconfig.json -------> configuration file for js 
next.config.js ---> configuration file for Next.js
package.lock.json------> package dependency for package.json file
readme ---> github documentation

/------------Routing-------------/
no need to external routing package
-->file system based routing
--->nested routing--router inside router

/------------Dynamic Routing-------------/
no need to create many folder
[filename]--> use this to create dynamic routing
in file page use params.filename
it show specific 1 route 

/------------Segment Routing-------------/
[...filename]--> use this to create segment routing
in file page use params.filename
it show multi segment route 

/------------404 page-------------/
next show auto 404 page.but we can edit and customize it.
---> create a not-found.jsx file in app directory

/------------Middleware-------------/
Middleware is a function 
middleware file will be create in src file
import to NextResponse 

/------------File colocation Private Folders-------------/
when we create a file tsx, js, jsx then ut public and other file is private thats call colocation -->it means default set 
----> private file _filename
/------------Route Group-------------/

we can put the route folder in one folder 
---> to achieve this (folderName)

/------------Layout Nested Layout-------------/
It similar like that route
it declare to root file
create a layout.jsx file and call {children}
/------------Title metadata-------------/
export function generateMetadata() {
  return {
    title: "Welcome to JB Website",
    description: "This is JB Website",
  };
}
*/
