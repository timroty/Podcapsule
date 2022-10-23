var convert = require('xml-js');

var test = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:anchor="https://anchor.fm/xmlns">
    <channel>
        <title>
            <![CDATA[Revisionist History podcast]]>
        </title>
        <description>
            <![CDATA[Revisionist History is Malcolm Gladwell's journey through the overlooked and the misunderstood. Every episode re-examines something from the past—an event, a person, an idea, even a song—and asks whether we got it right the first time. ]]>
        </description>
        <link>https://anchor.fm/bum9</link>
        <image>
            <url>https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg</url>
            <title>Revisionist History podcast</title>
            <link>https://anchor.fm/bum9</link>
        </image>
        <generator>Anchor Podcasts</generator>
        <lastBuildDate>Thu, 20 Oct 2022 11:09:00 GMT</lastBuildDate>
        <atom:link href="https://anchor.fm/s/65404254/podcast/rss" rel="self" type="application/rss+xml"/>
        <author>
            <![CDATA[bum]]>
        </author>
        <copyright>
            <![CDATA[bum]]>
        </copyright>
        <language>
            <![CDATA[en]]>
        </language>
        <atom:link rel="hub" href="https://pubsubhubbub.appspot.com/"/>
        <itunes:author>bum</itunes:author>
        <itunes:summary>Revisionist History is Malcolm Gladwell&apos;s journey through the overlooked and the misunderstood. Every episode re-examines something from the past—an event, a person, an idea, even a song—and asks whether we got it right the first time. </itunes:summary>
        <itunes:type>episodic</itunes:type>
        <itunes:owner>
            <itunes:name>bum</itunes:name>
            <itunes:email>podcasts60+65404254@anchor.fm</itunes:email>
        </itunes:owner>
        <itunes:explicit>No</itunes:explicit>
        <itunes:category text="History"/>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
        <item>
            <title>
                <![CDATA[ Let's Talk Turkey!]]>
            </title>
            <description>
                <![CDATA[<p>Turkey scientist Rich Buchholz of the University of Mississippi talks about the turkey on your plate and his own turkey research</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Lets-Talk-Turkey-e1onlue</link>
            <guid isPermaLink="false">1e388612-ba72-4f68-8d91-23572d4614f8</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 11:26:09 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58496398/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2F2e128123-e804-ad18-5f3b-5ae0f5533313.mp3" length="8571963" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;Turkey scientist Rich Buchholz of the University of Mississippi talks about the turkey on your plate and his own turkey research&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:08:55</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Roman Sanitation Didn't Stop Roaming Parasites]]>
            </title>
            <description>
                <![CDATA[<p>Cambridge's Piers Mitchell, author of the 2015 book Sanitation, Latrines and Intestinal Parasites in Past Populations, talks about the counterintuitive findings in his recent paper in the journal Parasitology titled "Human parasites in the Roman World: health consequences of conquering an empire."</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Roman-Sanitation-Didnt-Stop-Roaming-Parasites-e1onlr3</link>
            <guid isPermaLink="false">8646c724-e4e3-4bfd-9ef3-2cdc653dbc63</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 11:23:36 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58496291/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2F09c6d2b1-3fd2-8a3f-8fbd-58334baa0023.mp3" length="8016534" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;Cambridge&apos;s Piers Mitchell, author of the 2015 book Sanitation, Latrines and Intestinal Parasites in Past Populations, talks about the counterintuitive findings in his recent paper in the journal Parasitology titled &quot;Human parasites in the Roman World: health consequences of conquering an empire.&quot;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:08:21</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Teaching Machines to Learn on Their Own]]>
            </title>
            <description>
                <![CDATA[<p>talks with Scientific American tech editor Larry Greenemeier about the revolution underway in machine learning, in which the machine eventually programs itself</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Teaching-Machines-to-Learn-on-Their-Own-e1onlph</link>
            <guid isPermaLink="false">874f278f-a5ca-4da9-bd07-6eba31a14e86</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 11:19:37 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58496241/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2F470f9cea-90b4-ddee-caa0-5e395952cf55.mp3" length="6202165" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;talks with Scientific American tech editor Larry Greenemeier about the revolution underway in machine learning, in which the machine eventually programs itself&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:06:27</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Nobel Prize Explainer: Autophagy]]>
            </title>
            <description>
                <![CDATA[<p>The Nobel Prize in Physiology or Medicine was awarded today to Yoshinori Ohsumi of Japan for his discoveries concerning autophagy. Following the announcement, journalist Lotta Fredholm spoke to Juleen Zierath, chair of the Nobel Committee for Physiology or Medicine, about the research.</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Nobel-Prize-Explainer-Autophagy-e1onlm0</link>
            <guid isPermaLink="false">018e0f49-9289-4702-b966-9e577c8e0f17</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 11:17:13 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58496128/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2Ffb5b0ff1-a00b-1ba6-780f-0b03bab0c7c9.mp3" length="8551931" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;The Nobel Prize in Physiology or Medicine was awarded today to Yoshinori Ohsumi of Japan for his discoveries concerning autophagy. Following the announcement, journalist Lotta Fredholm spoke to Juleen Zierath, chair of the Nobel Committee for Physiology or Medicine, about the research.&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:08:54</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Thule and the Apes of Earth]]>
            </title>
            <description>
                <![CDATA[<p>As the New Horizons mission approached Ultima Thule, Rowan University paleontologist Kenneth Lacovara put our close-up study of the Kuiper Belt object into a deep-time perspective.</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Thule-and-the-Apes-of-Earth-e1onljl</link>
            <guid isPermaLink="false">3502ed16-7953-4390-ae1f-2a5b1911de1d</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 11:14:06 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58496053/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2F88c9a354-4a89-7754-d75d-b88fc237ef86.mp3" length="8163623" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;As the New Horizons mission approached Ultima Thule, Rowan University paleontologist Kenneth Lacovara put our close-up study of the Kuiper Belt object into a deep-time perspective.&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:08:30</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Hope Lies in Dreams,' a New Podcast from Nature Biotechnology]]>
            </title>
            <description>
                <![CDATA[<p>This is a story of desperation, anger, poverty—and triumph over long odds to crack the code of a degenerative disease that had been stealing the lives of children since it was first discovered more than a century ago.</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Hope-Lies-in-Dreams--a-New-Podcast-from-Nature-Biotechnology-e1onlhl</link>
            <guid isPermaLink="false">d35d36b5-c637-4260-9f9a-f82d8f7e6e52</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 11:10:37 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58495989/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2F9e8149c5-8865-1a12-134b-c4741d097d3e.mp3" length="2176673" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;This is a story of desperation, anger, poverty—and triumph over long odds to crack the code of a degenerative disease that had been stealing the lives of children since it was first discovered more than a century ago.&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:04:32</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[ Love History? Listen to This Podcast]]>
            </title>
            <description>
                <![CDATA[<p>In the newest season of Lost Women of Science, we enter a world of secrecy, computers and nuclear weapons—and see how Klára Dán von Neumann was a part of all of it.</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Love-History--Listen-to-This-Podcast-e1onlgc</link>
            <guid isPermaLink="false">612502a1-4cc9-4406-86c2-a1b6cbf2482f</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 11:09:36 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58495948/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2F2bdb2e8a-778b-2653-c291-822ce0ff2f76.mp3" length="4896705" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;In the newest season of Lost Women of Science, we enter a world of secrecy, computers and nuclear weapons—and see how Klára Dán von Neumann was a part of all of it.&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:05:06</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[American after Sandy]]>
            </title>
            <description>
                <![CDATA[<p>American Editor in Chief Mariette DiChristina brings us up to date on the state of our New York City-based operation after Sandy. Recorded October 31 at 2:30 P.M Eastern time</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/American-after-Sandy-e1onlf6</link>
            <guid isPermaLink="false">145ca757-246c-45a2-b5ea-05a5396db7f9</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 11:08:32 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58495910/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2F8efee940-5785-971b-74ac-c32a4c04a09e.mp3" length="6630941" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;American Editor in Chief Mariette DiChristina brings us up to date on the state of our New York City-based operation after Sandy. Recorded October 31 at 2:30 P.M Eastern time&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:06:54</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[ Dark Energy Made Light]]>
            </title>
            <description>
                <![CDATA[<p>Researchers are making small claws out of dead spiders, dandelion seeds are inspiring scientists to mimic their distribution with small sensors to be able to better track ecological information, and the Dark Energy Spectroscopic Instrument is helping us create a 3D map of the universe.</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Dark-Energy-Made-Light-e1onl8o</link>
            <guid isPermaLink="false">a8092d81-5aea-407e-bdbe-7073d6fc49bb</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 11:02:54 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58495704/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2F288999661-44100-2-9760564e435a8.m4a" length="11660186" type="audio/x-m4a"/>
            <itunes:summary>&lt;p&gt;Researchers are making small claws out of dead spiders, dandelion seeds are inspiring scientists to mimic their distribution with small sensors to be able to better track ecological information, and the Dark Energy Spectroscopic Instrument is helping us create a 3D map of the universe.&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:12:00</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Perks of Whale Poop, Found Dino Tracks]]>
            </title>
            <description>
                <![CDATA[<p>A Swedish company has created a new anti-hangover pill that reduces the short-term effects of drinking, whale poop is helping our ocean’s ecosystems, and a recent drought in Texas revealed the footprints from a dinosaur over 100 million years ag</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Perks-of-Whale-Poop--Found-Dino-Tracks-e1onl7c</link>
            <guid isPermaLink="false">40cc1ae1-3b4f-414c-b563-06c391692e5e</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Mon, 03 Oct 2022 10:57:33 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/58495660/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-9-3%2F288999288-44100-2-593ca1f16c9d2.m4a" length="11725954" type="audio/x-m4a"/>
            <itunes:summary>&lt;p&gt;A Swedish company has created a new anti-hangover pill that reduces the short-term effects of drinking, whale poop is helping our ocean’s ecosystems, and a recent drought in Texas revealed the footprints from a dinosaur over 100 million years ag&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:12:04</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -10]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--10-e152j4c</link>
            <guid isPermaLink="false">333a552b-81aa-402c-bfe4-5ca7582f4b4d</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:56:42 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882444/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2F92efac42-86d3-d307-8092-6fde539f1b97.mp3" length="5732101" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:58</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -9]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--9-e152j3n</link>
            <guid isPermaLink="false">76688596-e320-405d-b9e5-02a2c7f27cf4</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:56:29 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882423/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2F48412866-ee53-a350-f67f-10b02b153f9d.mp3" length="5732101" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:58</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -8]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--8-e152j3o</link>
            <guid isPermaLink="false">d3c68c3a-a780-44b1-878c-d7f461092006</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:56:23 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882424/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2F64aaa898-ebac-da81-8e9a-fea121420408.mp3" length="5728340" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:58</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -7]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--7-e152j3m</link>
            <guid isPermaLink="false">1f8f7fb8-2907-4b38-8c84-c8e106c8da59</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:56:16 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882422/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2F79a5965b-54ae-36e8-2ce7-9f053d0c6f1e.mp3" length="5737116" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:59</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -6]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--6-e152j2l</link>
            <guid isPermaLink="false">e0aaf2db-d615-4ddc-921b-8fbe64257633</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:55:56 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882389/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2Fa42759b5-cf00-bc54-3a1b-1e134332ea96.mp3" length="5733355" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:58</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -5]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--5-e152j2i</link>
            <guid isPermaLink="false">dade2cce-7154-4b08-916a-8e99f987be87</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:55:49 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882386/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2Fd4314f33-d40c-fdd2-8dc3-0f94a85a1b92.mp3" length="5730847" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:58</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -4]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--4-e152j2g</link>
            <guid isPermaLink="false">5ea1f0ca-88af-42c6-b3dd-76d93d5214c4</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:55:43 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882384/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2F8060622f-d11d-b02a-c9bc-349825b1c3a8.mp3" length="5734608" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:58</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -3]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--3-e152j2e</link>
            <guid isPermaLink="false">c082569e-9978-4cd3-9d25-1f3bc6981428</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:55:28 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882382/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2F5127cd27-6941-550c-c78b-f62af5ccd9a8.mp3" length="5732101" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:58</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -2]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--2-e152j2a</link>
            <guid isPermaLink="false">e86dcb2c-a501-40e2-b902-159fc937ee05</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:55:16 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882378/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2F74442333-d809-388d-d4c1-4e2085eac234.mp3" length="5729594" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:58</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract Part -1]]>
            </title>
            <description>
                <![CDATA[<p><strong>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</strong></p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-Part--1-e152j29</link>
            <guid isPermaLink="false">62da993d-1011-4286-b794-ddaf2448ed2f</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Tue, 27 Jul 2021 02:55:09 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37882377/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-27%2F8076c662-1781-3258-764c-0d4697e99d1a.mp3" length="5736488" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;&lt;strong&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/strong&gt;&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:03:59</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
        <item>
            <title>
                <![CDATA[Little Mermaid Part 1: The Golden Contract]]>
            </title>
            <description>
                <![CDATA[<p>Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.</p>
]]>
            </description>
            <link>https://anchor.fm/bum9/episodes/Little-Mermaid-Part-1-The-Golden-Contract-e14u4si</link>
            <guid isPermaLink="false">d55a7f19-d9ef-4111-b3fa-1fd56c13eaa2</guid>
            <dc:creator>
                <![CDATA[bum]]>
            </dc:creator>
            <pubDate>Sat, 24 Jul 2021 02:44:13 GMT</pubDate>
            <enclosure url="https://anchor.fm/s/65404254/podcast/play/37736786/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-6-24%2F2e198af8-135d-bb02-cdd8-9415da2939e9.mp3" length="57375907" type="audio/mpeg"/>
            <itunes:summary>&lt;p&gt;Revisionist History takes on The Little Mermaid: a deep dive into a world where merpeople present us with a series of vexing moral conundrums. Part one of three.&lt;/p&gt;
</itunes:summary>
            <itunes:explicit>No</itunes:explicit>
            <itunes:duration>00:39:48</itunes:duration>
            <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/16887101/16887101-1627094826163-6534f4c04bcd3.jpg"/>
            <itunes:episodeType>full</itunes:episodeType>
        </item>
    </channel>
</rss>`;

var result1 = convert.xml2json(test, {compact: false, spaces: 4});
var result2 = convert.json2xml(result1, {compact: false, spaces: 4});
console.log(result2)
