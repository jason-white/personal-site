---
title: "About"
date: 2020-04-10T22:30:27-04:00
type: "static"
layout: "about"
---

## Me

My name is Jason. Professionally I'm a web designer and developer, but outside of work I really enjoy photographing things. I live in Charlotte, North Carolina with my husband. Dog is pending.

In 2020 I decided I wanted to be a little more hands-on. I enjoyed the days when everyone had a website and shared little snippets of their personal life or hobbies. Before services and web applications became the norm.

So that's what this website is, really. Getting back to doing a lot of the things I used to enjoy and documenting them. Sure, there are many other ways of documenting every day life, but those are kinda boring.

## This Site

The site is built using {{< link href="https://gohugo.io/" text="Hugo" >}}, a static site generator. Hugo is built using Golang and boy is it _fast_ with near-instant build times. It took a little while to get used to. This post from {{< link href="https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/" text="Sara Soueidan's" >}} site helped a lot in understanding just how Hugo's templating works. Once you get the hang of it you will soon realize how endless the possibilities are.

The hosting and continuous integration is handled beautifully by {{< link href="https://www.netlify.com/" text="Netlify" >}}. I have Netlify watching the site's github repository and any time I push a change, Netlify picks up on it and starts building a new copy of the site right away. It's such an incredibly smooth process, I love it. I'm even making use of some Netlify serverless functions, which are basically AWS Lambda functions, but Netlify has simplified the whole process.

Media is hosted and delivered via {{< link href="https://cloudinary.com" text="Cloudinary" >}}. Excellent service with loads of features for delivering media. I can upload a full-size photograph and deliver multiple edited versions each with their own URL. For example, I can resize, crop, set automatic format delivery for one copy of an image, and then serve a whole different copy of the same image with it's own settings. This comes in handy for creating a thumbnail and full size image for journal posts.

✌️
