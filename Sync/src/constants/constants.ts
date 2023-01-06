export const RSSFeedTemplate = {
  "declaration": {
    "attributes": {
      "version": "1.0",
      "encoding": "utf-8"
    }
  },
  "elements": [
    {
      "type": "element",
      "name": "rss",
      "attributes": {
        "xmlns:atom": "http://www.w3.org/2005/Atom",
        "xmlns:itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
        "xmlns:dc": "http://purl.org/dc/elements/1.1/",
        "xmlns:content": "http://purl.org/rss/1.0/modules/content/",
        "version": "2.0"
      },
      "elements": [
        {
          "type": "element",
          "name": "channel",
          "elements": [
            {
              "type": "element",
              "name": "link",
              "elements": [
                {
                  "type": "text",
                  "text": "LINK TO WEBSITE"
                }
              ]
            },
            {
              "type": "element",
              "name": "language",
              "elements": [
                {
                  "type": "text",
                  "text": "en-us"
                }
              ]
            },
            {
              "type": "element",
              "name": "copyright",
              "elements": [
                {
                  "type": "text",
                  "text": "©2023"
                }
              ]
            },
            {
              "type": "element",
              "name": "author",
              "elements": [
                {
                  "type": "text",
                  "text": "PodCapsule"
                }
              ]
            },
            {
              "type": "element",
              "name": "generator",
              "elements": [
                {
                  "type": "text",
                  "text": "PodCapsule"
                }
              ]
            },
            {
              "type": "element",
              "name": "image",
              "elements": [
                {
                  "type": "element",
                  "name": "url",
                  "elements": [
                    {
                      "type": "text",
                      "text": "LINK TO IMAGE"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "title",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Title of your logo"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "link",
                  "elements": [
                    {
                      "type": "text",
                      "text": "LINK TO WEBSITE"
                    }
                  ]
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:owner",
              "elements": [
                {
                  "type": "element",
                  "name": "itunes:name",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Your Name"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:email",
                  "elements": [
                    {
                      "type": "text",
                      "text": "your@email.com"
                    }
                  ]
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:explicit",
              "elements": [
                {
                  "type": "text",
                  "text": "no"
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:image",
              "attributes": {
                "href": "LINKTOIMAGE"
              }
            },
            {
              "type": "element",
              "name": "atom:link",
              "attributes": {
                "href": "INSERT RSS LINK HERE",
                "rel": "self",
                "type": "application/rss+xml"
              }
            },
            {
              "type": "element",
              "name": "atom:link",
              "attributes": {
                "rel": "hub",
                "href": "INSERT WEBSITE URL HERE"
              }
            },
            {
              "type": "element",
              "name": "pubDate",
              "elements": [
                {
                  "type": "text",
                  "text": "Fri, 05 Oct 2018 09:00:00 GMT"
                }
              ]
            },
            {
              "type": "element",
              "name": "title",
              "elements": [
                {
                  "type": "text",
                  "text": "PodCapsule"
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:author",
              "elements": [
                {
                  "type": "text",
                  "text": "PodCapsule"
                }
              ]
            },
            {
              "type": "element",
              "name": "description",
              "elements": [
                {
                  "type": "text",
                  "text": "Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed with our unique recommendation system. With PodCapsule, you can easily track podcasts you love and go back in time to be recommended old but great episodes!"
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:summary",
              "elements": [
                {
                  "type": "text",
                  "text": "Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed with our unique recommendation system. With PodCapsule, you can easily track podcasts you love and go back in time to be recommended old but great episodes!"
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:subtitle",
              "elements": [
                {
                  "type": "text",
                  "text": "Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed with our unique recommendation system. With PodCapsule, you can easily track podcasts you love and go back in time to be recommended old but great episodes!"
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:type",
              "elements": [
                {
                  "type": "text",
                  "text": "episodic"
                }
              ]
            },
            {
              "type": "element",
              "name": "lastBuildDate",
              "elements": [
                {
                  "type": "text",
                  "text": "Fri, 05 Oct 2018 09:00:00 GMT"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


var test = `<?xml version="1.0" encoding="utf-8"?>
  <rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
  <channel>
  <link>LINK TO WEBSITE</link>
  <language>en-us</language>
  <copyright>&#xA9;2023</copyright>
  <author>PodCapsule</author>
  <generator>PodCapsule</generator>
  <image>
     <url>LINK TO IMAGE</url>
     <title>Title of your logo</title>
     <link>LINK TO WEBSITE</link>
  </image>
  <itunes:owner>
     <itunes:name>Your Name</itunes:name>
     <itunes:email>your@email.com</itunes:email>
  </itunes:owner>
  <itunes:explicit>no</itunes:explicit>
  <itunes:image href="LINKTOIMAGE"/>
  <atom:link href="INSERT RSS LINK HERE" rel="self" type="application/rss+xml"/>
   <atom:link rel="hub" href="INSERT WEBSITE URL HERE"/>
  <pubDate>Fri, 05 Oct 2018 09:00:00 GMT</pubDate>
  <title>PodCapsule</title>
  <itunes:author>PodCapsule</itunes:author>
  <description>Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed with our unique recommendation system. With PodCapsule, you can easily track podcasts you love and go back in time to be recommended old but great episodes!</description>
  <itunes:summary>Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed with our unique recommendation system. With PodCapsule, you can easily track podcasts you love and go back in time to be recommended old but great episodes!</itunes:summary>
  <itunes:subtitle>Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed with our unique recommendation system. With PodCapsule, you can easily track podcasts you love and go back in time to be recommended old but great episodes!</itunes:subtitle>
  <itunes:type>episodic</itunes:type>
  <lastBuildDate>Fri, 05 Oct 2018 09:00:00 GMT</lastBuildDate>
  </channel>
  </rss>`

//   var item = `  
//   <item>
//   <title>Verbose title of the episode</title>
//   <description>Verbose description of the episode.</description>
//   <itunes:summary>Duplicate of above verbose description.</itunes:summary>
//   <itunes:subtitle>Short description of the episode - 255 character max.</itunes:subtitle>
//   <enclosure url="https://www.YourSite.com/FILE.EXT" type="audio/mpeg" length="1" />
//   <guid>https://www.YourSite.com/FILE.EXT</guid>
//   <itunes:duration>H:MM:SS</itunes:duration>
//   <pubDate>Fri, 05 Oct 2018 09:00:00 GMT</pubDate>
// </item>`;