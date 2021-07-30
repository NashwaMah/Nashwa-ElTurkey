# Nashwa-Kamal

# Application Test Plan 

Will be found in ../Wuzzuf_App/Wuzzuf_TestPlan.pdf" file

------------------------

# Application bug list 

Will be found in ../Wuzzuf_App/Wuzzuf App _List of bugs.xlxs file 

-----------------------

# Duckduckgo list of Testcases 

Will be found in ./DuckGo Project Testcases.xslx

------------------------

# Automation Project

* Language  : Javascript 

* Framework : Test Cafe

-----------------------

* Before run the project :

   1) Download Node.js 
   2) inside Project Terminal run below :

          sudo npm install 
          sudo  npm start
          npm install testcafe
          npm install axios
          npm install dotenv
        
             
--------------------------                    

* To Run Duckduckgo automation on :

      Chrome  : npm run test:chrome 
      Firefox  : npm run test:firefox 
      Safari  : npm run test:safari 
      edge  : npm run test:edge 
      mobile (iphone X)  :pm run test:mobile 

--------------------------------                    
   
* To Run GoRest API Test :

      npm run test:API

-----------------------------               

* To Update Test data for APIs  :

      Update json file  ../APITest/test-helpers/test-data/comments_data.json
      Update json file  ../APITest/test-helpers/test-data/posts_data.json
      Update json file ../APITest/test-helpers/test-data/todos_data.json
      Update json file ../APITest/test-helpers/test-data/user_data.json

      Create new file with name .env and add data as below:

      duckduckgoURL="https://duckduckgo.com/"
      APIUrl= "https://gorest.co.in/public/v1/"
      BearerToken=""

      * bearer token you will get it when log in to duckduckgoURL="https://duckduckgo.com/"


------------------------------------------------
