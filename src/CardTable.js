import React from "react";
import "./CardTable.css";
import DrawCard from './Deck';
import KeepDrawingCard from './KeepDrawingCard';

/* Main component. Renders card lists for
 * playing cards and pokemon. */
function CardTable() {
  return (
    <div className="CardTable">
      <main>
        <DrawCard />
        <KeepDrawingCard />
      </main>
    </div>
  );
}

export default CardTable;
