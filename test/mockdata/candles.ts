import { Candle, ExchangePair } from "../../src/domain";



export default candles.map(candle => new Candle({
      ...candle,
      openAt : new Date(candle.openAt),
      closeAt : new Date(candle.closeAt),
      pair: candle.pair as ExchangePair,
      interval: "1m"
    }));