---
type: "journal"
title: "Stay In Lane"
date: 2024-03-10T12:03:27-04:00
draft: false
thumbnail: "https://res.cloudinary.com/dpmsynxig/image/upload/c_scale,f_auto,q_auto:good,w_740/v1710086494/2024%20Posts/2024-03-10_stay-in-lane/untitled-9.jpg"
image: "https://res.cloudinary.com/dpmsynxig/image/upload/f_auto,q_auto:good/v1710086494/2024%20Posts/2024-03-10_stay-in-lane/untitled-9.jpg"
alt: "the view from a passenger seat driving through a tunnel at night. there are repeating signs that read 'stay in lane'"
caption: "Ricoh GR III X"
tags:
    - griiix
---

The photo and title are unrelated.

I've been itching to redesign this site for a while now, and finally started to do so. At least three different ideas were almost fully realized and then scrapped. I am very bad about this.

As I was digging in, though, I started to notice that I was doing some things "wrong" in Hugo (the static site generator that builds this page.) I also started to notice a lot of accessibility issues. Nothing major, but there were a couple of things I was not doing and a couple of things I was doing that wasn't necessary.

So the other day I decided to (once again) scrap all of the styles, but this time purposely implement a very simple layout to get started on fixing things from the inside out. This worked well, and now the site is in a usable state. I can start making posts again and stop worrying about how it looks.

## Some things so far

-   Made the [Now](/now) pages a section of posts. Mainly for archiving, organization and maybe RSS. I'm still unsure on this. Maybe it should just be its own page, but I like the idea of archiving too much.
-   Made [Links](/links) a section of posts rather than using Pinboard. The idea here is to roll them into RSS. Either one big RSS feed or separate everything into individual feeds. Or both!
-   Used Hugo menus properly so that I can add them anywhere and loop over them.
-   External links are now accessible
-   Removed unnecessary role properties from landmark regions

## Future (maybe) things

-   Convert the journal section into a photos section, and then create a section for smaller posts. Similar to Colly's {{< link href="https://colly.com/stream" text="secondary 'stream'" >}} of posts. Having different post types is starting to make me feel like I'm building my own custom Tumblr page. I kinda miss Tumblr. I know it's still there, but I'm not interested in using it anymore.
-   Add all of my books to {{< link href="https://www.librarything.com/" text="Library Thing" >}} and pull in books with their API. Or just make a yaml file of my books and loop over that. I sort of want to stay clear of APIs in case they change something.
-   Revisit adding some sort of gallery or favorite photos page. Or maybe a proper portfolio? I'm not sure just yet. I don't really have "work", just a bunch of snapshits.

The possibilities of a personal site are endless. You can do as much or as little as you want.
