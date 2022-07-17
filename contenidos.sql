-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-07-2022 a las 19:22:07
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenidos`
--

CREATE TABLE `contenidos` (
  `id` varchar(20) NOT NULL,
  `header_img` varchar(300) NOT NULL,
  `lang` varchar(20) NOT NULL,
  `title` varchar(20) NOT NULL,
  `url` varchar(200) NOT NULL,
  `description` varchar(500) NOT NULL,
  `created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contenidos`
--

INSERT INTO `contenidos` (`id`, `header_img`, `lang`, `title`, `url`, `description`, `created`) VALUES
('2cneq', 'https://b.thumbs.redditmedia.com/fREkTALOGCmOydgClyhaIy6k30jm0NdIVpAT0wi--QA.png', 'en', 'Politics', '/r/politics/', '## **Welcome to /r/Politics! Please read [the wiki](/r/politics/w/index) before participating.** ||  [Voter Registration Resources](https://www.reddit.com/r/politics/comments/9irkg3/rpolitics_wants_you_to_register_to_vote_for/) || [Important: Reminder/clarification of our civility guidelines](https://www.reddit.com/r/politics/comments/flv4ef/a_clarificationreminder_of_our_rules_regarding/)\n/r/politics is the subreddit for current and explicitly political U.S. news.\n\n### [Our full rules](https://', '1186377399'),
('2qh03', 'https://b.thumbs.redditmedia.com/K8MxV_4PrLwLVMqluld4wpgrbFE2mF3aa3rMv5xT3IY.png', 'en', 'r/gaming', '/r/gaming/', '**If your submission does not appear, do not delete it. Simply [message the moderators](https://www.reddit.com/message/compose?to=/r/gaming) and ask us to look into it.**\n\n*Do NOT private message or use reddit chat to contact moderators about moderator actions. Only message the team via the link above. Directly messaging individual moderators may result in a temporary ban.*\n\n\n\n---\n#Community Rules\n\n1. **Submissions must be directly gaming-related**, not just a \"forced\" connection via the title o', '1190054605'),
('2qh13', 'null', 'en', 'World News', '/r/worldnews/', '', '1201231119'),
('2qh1i', 'https://a.thumbs.redditmedia.com/IrfPJGuWzi_ewrDTBlnULeZsJYGz81hsSQoQJyw6LD8.png', 'es', 'Ask Reddit...', '/r/AskReddit/', '###### [ [ SERIOUS ] ](http://www.reddit.com/r/askreddit/submit?selftext=true', '1201233135'),
('2qh33', 'https://b.thumbs.redditmedia.com/9WOt1zfBi4hFqwZgIIT4SUP8A7xOoqmRNQE9cg7LVng.png', 'en', 'funny', '/r/funny/', '**Welcome to r/Funny:**\n\n\nYou may only post if you are funny. \n\n\n**Please read [our complete rules page](https://www.reddit.com/r/funny/wiki/rules) before posting.**\n\n-----\n\n[New to Reddit? Click here!](/wiki/reddit_101)\n\n---\n##### New \"Subreddit Of The Month\": [/r/cleandadjokes] (https://www.reddit.com/r/cleandadjokes/)\n\n\n|||\n|-|-|\n| **Featured Subreddit of the Month: /r/cleandadjokes** | [Link to sticky post](https://www.reddit.com/r/funny/comments/voxeqa/subreddit_of_the_month_july_2022_rclea', '1201242956'),
('2qh3l', 'https://a.thumbs.redditmedia.com/d1huQb5y8kISty2ax02MmO7pK5uVJt1pGuSqOiOjIl0.png', 'en', 'News', '/r/news/', '', '1201243765'),
('2qhsa', 'https://b.thumbs.redditmedia.com/7wwZOEGowP8VfaKDXrolxpjSE39GjnqTsfb6BSSM7pU.png', 'en', 'Interesting As Fuck', '/r/interestingasfuck/', '---\n\nA place to share (almost) anything and everything interesting as fuck.\n\n---\n\n# [Rules (click for more details on the rules)](https://www.reddit.com/r/interestingasfuck/comments/ij26vk/rules_of_the_subreddit_if_these_are_broken_your/)\n\n\n|||\n|:------|:---|\n|1. Posts must be IAF| No screenshots, unneeded sound on gifs/videos, memes, funny things, edgyness, cuteness, porn, click bait, etc., AI-generated images, illusions, most arts/crafts, conceptual things that are not actuality, architecture,', '1207822208'),
('2qs0k', 'null', 'en', 'Home', '/r/Home/', 'Everything home related: interior design, home improvement, architecture.\n\n**Related subreddits**\n--------------------------\n* [/r/InteriorDesign](http://www.reddit.com/r/interiordesign)\n* [/r/architecture](http://www.reddit.com/r/architecture)\n* [/r/houseporn](http://www.reddit.com/r/houseporn)\n* [/r/roomporn](http://www.reddit.com/r/roomporn)\n* [/r/designmyroom](http://www.reddit.com/r/designmyroom)', '1232850357'),
('2r05i', 'https://b.thumbs.redditmedia.com/_J-qf37qKLV9YDnyzSrazonFiPR7LSZTOTUILuaXp5A.png', 'en', 'Minecraft on reddit', '/r/Minecraft/', '### ', '1244686767'),
('2r5rp', 'https://b.thumbs.redditmedia.com/pDyA8ZEQoJnlPMbtYxmMOMFlA0-8qm6F1Z_cFbieynE.png', 'en', 'A gallery of inexpli', '/r/facepalm/', '[Click here to not view Coronavirus posts](https://www.reddit.com/r/facepalm/search?q=NOT flair:Coronavirus', '1251449390'),
('2rfxx', 'https://b.thumbs.redditmedia.com/aTjwRcNAi6fxZ6ROTvbn-a_LD3eeCoXF-bkvJ1oQ_KA.png', 'en', 'League Of Legends', '/r/leagueoflegends/', '1. **[Patch 12.13 Bug Megathread](https://www.reddit.com/r/leagueoflegends/comments/vxrcy4/patch_1213_bug_megathread/)**\n\n\n[](https://discord.gg/lol)\n\n', '1263422348'),
('2ti4h', 'https://b.thumbs.redditmedia.com/92kXFhefN4BHY7ZK-82Hoj5NHbMP3Io1EUGWjV7Hy2g.png', 'en', 'For photos that are,', '/r/mildlyinteresting/', 'Aww, cripes. I didn\'t know I\'d have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff. Stuff that interests you. Mildly. It\'s in the name, ffs.\n\n[](#header)\n\n**Does your post qualify for /r/MildlyInteresting? Hover below for more info, and check out our [wiki page](/r/mildlyinteresting/wiki)!**\n\n-----\n', '1328424881'),
('2to41', 'https://a.thumbs.redditmedia.com/dJbIoj1O3ZfaBtYWtsCk1FRtbxdLQvlbP0WngEy85y0.png', 'en', 'Today I Fucked Up', '/r/tifu/', '', '1330829154'),
('2ubgg', 'https://b.thumbs.redditmedia.com/rmlXC779KUA2MTO4r_GJd2enqa8GKx3BOasymol6gLk.png', 'en', 'jukmifgguggh', '/r/mildlyinfuriating/', '', '1339961663'),
('2uqcm', 'https://e.thumbs.redditmedia.com/gPmIRa9hJtOT7u4L.png', 'en', 'MadeMeSmile', '/r/MadeMeSmile/', '[**New to reddit? Click here!**](/wiki/reddit_101)  \n  \nWelcome! /r/MadeMeSmile is a place to share things that made you smile or brightened up your day.  A generally uplifting subreddit.\n\nRules:\n  \n1.  Don\'t be a jerk.  This subreddit is /r/MadeMeSmile, and it\'s curated as such. We do not tolerate personal attacks, hate speech, harassment, racism, sexism, or other jerk-like behavior (includes gatekeeping posts).  [SEE MORE HERE](https://www.reddit.com/r/mademesmile/wiki/rule1)\n\n2.  No ragebait ', '1344621277'),
('2w67q', 'https://b.thumbs.redditmedia.com/qeRa-Ucl3I32HU_14ojjFoRljS05rX-lg26XP9M1JdI.png', 'en', 'Unexpected', '/r/Unexpected/', '[Join Discord Chat](https://discord.gg/J5BnS6h)\n\n#**Rules and Guidelines:**\n 1. Submissions must be unexpected on their own, and not rely on their title to surprise the reader. Don\'t give the outcome away in the title. \nTitles should not include \"unexpected, expected, expects, expect\" \n\n 2. Do NOT rehost webcomics. You may provide an imgur mirror in the comments.\n 3. Mark all NSFW/NSFL submissions as such. **A warning tag on a post may mean NSFL, morbid content, gore, cruelty, etc. - \nNo Death**', '1359322704'),
('2w7mz', 'https://b.thumbs.redditmedia.com/JQgfgZVmHIlgdo2CxcGI8hSgFlFTJxXPYiXS2kUT7PY.png', 'en', 'Everything about Tin', '/r/Tinder/', 'A community for discussing the online dating app [Tinder](http://www.gotinder.com/). \n\n##### [Rules](https://www.reddit.com/r/Tinder/wiki/rules)\n\n### [1. NSFW Posts](https://www.reddit.com/r/TinderNSFW)\n* NSFW posts are allowed, but if you see a post violating any laws or Reddit\'s rules please report it.\n\n### 2. [Personal Information](https://www.reddit.com/r/Tinder/wiki/rules#wiki_2._personal_information)\n* Images that contain personal information (phone numbers, addresses, Facebook accounts, u', '1359678801'),
('2w844', 'https://c.thumbs.redditmedia.com/_qQNmzt3pW1yC7Vn.png', 'en', 'No such thing as stu', '/r/NoStupidQuestions/', '###There is no such thing as a Stupid Question!\n\nDon\'t be embarrassed of your curiosity; everyone has questions that they may feel uncomfortable asking certain people, so this place gives you a nice area not to be judged about asking it. Everyone here is willing to help. All questions are welcome such as to how to change oil, to how to tie shoes. All questions are welcome - except clear trolls, please don\'t be that guy. Thanks for reading all of this, even if you didn\'t read all of this, and you', '1359795144'),
('2x2oy', 'https://b.thumbs.redditmedia.com/OR8Iai5Vw5TGOPXydhmqC8A0T_8QIGVeet3L06mnR1U.png', 'en', 'What Could Possibly ', '/r/Whatcouldgowrong/', '**What Could Go Wrong?**\n----------------------------------------\n\n**Welcome** to /r/whatcouldgowrong, the home of stupid ideas and their consequences.  Grab a chair and popcorn, sit back, and you\'re all set.\n\n-\n\n**Banner Art Creds:** u/j0eg0d, u/Peanutbuttered, u/donutsfritos\n\n**CSS Credits:** u/Cryptonaut \nhttps://www.reddit.com/r/naut/\n\n**RULES**\n-------------\n**NOTE** We\'ve switched to **New Reddit**.  View us on New Reddit for the most up-to-date Rules.\n\n**1)** Golden Rule: Links must conta', '1367100374'),
('2xhvq', 'https://a.thumbs.redditmedia.com/N2BhWUpC2AfU_svaFLVr4ji1h3JHr_MOyig_5j20c44.png', 'en', 'Am I the Asshole? ', '/r/AmItheAsshole/', '#Welcome to r/AmITheAsshole!\n\nA catharsis for the frustrated moral philosopher in all of us, and a place to finally find out if you were wrong in a real-world argument that\'s been bothering you. Tell us about any non-violent conflict you have experienced; give us both sides of the story, and find out if you\'re right, or you\'re the asshole.\n\nThis is the sub to lay out your  actions and conflicts and get impartial judgment rendered against you.  Were you the asshole in that situation or not? Post ', '1370722490'),
('2y77d', 'null', 'en', 'Antiwork: Unemployme', '/r/antiwork/', ' \n***\n \n##Antiwork 101\n \n- [The Mythology of Work](https://crimethinc.com/2018/09/03/the-mythology-of-work-eight-myths-that-keep-your-eyes-on-the-clock-and-your-nose-to-the-grindstone) by CrimethInc.\n \n- [The Abolition of Work](https://theanarchistlibrary.org/library/bob-black-the-abolition-of-work) by Bob Black \n\n- [On the Phenomenon of Bullshit Jobs]\n(https://www.occupy.com/article/graeber-phenomenon-bullshit-jobs) by David Graeber\n \n- [In Praise of Idleness](https://archive.org/details/in.ern', '1376485719'),
('2yo6b', 'null', 'en', 'oddlyterrifying', '/r/oddlyterrifying/', '#Rules\n\n1.  No politics/political posts\n\n2.  Use descriptive titles\n\n3.  Be nice\n\n4.  No death/near-death, violence or gore\n\n5. No spam of any kind\n\n6. No jump-scares or obviously fake submissions\n\n7. No meta posts\n\n8. Mods reserve the right to remove content or restrict users\' posting privileges as necessary, if it is deemed detrimental to the subreddit or to the experience of others\n\n9. No reposts from the last 2 months or from the top 100', '1380695908'),
('2yrq6', 'https://a.thumbs.redditmedia.com/QPRnUiar7ozSwbJX9_RpAW1y6r1ZZjxWCoUezMk5mu4.png', 'en', '/r/PublicFreakout', '/r/PublicFreakout/', '##### [Join our Discord Server!](https://discord.gg/tcneqz7)\n\n##About:\n\nA subreddit dedicated to people freaking out, melting down, losing their cool, or being weird in public. Drugged out or sober, anything goes. Keep the comments respectful where mental disorders are concerned, and remember that the individuals depicted in these videos are real people too. This subreddit is essentially dedicated to their worst moments, so do keep that in mind.\n\nSaturated with TV and movies, our brains have bec', '1381610009'),
('38jf0', 'null', 'en', 'r/LivestreamFail: Li', '/r/LivestreamFail/', '---\n \n##Welcome\n \n* Welcome to /r/LivestreamFail: the place for almost anything livestream related.\n\n* Please read our rules [here](https://www.reddit.com/r/LivestreamFail/wiki/rules) before joining in on the discussion.\n\n* No moderators of this subreddit work for Twitch.\n\n---\n\n##Filter by Flair\n#####[How does this work?](https://www.reddit.com/r/LivestreamFail/wiki/flair_filtering)\n\n######Meta Flairs\n[IRL](https://www.reddit.com/r/LivestreamFail/search/?sort=top', '1433716387'),
('m0bnr', 'https://b.thumbs.redditmedia.com/ZYuVQ_lgBeGnkVXrgtWHen9vU8hUJmOnYRVS1lUSRss.png', 'en', '⬆ Next Fucking Level', '/r/nextfuckinglevel/', 'A subreddit for gifs and videos that are on another level. \n\nThe **Next Fucking Level**\n\n---\n*Please read the wiki before posting*\n\n##Rules:\n\n#Post Appropriate Content\nContent posted to /r/nextfuckinglevel should represent something impressive, be it an action, an object, a skill, a moment, a fact that is above all others. Posts should be able to elicit a reaction of \"that is next level\" from viewers.\n\n#Use A Descriptive Title\nWrite a clear title for your content that describes the post well. If', '1532004315');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contenidos`
--
ALTER TABLE `contenidos`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
