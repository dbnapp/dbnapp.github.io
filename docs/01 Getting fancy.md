# Rough draft done

So I've gotten a lot of the building blocks I wanted to get in here. Lets revisit that check list.

- [x] show some basic info about myself
- [x] share links to my stuff
- [x] showcase projects (lol)
- [x] have city pop music
- [x] nice to have some animation

Now it's still very basic. I have to talk about how exactly I want it to work. I could have it as just a static page where you scroll from top to bottom every time you refresh.... but that's too simple!

I want to have

- [ ] scrollable, you navigate the entire thing by scrolling (like what it is now)
- [ ] routing, scrolling to the different sections updates the url and history
  - [ ] subsequently pasting a route will automatically bring you to that section
- [ ] actual animation!

Still looking into it but we'll see!

# Parcel -> Vite

Oh and as a reminder to myself. Parcel worked fine with zero config out of the box, but for some reason it was having problems importing `motion/react`. Like not doing anything fancy, just the import was an issue. Couldn't find a solution quickly enough so I switched to `vite`. Thankfully it's a small project so that was an easy swap and it imported `motion/react` with no issues 🤷.

# Other cool ideas

One thing I thought might be fun is to add a dark mode. If I could I'd like to filter the background gif to make it look like a moon at night. I'm thinking I could use svg filters or something, and maybe animate the transition.

I'd also fade out and fade in different music of course.

- [ ] dark mode
