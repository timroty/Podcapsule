const RSSFeedTemplate = {
    "declaration": {
      "attributes": {
        "version": "1.0",
        "encoding": "UTF-8"
      }
    },
    "elements": [
      {
        "type": "element",
        "name": "rss",
        "attributes": {
          "version": "2.0",
          "xmlns:dc": "http://purl.org/dc/elements/1.1/",
          "xmlns:content": "http://purl.org/rss/1.0/modules/content/",
          "xmlns:atom": "http://www.w3.org/2005/Atom",
          "xmlns:itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd"
        },
        "elements": [
          {
            "type": "element",
            "name": "channel",
            "elements": [
              {
                "type": "element",
                "name": "title",
                "elements": [
                  {
                    "type": "cdata",
                    "cdata": "PodCapsule Podcast Time Capsule!"
                  }
                ]
              },
              {
                "type": "element",
                "name": "description",
                "elements": [
                  {
                    "type": "cdata",
                    "cdata": "PodCapsule reccommends old episodes of podcasts to a custom RSS feed to put episodes fresh on your feed that you may have missed!  "
                  }
                ]
              },
              {
                "type": "element",
                "name": "link",
                "elements": [
                  {
                    "type": "text",
                    "text": "INSERT WEBSITE LINK HERE"
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
                        "text": "IMAGE LINK HERE"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "name": "title",
                    "elements": [
                      {
                        "type": "text",
                        "text": "Podcapsule"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "name": "link",
                    "elements": [
                      {
                        "type": "text",
                        "text": "INSERT LINK HERE"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "name": "generator",
                "elements": [
                  {
                    "type": "text",
                    "text": "Podcapsule"
                  }
                ]
              },
              {
                "type": "element",
                "name": "lastBuildDate",
                "elements": [
                  {
                    "type": "text",
                    "text": "Thu, 20 Oct 2022 11:09:00 GMT"
                  }
                ]
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
                "name": "author",
                "elements": [
                  {
                    "type": "cdata",
                    "cdata": "PodCapsule"
                  }
                ]
              },
              {
                "type": "element",
                "name": "copyright"
              },
              {
                "type": "element",
                "name": "language",
                "elements": [
                  {
                    "type": "cdata",
                    "cdata": "en"
                  }
                ]
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
                "name": "itunes:summary",
                "elements": [
                  {
                    "type": "text",
                    "text": "PodCapsule reccommends old episodes of podcasts to a custom RSS feed to put episodes fresh on your feed that you may have missed! "
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
                        "text": "timroty13@gmail.com"
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
                    "text": "No"
                  }
                ]
              },
              {
                "type": "element",
                "name": "itunes:image",
                "attributes": {
                  "href": "INSERT IMAGE LINK HERE"
                }
              }
            ]
          }
        ]
      }
    ]
  }