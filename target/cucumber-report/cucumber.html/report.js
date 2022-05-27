$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": : Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-:-search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;:-:-search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;:-:-search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Jeep",
        "Any Model",
        "Any Location",
        "$20,000"
      ],
      "line": 17,
      "id": "search-functionality;:-:-search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Audi",
        "Any Model",
        "Any Location",
        "$30,000"
      ],
      "line": 18,
      "id": "search-functionality;:-:-search-the-buy-car-with-model;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6497582500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": ": : Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-:-search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 101126100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 169710100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1949038600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 36752300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "HomePageStep.iSelectMake(String)"
});
formatter.result({
  "duration": 179850200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectModel(String)"
});
formatter.result({
  "duration": 69866700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "HomePageStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 98210300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 68310700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4735299900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "HomePageStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 272119800,
  "status": "passed"
});
formatter.before({
  "duration": 4952393900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": : Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-:-search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 158670400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 130091200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 2162062400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "HomePageStep.iSelectMake(String)"
});
formatter.result({
  "duration": 121536100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectModel(String)"
});
formatter.result({
  "duration": 237743700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "HomePageStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 251914000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 177084500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3805087800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "HomePageStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 203449300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 19,
      "value": "#      | Audi | Any Model | Any Location | $50,000 |"
    },
    {
      "line": 20,
      "value": "#      | Audi | Any Model | Any Location | $30,000 |"
    },
    {
      "line": 21,
      "value": "#      | Audi | Any Model | Any Location | $50,000 |"
    }
  ],
  "line": 23,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 35,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A1",
        "Any Location",
        "$30,000"
      ],
      "line": 36,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "Any Location",
        "$50,000"
      ],
      "line": 37,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5154562900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select model \"A1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 266490900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickUsedLink()"
});
formatter.result({
  "duration": 2423304700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "HomePageStep.iSelectMake(String)"
});
formatter.result({
  "duration": 198395800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectModel(String)"
});
formatter.result({
  "duration": 124066500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "HomePageStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 93467500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 169627900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3577620100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "HomePageStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 71116400,
  "status": "passed"
});
formatter.before({
  "duration": 7248881300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 83200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 151514400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickUsedLink()"
});
formatter.result({
  "duration": 136568000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 13300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "HomePageStep.iSelectMake(String)"
});
formatter.result({
  "duration": 15597387400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectModel(String)"
});
formatter.result({
  "duration": 50888000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "HomePageStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 64308100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 63826000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 68740100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "HomePageStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 26425583200,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19527978500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names dealersName are display on page",
  "rows": [
    {
      "cells": [
        "3 Point Motors - New"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 147919300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickFindADealer()"
});
formatter.result({
  "duration": 204103700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage(DataTable)"
});
formatter.result({
  "duration": 1191942000,
  "status": "passed"
});
});