import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
       render(){
        return(
            <div>
                <center> <h1>Welcome to home component</h1></center>
                <p>

form
table



react-router-dom


create user  -- user/form  --onClick submit --ocalstorage  -- list
tableList

edit/delete  -- delete from table as well as localstorage
edit -- user/form/

{/* data= [{name, email, password, id}] */}

  - 01-07-2022
Task :-
1Creating a routing ;
2Data Show on Local Storge .
 Edit / delete /update unique id   

prop.histry.push


  Task Update 

 Class Component Crud Application Complete
 Use Bootsrap Properties and localstorage data save
 creating a routing and pages complete. 
 


@all  Here is the task details that have to complete whom have completed redux saga
1. Create new project and setup material ui and design your own button with the help of forwardRef and user in your entire applciation where we need.
2. Design register page and take name, email, phone, password field and take roleType as user and on click register button all data should be store in an array and localstorage. and at the time of registration email should not be duplicate.
3. create and design login page and add login functionality by email/password.
4. create dashboard (header/sidebar) and show users list in table format that was registered at the time of registration.
5. add search input above of table when user start typein search box table list should be filter.
6. add edit/delete button on table row and when click on delete should show on confirmation message "Are you sure want to delete" click yes item should be remove from table and as well as localstorage.
7. onClick edit a modal popup show be open with the clicked data and update button in modal and onClick update data should be update in table as well as localstorage.
8. If user is logged in don't have access to login/register pages.
9. If user is not logged in dashboard pages don't have access.
10. onClick delete/update a notification should be showen as in "user has been deleted.", "user has been updated".

Note: use redux saga for state management and material UI for frontend. after completion task let me know I will add more feature as we will create role based routes.
Let me know if you have any query

                </p>
            </div>
        );
       } 
}

export default Home;
