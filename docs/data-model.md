# Data Model for DynamoDB

## Tables
* **User** - name, email, **username**, timestamp, status
* **ShowList** - **username**, showlistname, tags, timestamp 
* **Show** - **showlistname**, **showname**, ott, genre, url, timestamp
* **Reaction** - reacting_user, show, reaction_type, timestamp
* **Friendship** - followed_user, following_user, timestamp

## Access Patterns 
### Read
* Get show lists for a user 
* Get showlist for a user 
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
| Entity        | Hash           | Range  |
| :------------- |:-------------:|:-----:|
| User    | `USER#<USERNAME>` | `#METADATA#<USERNAME>` |
| ShowList     | `USER#<USERNAME>`      | `SHOWLIST#<USERNAME>#<LISTNAME>` |
| Show | `SHOWLIST#<USERNAME>#<LISTNAME>` | `SHOW#USERNAME#<LISTNAME>#<SHOWNAME>` |
| Reaction | `REACTION#<LISTNAME>#<TYPE>`     | `SHOW#<LISTNAME>#<TIMESTAMP>` |
| Friendship | `USER#<USERNAME>`      | `#FRIEND#<FRIEND_USERNAME>` |

