# Social reviewer

According to our research many review site lacks the social media feeling, also another problem is that on many review sites only focus on a specific subject category.
Social reviewer makes reviewing more fun and interacts the user with the reviewer in a fun way and the important part is that in the category you can choose to review everything from electronics to cars. Users can create account, create reviews, comment, upvote, see the most popular and most commented reviews. Users can also see all the profiles that are listed on the site. The target group here is anyone that would like all the reviews from diffrent categories to be on the same webpage in a fun way.

# Website link

* [Social reviewer website](https://social-reviewer-frontend.herokuapp.com)

# User stories
* As a user I would like to view a public page where all the reviews are displayed on one page so I can see everything on one page.

* As a user I would like to be able to delete/edit my comments, and delete my likes if I changed my mind.

* As a user I would like to be able to se how long a comment and a review was created so i know how relevant the review is.

* As a logged in user, I would like to be able to access and list my personal created reviews, so I know which reveiws are mine.

* As a user I would like to be able to create a like and comment on diffrent reviews

* As a user I would like to see how many likes and comments a review has so I Know how popular that review is.

* As a user I would like to be able to search after a profile based on a name or username profile.

* As a user I would like to be able to choose a category for my reviews so that I can on the review what category the reviews belong to.

* As a user I would like to be able to edit/delete a review so that I can have the freedom to edit/delete the review

* As a user I would like to be able to log out from the account whenever I want to

* As a user I would like to know if I am logged in so I don't have to log in every time.

* As a user I would like to be able to sign up and create my own account on the website.

# Wireframes

## Homepage
The Homepage will welcome the user with a short text and below the text there will be a carousel with arrows. This carousel will contain, "Most liked reviews", "Most commented reviews" and also it will display a list with categories where the user will be able to click the category list. On the last page in the category there will also be a link that takes the user to show all the reviews that is on tha page. On the top the logo and navbar will always be visable to the user.

![Wireframe homepage](docs/websitemockups/homepage.png)

## All reviews
This page will display all the reviews that have been created on the website. Inside the cards a image and some text that the user have been asked to input will be displayed. If the user is owner of the post then two symbols one for edit and one for delete will be displayed and clickable. A search bar will also be avalible where the user can search username and title and category to find a review.

![Wireframe allreviews](docs/websitemockups/all-reviews.png)

## My reviews
 This page will display only the reviews that the user have created, this page will only be available when the user is logged in.

![Wireframe myreviews](docs/websitemockups/my-reviews.png)

## Profiles
This page will display all the profiles that is created on the webpage, the logged in user will also be displayed with a edit button where the user can change "name" and "bio" content. The created review count will also be displayed here and show how many reviews the user have created.

![Wireframe myreviews](docs/websitemockups/profiles.png)

## Create review
This page will only show up if the user is logged in. Here the user will be asked to input some information and upload a image, then the user can click submit and the review will be displayed on the diffrent review pages.

![Wireframe createreviews](docs/websitemockups/create-reviews.png)


## Edit review
This page is identical to the "create review" page. Here the user will be able to edit the info that is alredy inputed.

![Wireframe createreviews](docs/websitemockups/edit-review.png)

## Edit Profile
Here the user will be able to edit the profile details such as name,bio and upload a image for the user avatar.

![Wireframe createreviews](docs/websitemockups/edit-profile.png)

## Are you sure ? page
This will show up every time a user makes a delete, exampale when deleting a review.

![Wireframe delete](docs/websitemockups/delete.png)

# Database diagrams

The database is used together with framework Django, the software is called: PostgresSql and it is a relational database. The is 6 diffrent models and all wil be displayed below:

## Category

![Database category](docs/database/database-category.png)

## Comments

![Database comments](docs/database/database-comments.png)

## Likes

![Database likes](docs/database/database-likes.png)

## Post

![Database post](docs/database/database-post.png)

## Profile grades

![Database profile-grades](docs/database/database-profile-grades.png)

## Profile

![Database profile](docs/database/database-profile.png)

# Features and functionality

## Homepage
User will be welcomed with a short intro text that will encoruage the user to see all the reviews. There is a dynamic navbar that changes based on if the user is logged in or out. Below the intro text there is a carousel with arrow that displays:

![Website homepage](docs/website/homepage.png)

## Categories
In the first page of the carousel, there is a option of categories to choose from, depending on what the user clicks on the user will be redirected to the reviews that is relevant to the category that is clicked on.

![Website homepage-category](docs/website/homepage-category.png)

## Most Liked
The second page in the carousel displays a list of diffrent reviews that is sorted from the most liked review to the lowest, the review with the most likes will be displayed at the top of the list.

![Website homepage-mostliked](docs/website/homepage-mostliked.png)

## Most commented
The third page in the carousel will display a list with diffent reviews that is sorted with the most commented reviews starting from the top down to the lowest. All the small cards can be clicked and will take the user to the relevant review that is clicked on.


![Website homepage-mostcommented](docs/website/homepage-mostcommented.png)