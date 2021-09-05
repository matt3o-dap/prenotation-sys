/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUtenti = /* GraphQL */ `
  query GetUtenti($id: ID!) {
    getUtenti(id: $id) {
      id
      cognome
      nome
      codice_fiscale
      prenotation_pin
      createdAt
      updatedAt
    }
  }
`;
export const listUtentis = /* GraphQL */ `
  query ListUtentis(
    $filter: ModelUtentiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUtentis(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognome
        nome
        codice_fiscale
        prenotation_pin
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
