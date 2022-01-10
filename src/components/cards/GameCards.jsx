import React from "react";

const GameCards = () => {
  const data = [
    {
      image: "image 1.png",
      name: "Psychic Punkz",
      title1: "- Female/ Male",
      title2: "- Supply: 2195",
      title3: "- Access to Discord clubhouse",
      title4: "- Whitelist pass for V2",
      title5: "- Acces to Metaverse clubhouse",
      title6: "- Whitelist Pass for V2",
      bgColor: "firstCard ",
    },
    {
      image: "image 4.png",
      name: "Alchemist Punkz",
      title1: "- Female/ Male",
      title2: "- Supply: 2195",
      title3: "- Access to Discord clubhouse",
      title4: "- Whitelist pass for V2",
      title5: "- Acces to Metaverse clubhouse",
      title6: "- Whitelist Pass for V2",
      bgColor: "secondCard",
    },
    {
      image: "image 6.png",
      name: "Legendary Monkz",
      title1: "- Supply: 54",
      title2: "- Types: Fidenza, Jedi, Neo, Ether, Hero",
      title3: "- Access to Metaverse Clubhouse",
      title4: "- Access to Discord Clubhouse",
      title5: "- Free mint for V2",
      title6: " ",
      bgColor: "thirdCard",
    },
  ];
  return (
    <div className="GameCards">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4">
            <div className="cards">
              <div className={item.bgColor}>
                <img
                  className="img-fluid"
                  src={`/images/${item.image}`}
                  alt=""
                />
                <h5 className="titleName">{item.name}</h5>
                <ul className="cardlist">
                  <li>{item.title1}</li>
                  <li>{item.title2}</li>
                  <li>{item.title3}</li>
                  <li>{item.title4}</li>
                  <li>{item.title5}</li>
                  <li>{item.title6}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCards;
