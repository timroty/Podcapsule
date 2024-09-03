const feed_image = "https://mefobhismocgsttbgjwe.supabase.co/storage/v1/object/public/podcapsule-bucket/Podcapsule.png";
const feed_description = "Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed. With Podcapsule, you can easily track podcasts you love and go back in time to be recommended old but great episodes!";

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
                  "text": "https://podcapsule.vercel.app"
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
                      "text": feed_image
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
                  "name": "link",
                  "elements": [
                    {
                      "type": "text",
                      "text": "https://podcapsule.vercel.app"
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
                      "text": "PodCapsule"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:email",
                  "elements": [
                    {
                      "type": "text",
                      "text": "podcapsuleapp@gmail.com"
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
                "href": feed_image
              }
            },
            {
              "type": "element",
              "name": "atom:link",
              "attributes": {
                "href": "",
                "rel": "self",
                "type": "application/rss+xml"
              }
            },
            {
              "type": "element",
              "name": "atom:link",
              "attributes": {
                "rel": "hub",
                "href": "https://podcapsule.vercel.app"
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
                  "text": feed_description
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:summary",
              "elements": [
                {
                  "type": "text",
                  "text": feed_description
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:subtitle",
              "elements": [
                {
                  "type": "text",
                  "text": feed_description
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
            },
            {
              "type": "element",
              "name": "item",
              "elements": [
                {
                  "type": "element",
                  "name": "guid",
                  "attributes": {
                    "isPermaLink": "false"
                  },
                  "elements": [
                    {
                      "type": "text",
                      "text": "140dabd0-9cb9-42ef-936b-9f60a847da29"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "title",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Welcome to PodCapsule!"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "description",
                  "elements": [
                    {
                      "type": "cdata",
                      "cdata": "<p>Welcome to Podcapsule!</p>\n"
                    }
                  ]
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
                  "name": "author",
                  "elements": [
                    {
                      "type": "text",
                      "text": "podcapsuleapp@gmail.com"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "link",
                  "elements": [
                    {
                      "type": "text",
                      "text": "https://podcapsule.vercel.app/"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "content:encoded",
                  "elements": [
                    {
                      "type": "cdata",
                      "cdata": "<p>Welcome to PodCapsule! Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed. Each day, PodCapsule will recommend you a new episode from podcasts you favorite and place them on your feed. </p>\n"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "enclosure",
                  "attributes": {
                    "length": "369060",
                    "type": "audio/mpeg",
                    "url": "https://mefobhismocgsttbgjwe.supabase.co/storage/v1/object/public/podcapsule-bucket/podcapsule.mp3"
                  }
                },
                {
                  "type": "element",
                  "name": "itunes:title",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Welcome to PodCapsule!"
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
                  "name": "itunes:image",
                  "attributes": {
                    "href": feed_image
                  }
                },
                {
                  "type": "element",
                  "name": "itunes:duration",
                  "elements": [
                    {
                      "type": "text",
                      "text": "00:00:12"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:summary",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Welcome to PodCapsule! Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed. Each day, PodCapsule will recommend you a new episode from podcasts you favorite and place them on your feed."
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:subtitle",
                  "elements": [
                    {
                      "type": "text",
                      "text": "Welcome to PodCapsule! Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed. Each day, PodCapsule will recommend you a new episode from podcasts you favorite and place them on your feed."
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
                  "name": "itunes:episodeType",
                  "elements": [
                    {
                      "type": "text",
                      "text": "full"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
