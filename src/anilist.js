import {gql, GraphQLClient} from "graphql-request";

export const client = new GraphQLClient('https://graphql.anilist.co');

export const GETUSER = gql`
    query ($id: Int) {
        User (id: $id) {
            id
            name
            avatar {
                large
            }
            bannerImage
            statistics {
                anime {
                    minutesWatched
                }
            }
            about (asHtml: true)
        }
        
    }  
`

export const GETACTIVITY = gql`
    query ($id: Int, $page: Int, $perPage: Int) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
            }
            activities (userId: $id, sort: [PINNED, ID_DESC]) {
                ... on ListActivity {
        id
        type
        replyCount
        status
        progress
        isLocked
        isSubscribed
        isLiked
        isPinned
        likeCount
        createdAt
        user {
          id
          name
          avatar {
            large
          }
        }
        media {
          id
          type
          status(version: 2)
          isAdult
          bannerImage
          title {
            userPreferred
          }
          coverImage {
            large
          }
        }
      }
      ... on TextActivity {
        id
        type
        text
        replyCount
        isLocked
        isSubscribed
        isLiked
        isPinned
        likeCount
        createdAt
        user {
          id
          name
          avatar {
            large
          }
        }
      }
                
            }    
        } 
    }

`

import fr from "javascript-time-ago/locale/fr";
import TimeAgo from 'javascript-time-ago';

TimeAgo.addDefaultLocale(fr);

export const timeAgo = new TimeAgo('fr-FR')