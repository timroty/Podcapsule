// Changes to this file should also be reflected in the Sync template.

const title = "Podcapsule";
const url = "https://podcapsule.vercel.app";
const email = "podcapsuleapp@gmail.com"

const feed_image = "https://mefobhismocgsttbgjwe.supabase.co/storage/v1/object/public/podcapsule-bucket/podcapsule-feed-image.png";
const feed_description = "Discover new episodes from your favorite podcasts, or rediscover old ones you may have missed. With Podcapsule, you can easily track podcasts you love and uncover hidden gems you might have otherwise overlooked!";

const episode_one_url = "https://mefobhismocgsttbgjwe.supabase.co/storage/v1/object/public/podcapsule-bucket/podcapsule-episode-one.mp3";
const episode_one_title = "Welcome to Podcapsule!";
const episode_one_summary = "Podcapsule intro episode.";
const episode_one_subtitle = "Podcapsule intro episode.";
const episode_one_pubdate = "Fri, 30 Aug 2024 09:00:00 GMT";
const episode_one_duration = "00:00:12";
const episode_one_filesize = "369060";

const episode_two_url = episode_one_url;
const episode_two_title = "Start Listening to Podcapsule Today!";
const episode_two_summary = "Podcapsule second intro episode.";
const episode_two_subtitle = "Podcapsule second intro episode.";
const episode_two_pubdate = "Wed, 04 Sept 2024 09:00:00 GMT";
const episode_two_duration = episode_one_duration;
const episode_two_filesize = episode_one_filesize;

export const Template = {
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
                  "text": url
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
                  "text": title
                }
              ]
            },
            {
              "type": "element",
              "name": "generator",
              "elements": [
                {
                  "type": "text",
                  "text": title
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
                      "text": title
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "link",
                  "elements": [
                    {
                      "type": "text",
                      "text": url
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
                      "text": title
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:email",
                  "elements": [
                    {
                      "type": "text",
                      "text": email
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
                "href": url
              }
            },
            {
              "type": "element",
              "name": "pubDate",
              "elements": [
                {
                  "type": "text",
                  "text": episode_one_pubdate
                }
              ]
            },
            {
              "type": "element",
              "name": "title",
              "elements": [
                {
                  "type": "text",
                  "text": title
                }
              ]
            },
            {
              "type": "element",
              "name": "itunes:author",
              "elements": [
                {
                  "type": "text",
                  "text": title
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
                  "text": episode_two_pubdate
                }
              ]
            },
            // Episodes
            // Episode 1
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
                      "text": episode_one_title
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "description",
                  "elements": [
                    {
                      "type": "cdata",
                      "cdata": `<p>${episode_one_summary}</p>\n`
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "pubDate",
                  "elements": [
                    {
                      "type": "text",
                      "text": episode_one_pubdate
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "author",
                  "elements": [
                    {
                      "type": "text",
                      "text": email
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "link",
                  "elements": [
                    {
                      "type": "text",
                      "text": url
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "enclosure",
                  "attributes": {
                    "length": episode_one_filesize,
                    "type": "audio/mpeg",
                    "url": episode_one_url
                  }
                },
                {
                  "type": "element",
                  "name": "itunes:title",
                  "elements": [
                    {
                      "type": "text",
                      "text": episode_one_title
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:author",
                  "elements": [
                    {
                      "type": "text",
                      "text": title
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
                      "text": episode_one_duration
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:summary",
                  "elements": [
                    {
                      "type": "text",
                      "text": episode_one_summary
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:subtitle",
                  "elements": [
                    {
                      "type": "text",
                      "text": episode_one_subtitle
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
            },
            // Episode 2
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
                      "text": "761d3a04-115f-4a4c-8b05-d9cde718324b"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "title",
                  "elements": [
                    {
                      "type": "text",
                      "text": episode_two_title
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "description",
                  "elements": [
                    {
                      "type": "cdata",
                      "cdata": `<p>${episode_two_summary}</p>\n`
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "pubDate",
                  "elements": [
                    {
                      "type": "text",
                      "text": episode_two_pubdate
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "author",
                  "elements": [
                    {
                      "type": "text",
                      "text": email
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "link",
                  "elements": [
                    {
                      "type": "text",
                      "text": url
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "enclosure",
                  "attributes": {
                    "length": episode_two_filesize,
                    "type": "audio/mpeg",
                    "url": episode_two_url
                  }
                },
                {
                  "type": "element",
                  "name": "itunes:title",
                  "elements": [
                    {
                      "type": "text",
                      "text": episode_two_title
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:author",
                  "elements": [
                    {
                      "type": "text",
                      "text": title
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
                      "text": episode_two_duration
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:summary",
                  "elements": [
                    {
                      "type": "text",
                      "text": episode_two_summary
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "itunes:subtitle",
                  "elements": [
                    {
                      "type": "text",
                      "text": episode_two_subtitle
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
