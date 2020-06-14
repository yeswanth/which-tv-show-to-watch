# Data Model for DynamoDB

## Tables
* **User** - name, email, **username**, timestamp, status
* **List** - **username**, listname, tags, timestamp 
* **Show** - **listname**, name, ott, genre, url, timestamp
* **Reaction** - reacting_user, show, reaction_type, timestamp
* **Friendship** - followed_user, following_user, timestamp

## Access Patterns 
### Read
* Get lists for a user 
* Get list for a user 
* Get shows for a list 
* Get shows by genre 
* Get userprofile
* View followers for a useer 
* View followed for a user 

### Write
* Create list & shows 
* Create/Update User profile 
* Follow user 
* User adds reaction for a show 

## Implementation 

