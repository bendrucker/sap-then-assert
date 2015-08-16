# sap-then-assert

Playground for using sinon-as-promised with Mocha and Angular-style $q but without Angular, pure Node

## Usage

1. npm install
2. npm run test

The results:

1. The tests will run to completion.
2. The first, passing assertion will be executed.
3. The second, failing assertion is not evaluated.
4. But the ``console.log`` (as well as the ``console.log`` in the 
   controller) are executed.
   
This example contains no ES6 nor Angular.

## Background

I like to use TDD when writing my Angular apps. I have found that 
treating them like Node applications speeds up velocity. I write my 
controllers and services as if they had *nothing* to do with Angular, 
then try to write my tests the same way. No use of Karma to bring in 
Angular and a DOM. Just Mocha (in WebStorm.)

I am hoping to extend this to promise-based services. I write my 
promises using the Angular 1.3+ ES6-style promise constructor. I also 
write my Angular code in ES6, using Babel. I can then write my tests in
ES6 and use the Babel polyfill with a tiny shim for the ``$q`` factory.

I have this all working fine when my controller test uses my service 
code directly. But when I try to mock my service promise, the above 
weird case happens.
 