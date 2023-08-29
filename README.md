<div align="center">

![Cover](https://imgur.com/Kpzk2LQ.png)

![Github stars](https://img.shields.io/github/stars/j471n/j471n.in?style=flat-square)
![Github Forks](https://img.shields.io/github/forks/j471n/j471n.in?style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/j471n/j471n.in?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/j471n/j471n.in?style=flat-square)

</div>

## Tools Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://github.com/mdx-js/mdx)

- **Amplify**: [Amplify](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/#summary)
- **Animations**: [Framer Motion](https://framer.com/motion)
- **Deployment**: [Vercel](https://vercel.com)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Plugins**: [rehype](https://github.com/rehypejs/rehype)
- **Analytics**: [Google Analytics](https://analytics.google.com/analytics/web/)
- [SWR](https://swr.vercel.app/)
- [Email.js](https://www.emailjs.com/)
- [React Toastify](https://github.com/fkhadra/react-toastify)

## Run Locally

Clone the project:

```bash
git clone https://github.com/chaoslegacy/iyoussef.cc.git
```

Go to the project directory:

```bash
cd j471n.in
```

Install dependencies

```bash
yarn
# or
npm install
```

Start the server:

```bash
yarn dev
# or
npm run dev
```

After that server should be running on [localhost:3000](http://localhost:3000)

> I am using [yarn](https://yarnpkg.com/) you can use [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

> Warning: You could run into errors if you don't populate the `.env.local` with the correct values

## Setting up the Environment

Rename [`.env.example`](/.env.example) to `.env.local` and then you need to populate that with the respective values.

- `NEXT_PUBLIC_YOUR_SERVICE_ID`: Go to the [Admin Panel](https://dashboard.emailjs.com/admin) of [emailjs.com](https://emailjs.com). If you haven't already added a service then Click on the **Add Service** Button as shown in the image
  ![](https://i.imgur.com/bK5wzkD.png)
  Then choose any method you want I am using **Gmail**
  ![](https://i.imgur.com/zTrFCNJ.png)
  - Then first click on the **Connect Account and log** in with your Gmail account that you want to use to get the emails from.
  - In the second step click on **Create Service** and then copy the **Service ID** and add this ID to `NEXT_PUBLIC_YOUR_SERVICE_ID` in `.env.local`
    ![](https://i.imgur.com/c8ZkUf5.png)
- `NEXT_PUBLIC_YOUR_TEMPLATE_ID`: To get the Template ID visit the [Email Templates](https://dashboard.emailjs.com/admin/templates) section and click on **Create New Template**.
  ![](https://i.imgur.com/TQLrQuz.png)
  And then you will see a window where you can edit your email template after you are satisfied with your template then click on the Save button in the top right corner.
  ![](https://i.imgur.com/98adqhN.png)
  After that you will have your Template ID as shown in the image below:
  ![](https://i.imgur.com/pcqKu3f.png)
- `NEXT_PUBLIC_YOUR_USER_ID`: To get your User ID, Go to [Account](https://dashboard.emailjs.com/admin/account) and then you will be able to see it:
  ![](https://i.imgur.com/oU3tBiY.png)
- `NEXT_PUBLIC_BLOGS_API`: I am using [Dev.to API](https://developers.forem.com/api) to fetch all the blog stats. You can get this API at the bottom of the [Extensions](https://dev.to/settings/extensions) section.
  ![](https://i.imgur.com/zh7V0ZB.png)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: You can follow this [guide](https://support.google.com/analytics/answer/9539598?hl=en) to get your Google Analytics ID and then you will be able to use Google Analytics in this project.
- **Spotify Integration:** I have used [Spotify API](https://developer.spotify.com/documentation/web-api/). So, you need three Environment Variable values-
  - `SPOTIFY_CLIENT_ID`
  - `SPOTIFY_CLIENT_SECRET`
  - `SPOTIFY_REFRESH_TOKEN`
    You need to follow this [blog](https://j471n.in/blogs/spotify-api-nextjs) to get these variables' values.
- [**Google Analytics Data API**](https://developers.google.com/analytics/devguides/reporting/data/v1): I am using this API to get the analytics of this website so that I can show how many user visit this site in the last 7 days. In this you will need the value of the following properties:
  - `GA_PROPERTY_ID`
  - `GA_CLIENT_EMAIL`
  - `GA_PRIVATE_KEY`
    I have written a [blog](https://j471n.in/blogs/google-analytics-data-api) that shows how you can get these properties and guides to use them.




- `GITHUB_TOKEN`: Follow these steps to generate a GitHub token that I am using fetch my GitHub details:

  **Step 1: Accessing GitHub Developer Settings**

  - Log in to your GitHub account.
  - Click on your profile picture in the top-right corner of the page.
  - From the drop-down menu, select Settings.

  ![](https://i.imgur.com/h7jtNeH.png)

  **Step 2: Navigating to Developer Settings**

  In the left sidebar, scroll down and click on Developer settings.

  ![](https://i.imgur.com/JHFdEhP.png)

  **Step 3: Creating a New Personal Access Token**

  - In the Developer settings page, click on Personal access tokens and then Click on Tokens (Classic).

    ![](https://i.imgur.com/f2eY9vB.png)

  - Next, click on the Generate new token button.

    ![](https://i.imgur.com/V7gBKQh.png)

  - After selecting the necessary permissions, click on the Generate token button at the bottom of the page.
  - GitHub will generate a new token for you. Make sure to copy the token value.
  - **Important**: Treat this token like a password and keep it secure. Do not share it publicly or commit it to a version control repository.
- `EMAIL_VALIDATION_API`: You can follow the following steps to get the `API_KEY` to validate the email address for the newsletter:
  - You need to have an account on [RapidAPI](https://rapidapi.com/).
  - If you have an account then you can just [subscribe](https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain/pricing) the free version of [E-mail Check Invalid or Disposable Domain](https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain/). Which will give you the 1000 request/month. 

    ![Rapid API-1](https://imgur.com/OMFF69O.png)

  - Then you'll get the `API_KEY`, which you can store in your `.env.local`.

- `TMDB_ACCOUNT_ID` and `TMDB_ACCESS_TOKEN`: To enable seamless integration of movie and TV show data, we will use the TMDB API, which offers comprehensive information about media content. The following steps will guide you:

  **1. Overview of TMDB Integration**
  
  Previously, movie and TV show data were manually stored using Supabase, requiring tedious manual work. To streamline the process and automatically update ratings, we have switched to TMDB (The Movie Database).

  **2. Creating or Logging into Your TMDB Account**
  
  If you already have a TMDB account, log in with your existing credentials. Otherwise, visit TMDB's website and create a new account.

  **3. Generating API Key**
  
  After logging in, navigate to the API section in your account settings. Here, you can generate a new API key to access TMDB's data and services.

  ![generate api key](https://i.imgur.com/y0wA21L.png)

  **Completing the API Key Request Form**
  
  Fill in all the required details in the API key request form, and make sure to accept the terms and conditions.

  ![complete api key request form](https://i.imgur.com/FZ1RdPf.png)

  **Obtaining API Key and Access Token**

  Once you have completed the application registration, you will receive an API key and an access token. Assign the access token to the `TMDB_ACCESS_TOKEN` variable.

  ![API Key and Access Token](https://i.imgur.com/Q6LI6EF.png)

  **Finding Your TMDB Account ID**
  
  To get the `TMDB_ACCOUNT_ID`, log in to the TMDB system and visit the developer website. There, you will find your account ID associated with your account.

  ![Finding Your TMDB Account ID](https://i.imgur.com/AdEPtb9.png)

  With the `TMDB_ACCOUNT_ID` and `TMDB_ACCESS_TOKEN` acquired from the steps above, you can now seamlessly access and update movie and TV show data through TMDB's API, automating the process and making it significantly more efficient. Enjoy your improved movie and TV show list management experience!


## Screenshots & Demo

![](https://imgur.com/VEGYXfy.png)

![](https://imgur.com/ohnSGok.png)

![](https://imgur.com/nMgwzYq.png)

![](https://imgur.com/zKKR07K.png)

![](https://imgur.com/H0a1jQn.png)

![](https://imgur.com/hnztqEv.png)

![](https://imgur.com/ZgeSzHz.png)

## Documentation

I have written an in-depth blog on [How I Made My Portfolio with Next.js](https://dev.to/j471n/how-i-made-my-portfolio-with-nextjs-2mn3). You can visit there to look at the detailed guide about this portfolio.
