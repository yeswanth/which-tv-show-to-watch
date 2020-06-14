# Data Model for DynamoDB

## Tables
* **User** - name, email, **username**, timestamp, status
* **List** - **username**, listname, tags, timestamp 
* **Show** - **list**, name, ott, genre, url, timestamp
* **Reaction** - reacting_user, show, reaction_type, timestamp
* **Friendship** - followed_user, following_user, timestamp

## Access Patterns 
