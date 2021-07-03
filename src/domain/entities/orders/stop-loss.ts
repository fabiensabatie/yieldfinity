import { ComparerMode } from "../../port/entities/indicators/triggers/indicator-trigger.port";
import { OrderState } from "../../port/entities/orders/order.port";
import { StopLossTakeProfitProps } from "../../port/entities/orders/stop-loss-take-profit.port";
import { Order } from "./order";

export class StopLoss {
  constructor(private props : StopLossTakeProfitProps) {}
  
  get value()  : number { return this.props.value };
  get reference() : "price" | "pnl" { return this.props.reference };

  isReached = (order: Order, currentPrice: number) => {
    return order.side === "ask" ?
      this.reference === "price" ? currentPrice <= this.value : order.state.pnl <= this.value
    : this.reference === "price" ? currentPrice >= this.value : order.state.pnl <= this.value
  }
}