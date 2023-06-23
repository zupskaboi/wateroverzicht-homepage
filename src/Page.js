import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import logo from './img/logo.png';
import rond1 from './img/rond.png';
import rond2 from './img/rond2.png';




const Page = () => {
    return (
        <div>
            <div className="overzicht-buttons">
                <table>
                    <tbody>
                        <tr>
                            <td><button type="button">Maand</button></td>
                            <td><button type="button">Jaar</button></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td><button type="button">Verbruikt</button></td>
                            <td><button type="button">Bespaard</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="buttons">
                <ion-icon id="buttonL" name="arrow-back-outline"></ion-icon>
                <ion-icon id="buttonR" name="arrow-forward-outline"></ion-icon>
            </div>
            <div id="maanden">Hier komt de maand</div>

            <div className="bespaard-rondje">
                <img id="bespaard-rondje1" src={rond1} alt="rond" />
                <img id="bespaard-rondje2" src={rond2} alt="rond2" />
                <img id="bespaard-rondje3" src={rond2} alt="rond2" />
            </div>

            <div className="grafiek">
            </div>
        </div>
    );
};

export default Page;
