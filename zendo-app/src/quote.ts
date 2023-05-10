export interface QuoteData {
  // q --> quote text
  // a --> author name
  // i --> author image (key required)
  // c --> character count
  // h --> pre-formatted HTML quote
  quote: {
    q: string;
    a: string;
  };
}

export interface Quote {
  q: string;
  a: string;
}