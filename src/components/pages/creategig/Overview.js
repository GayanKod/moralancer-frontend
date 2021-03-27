import React from "react";
import {MenuItems} from "../../MenuItems";

function Overview() {
    return(
        <div className="container">
            <form>
                <p>
                    Gig title : <input type="text" placeholder="I will do something I'm really good at"></input>
                </p>
                <p>
                    Category : <select placeholder="Select a category">
                        <option>{MenuItems[0].title}</option>
                        <option>{MenuItems[1].title}</option>
                        <option>{MenuItems[2].title}</option>
                        <option>{MenuItems[3].title}</option>
                        <option>{MenuItems[4].title}</option>
                        <option>{MenuItems[5].title}</option>
                    </select>
                </p>
            </form>
        </div>
    );    
}

export default Overview;