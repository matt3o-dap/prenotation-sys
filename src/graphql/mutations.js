/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUtenti = /* GraphQL */ `
  mutation CreateUtenti(
    $input: CreateUtentiInput!
    $condition: ModelUtentiConditionInput
  ) {
    createUtenti(input: $input, condition: $condition) {
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
export const updateUtenti = /* GraphQL */ `
  mutation UpdateUtenti(
    $input: UpdateUtentiInput!
    $condition: ModelUtentiConditionInput
  ) {
    updateUtenti(input: $input, condition: $condition) {
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
export const deleteUtenti = /* GraphQL */ `
  mutation DeleteUtenti(
    $input: DeleteUtentiInput!
    $condition: ModelUtentiConditionInput
  ) {
    deleteUtenti(input: $input, condition: $condition) {
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
