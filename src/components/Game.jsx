import React from "react";
import GameCards from "./cards/GameCards";

const Game = () => {
    return (
        <div className="Game" id="gameSection">
            <div className="container">
                <h1 className="mainHeading">Who are we?</h1>
                <p className="subText">We are the Punkz of the Future.</p>
                <p>
                    We represent the values of decentralization, community and freedom. Imagine what the evolution of
                    Cryptopunks would look like. Thats us!
                    <br/>
                    Futuristic mask styles, freaky hairstyles, neon eyes, lightsabers, cyber-shades, 3 species and many
                    unique traits that make our collection the freshest Punk style artwork that’s out there.
                    <br/>
                    Some traits and backgrounds are inspired and paying homage to Fidenza, Cyberkongz, Cryptoadz,
                    Dystopunks, Cryptopunks, and the culture of our generation. By holding one future punk you are
                    holding the membership pass to our DAO ecosystem with future drops and many perks.
                    <br/>
                    We believe that web3 is the Future and that we can create a decentralized world.
                     <br/><br/>
                    <strong>Lets DAO it the right way.</strong>
                </p>
                <div>
                    <GameCards/>
                </div>
                <div className="row my-4">
                    <div className="col-md-4">
                        <p>Psychic Punkz have the power to buy and flip.</p>
                    </div>
                    <div className="col-md-4">
                        <p>Alchemist Punkz have the power to buy and hold.</p>
                    </div>
                    <div className="col-md-4">
                        <p>Legendary Monkz have the power to pick a side</p>
                    </div>
                    <div className="col-12 my-3">
                        <p>
                            The goal is to have more in your wallet than the other team by the
                            end of the game. Small battles and attacks gives your team the
                            opportunity to challenge the others and steal from them.
                        </p>
                        <p>
                            The winner gets the right over both wallets. We will not only
                            focus on buying NFTs but also on crypto currencies and metaverse
                            land. Share your best alpha with your tribe, strategize and raise
                            the value of your token. Let the battle begin!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
