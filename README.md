## First of all we mock up the project design 
* - header
    - logo
    - navlinks
 - body
   - search
   - Restaurant card
 - footer
   - logo
   - links
   - address
   - contact


## In this lecture i learn about  Structure about React project structure,Diff between named export/import and default export/import,Hooks

# Some important points related to App structure
  - 1. Make a seperate file for every components.
  - 2. All source code will in src folder.
  - 3. To make src(source) folder and inside src(source) folder we can keep components - folder,utlis folder,constants folder and App.js file.

# Difference between named export/import and default export export/import
  # named export
    - 1. A default export allows us to export a single value or function as the default export of a module
    - 2. Only a single value will be available to use from a file uses default export
  syntax : export default file_name;

   # import named module
    syntax : import {} from 'file_path';

  # default export
    - 1. A named export allows us to export multiple values or functions frm a module
    - 2. We can use one or more then one values from a file that uses named exports
  syntax : export const Header = () => {}

  # import default module 
    syntax : import file_name from 'file_path' 


# Why React is faster ?
  - React is faster beacuse 
    1. It can do dom manipulation faster
    2. It can do efficient dom manipulation
    3. There is something called virtual dom
    4. There is something called diff algorithm
    5. There is something called reconciliation


# What is Hooks in react ?
  - A hook is normal javascript function return by some facebook developer its a prebuilt function comes with superpowers.

  - There are some important hooks :- 

    1. useState() : useState() hook in react is a hook that allows us to state variables in our function components

    2. useEffect() : 


