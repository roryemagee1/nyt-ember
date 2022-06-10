# nyt-ember

This project is a proof-of-concept application that simulates the buying and selling of NFTs (non-fungible tokens) made from NYT articles.

The the application will use an auction format that will commence in four stages, namely Surveying, Valuation, Bidding, and Allocation.  Each phase is detailed below.

## Stages

### Surveying

In the surveying phase, the hypothetical seller will select to make a set of articles from the New York Times Top Article API available for NFT conversion on our application.

Then the hypothetical buyers will survey the articles provided to see which ones they like using our online interface.

### Valuation

Once the all of the buyers have completed surveying the articles, the valuation phase will commence.

The hypothetical seller will assign two hidden prices to each articles they've made available.  

One price will be the minimum price they're willing to accept for selling the NFT rights of the article.  The other price will be the ideal price they will accept for selling the NFT rights.

the hypothetical buyers will then assign a hidden price to each article specifying the maximum they would be willing to pay for the NFT rights for each article.

After that, a price ceiling value will be calculated from the average maximum price specified.  This price ceiling maximum value will be saved and will remain hidden from the buyers.

### Bidding

After the the Valuation phase, the hypothetical buyers will have a live bidding auction on each article between themselves.  

A clock will countdown from 10 minutes with the addition of 10 seconds after every new bid is made by a buyer.  

Once the clock reaches 0, the highest bid of the individual buyer will be saved.

If at any point one of the buyers bids more than the ideal price of the article, the article's NFT rights will be immediately sold to them at the price the provide, so long as the ideal price does not exceed the average maximum price specified earlier.

### Allocation

In the final stage, the top bids will be compared to the minimum price, the ideal price, and maximum price set by the seller.

If the final bid by the top buyer is less than the minimum price set by the seller, the bid will be rejected and the seller will keep the NFT rights to the article.

If the final bid is greater than the minimum price, but less than the ideal price, the buyer will receive the NFT rights to the article and they will be allocated to their account accordingly.

As noted before, if the bid price of the top buyer ever meets or exceeds the ideal price of the seller, then they will receive the NFT rights to the article at the specified price, immediately.  Therefore, during this phase, the NFT rights will be formally allocated to their account.

### Discussion

The point of this auction is to gaurantee that the seller will received a fair price for the NFT rights to their article, while also facilitating a competitive market valuation amongst the buyers.

The seller gets the option to specify a hidden range that they consider to be a fair price.

The buyers get the option to compete for each article's NFT rights while also being prevented from overbidding on each article.

The point of the buyers being able to specify a maximum price is to incentivized the seller to not game the system by just specifying a ridiculously high ideal price.  In other words, the seller must specify a truly ideal price, otherwise, they risk having the bid be rejected by system.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd nyt-ember`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
