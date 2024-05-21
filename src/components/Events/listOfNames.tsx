import React from "react";

const NamesList: React.FC = () => {
  const names: string[] = [
    "Amplify Ride Lift Flow",
    "Annex Surf Shop",
    "Ash Klusterman",
    "Aussie Island",
    "Barbra Jean",
    "Behind bars Liftstyle & apperal",
    "Bert's Surf Shop2 Wheeler Dealer",
    "Big Scott @ 'The Compound'",
    "Broomtail Brewery",
    "Brooklyn Pizza",
    "Caitlyn Varrone",
    "Carolina Coast Collision",
    "Castle Street Kitchen",
    "CB Surf Shop",
    "Carol Daley",
    "Cheese Smith",
    "Cheryl Loiacono",
    "Cherie Anderson",
    "Chili's",
    "Clean Eatz",
    "Complex Bean",
    "Davids Deli",
    "El Cerro Grande",
    "Emma Cap",
    "Flaming Amys",
    "Flying Machine Brewery",
    "Full Moon Healing Studio",
    "Helena Flahive",
    "Handy Andys",
    "Jacob Nordan",
    "Jade Monkey Tattoo",
    "Jakes Detailing",
    "Jacob Nordan",
    "Jessica & John Spencer",
    "Jimi Woodruff State Farm",
    "Joe Biundo",
    "Kegg & Egg",
    "Ken Dolbow",
    "Kieth & Beverely Andrews",
    "Kim Whyte",
    "Krispy Kreme",
    "Luke & Ronni Woolard",
    "Marshall Michaelson",
    "Mess Hall",
    "Mystic Elements",
    "Nothing Bundt Cakes",
    "Nutri Prime",
    "Papa Murpheys Pizza",
    "Permanent Vacation Skate Shop",
    "Peno Mediteranian",
    "Peter Lodica",
    "Phillip Nadeau",
    "Port City Pools",
    "Robert Foti",
    "Robin Manning",
    "Roger Hadgraft",
    "Royal Artware Studios",
    "Salter Speed Shop",
    "Salon Centric",
    "Sandra Nunziata",
    "School Kids Records",
    "Seaview Seafood",
    "Shakka Taco",
    "Sierra Dawn & Jacob Payne",
    "Southport Tap and Cellar",
    "Supreme Nutrition",
    "Tara Cross My Heart Creations",
    "Tavern 14",
    "Taste of Italy",
    "The Civilians",
    "The Martino Family",
    "Tom McCarthy",
    "Unwind Nails & Bar",
    "Wilmington Brewery",
    "17th St Surf Shop",
    "Ash Klusterman",
    "Sierra Dawn & Jacob Payne",
    "Jeremy & Ashley Pope",
    "Many, many more!",
  ];

  // Ensure names are split into 4 columns of 20 each
  const columns = [];
  const itemsPerColumn = 40;
  for (let i = 0; i < 2; i++) {
    columns.push(names.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
  }

  return (
    <div style={{ display: "flex" }}>
      {columns.map((col, colIndex) => (
        <ul
          key={colIndex}
          style={{
            flex: 1,
            listStyleType: "none",
            padding: "0 10px",
            textAlign: "center",
          }}
        >
          {col.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default NamesList;
