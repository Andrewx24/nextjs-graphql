import gql from 'graphql-tag';

export const typeDefs = gql`
  
type LocationWeatherType {
zip: String
weather: String
tempC: String
tempF: String
friends: [String]
}