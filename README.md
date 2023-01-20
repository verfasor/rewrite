# AI Rewriter

This project rewrites any paragraph for you using AI. A modded version of twitterbio.com by [Hassan El Mghari](https://github.com/Nutlope) at Vercel. The demo linked in the website section of the repo may not work, it's automated by Vercel.

I do not plan to maintain this project. So please fork and do your thing instead of raising issues. 

## How it works

This project uses the [OpenAI GPT-3 API](https://openai.com/api/) (specifically, text-davinci-003) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It constructs a prompt based on the form and user input, sends it to the GPT-3 API via a Vercel Edge function, then streams the response back to the application.

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/verfasor/rewrite&env=OPENAI_API_KEY&project-name=rewrite&repo-name=rewrite)
