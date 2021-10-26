# My password manager

## Description
My password manager is personal project I built so I could manage my accounts in different online services. Building it I could practice working with the back-end and also review some front-end knowledge. The focus of this project was to build something with sequelize, which is a technology I'm learning at this time.

It has a pre-defined amount services, that is those I currently use, such as Netflix, Github, Notion, etc. To add another service it has to do it manually in the code and database, I could added a funcionality where I could added in the application itself, but since it's only me that is going to use it, I prefered not to added, but it can be something I could add in the future, as practice

***
<br>

## Used technologies 


1. HTML
2. CSS
3. Bootstrap
4. Vanilla Javascript
5. EJS
6. NodeJS
7. Express
8. MySQL
9. Sequelize

***
<br>

## Flow

![index page](https://cdn.discordapp.com/attachments/611633543420051458/902599912741548062/unknown.png)

With the services pre-defined, the user (me) can chose the one he wants to add a new account, he will be redirected to that service's page, where he can see the accounts he already added in the past:

![index page](https://cdn.discordapp.com/attachments/611633543420051458/902600218275631174/unknown.png)

Here he will be able to edit an existing account, delete it, or create another one. At the upper left corner, it will be showing the icon of the server the user is managing the accounts.

If he wants to create another account, he will be redirected to a form:

![index page](https://cdn.discordapp.com/attachments/611633543420051458/902600734573461585/unknown.png)

But, if he wants to edit an existing account, he will be redirected to another form, with the prior account information loaded in the inputs:

![index page](https://cdn.discordapp.com/attachments/611633543420051458/902600795172790313/unknown.png)

However, if he wants to see that account information by clicking on the link, he will be redirected to a page that show that account information:

![index page](https://cdn.discordapp.com/attachments/611633543420051458/902600645020880956/unknown.png)

***
<br>

## Data validation

This part for me was the hardest, not because the data validation as such, this part was easier using the **express-validator**. The hardest part was processing and redirectioning the user after a request with come error in the form. For example, if he tries to add an account with the password missing, the page would reload sending an error and showing it to the user so he could fix. 

But unfortunately I wasn't able to build this feature. After hours of research the closest to a way of doing it, was using AJAX, which I don't know yet, and I think it wouldn't be worth it learning it only for this project, though I intend to study it in the future.

The best I could do, was if there is an error in the request, the page reload and that's it. No error message or something like that, it only doesn't create the account.

***

## Learning an final considerations

I liked very much working on this project, maybe because it is something kind of helpful, that I can really use in my life. It's also the first project I worked with data validation, and it was pretty funny learning the base of express-validator.

With this project I could learn:

1. Sequelize and MySQL, 
2. Data validation,
3. Create a basic categories filter,
4. More about middlewares
5. More about asynchronous code and promises

***
