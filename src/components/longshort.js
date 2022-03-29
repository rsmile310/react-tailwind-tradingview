import React, {useState} from "react";

import {FaRegCircle, FaMinusCircle, FaPlusCircle} from "react-icons/fa"

import ArrowUp from '../assets/arrow-up.svg';
import ArrowDown from '../assets/arrow-down.svg';

function LongShort() {
    const [value, setValue] = useState(20);
    const [short, setShort] = useState(false);
    const [long, setLong] = useState(true);

    const handleTab = (isSelected) => {
        if(isSelected === 'long') {
            setLong(true);
            setShort(false);
        } else {
            setLong(false);
            setShort(true);
        }
    }

    return (
        <div className="long-short-panel">
            <ul className="tab-item">
                <li className={long ? 'active' : ''} onClick={() => handleTab('long')}><img src={ArrowUp} alt="long" /> Long</li>
                <li className={short ? 'active' : ''} onClick={() => handleTab('short')}><img src={ArrowDown} alt="short" /> Short</li>
            </ul>
            <div className="tab-panel">
                <h4 className="slider-title">Leverage Slider</h4>
                <input type="range" id="leverage" min="5" max="150" step="1" className="slider" value={value} onChange={(e) => { setValue(e.target.value)}}  />
                <div className="trailing-section">
                    <ul className="badge-items">
                        <li className="active">
                            <p className="badge red">-$58.43</p>
                            <p className="badge-title">Stop Loss</p>
                        </li>
                        <li>
                            <p className="badge grey">X5</p>
                            <p className="badge-title">Leverage</p>
                        </li>
                        <li>
                            <p className="badge green">$599.94</p>
                            <p className="badge-title">Take Profit</p>
                        </li>
                    </ul>
                    <div className="open-price">
                        <span><FaMinusCircle /></span>
                        <span>1,034.34</span>
                        <span><FaPlusCircle /></span>
                    </div>
                    <p className="pos-amount">49.45% Of the Position Amount</p>
                    <hr />
                    <p><FaRegCircle color="rgba(76, 175, 80, 1)" className="reg-circle-icon" /> Trailing Stop Loss</p>
                </div>
                <div className="trailing-section connect-wall-button">
                    <ul className="invoice-list">
                        <li>
                            <span>Profits In</span>
                            <span>BSC</span>
                        </li>
                        <li>
                            <span>Leverage</span>
                            <span>2x</span>
                        </li> 
                        <li>
                            <span>Entry Price</span>
                            <span>$89.34</span>
                        </li> 
                        <li>
                            <span>Liq. Price</span>
                            <span>-</span>
                        </li> 
                        <li>
                            <span>Fees</span>
                            <span>-</span>
                        </li> 
                    </ul>
                    <a className="button connect-wallet" href="/connect-wallet">Connect Wallet</a>
                </div>
            </div>
        </div>
    );
}

export default LongShort;
